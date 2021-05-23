/* eslint-disable no-return-await */
require('dotenv').config();
const fs = require('fs');
const rmfr = require('rmfr');
const Instagram = require('instagram-web-api');
const axios = require('axios');

const writeImagesToDir = (url, imagePath) => {
  axios({
    url,
    responseType: 'stream',
  }).then(
    (response) => new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(imagePath))
        .on('finish', () => resolve())
        .on('error', (e) => reject(e));
    }),
  );
};
exports.handler = async () => {
  const client = new Instagram({
    username: process.env.INSTA_USERNAME,
    password: process.env.INSTA_PASSWORD,
  });

  await client.login();

  const instagram = await client.getPhotosByUsername({
    username: process.env.INSTA_USERNAME,
  });

  (async () => await rmfr('./public/images/instagram/*'))();

  instagram.user.edge_owner_to_timeline_media.edges.forEach(async (i) => {
    await writeImagesToDir(i.node.display_url, `./public/images/instagram/${i.node.id}.jpg`);
  });

  const feed = instagram.user.edge_owner_to_timeline_media.edges.map((i) => ({
    id: i.node.id,
    dimensions: {
      width: i.node.dimensions.width,
      height: i.node.dimensions.height,
    },
    url: `${i.node.id}.jpg`,
    caption: i.node.edge_media_to_caption.edges[0].node.text,
  }));

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        msg: 'Here are the latest Instagram posts',
        data: feed || [],
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};
