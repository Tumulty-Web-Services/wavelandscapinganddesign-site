require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
    const request = await fetch(url).then((data) => data.json());

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        url,
        request,
        // body: request.data.filter((_, i) => i <= 9 && _.media_type === 'IMAGE'),
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
