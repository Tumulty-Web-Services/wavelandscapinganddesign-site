require('dotenv').config();
const Instagram = require('instagram-web-api');
const fetch = require('node-fetch');

const fetchAsBlob = (url) => fetch(url)
  .then((response) => response.blob());

const convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

exports.handler = async () => {
  const client = new Instagram({
    username: process.env.INSTA_USERNAME,
    password: process.env.INSTA_PASSWORD,
  });

  await client.login();

  const profile = await client.getHome();

  const photos = profile.data.user.edge_web_feed_timeline.edges.map(({ node }) => ({
    media_url: node.display_url,
    caption: node.edge_media_to_caption.edges[0].node.text,
    id: node.id,
  }));

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        body: photos,
        msg: 'Here are the latest Instagram posts',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};
