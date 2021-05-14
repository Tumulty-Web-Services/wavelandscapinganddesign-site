require('dotenv').config();
const Instagram = require('instagram-web-api');

exports.handler = async () => {
  const client = new Instagram({
    username: process.env.INSTA_USERNAME,
    password: process.env.INSTA_PASSWORD,
  });

  // const photos = await client.getPhotosByUsername({ username: 'wavelandscapingdesign' })

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
