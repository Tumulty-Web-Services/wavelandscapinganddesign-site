require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    // set it up to first grab the INSTAGRAM ACCESS TOKEN
    // then pass it to the URL
    const url = 'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"10982627174","first":20,"after":null}';
    const request = await fetch(url).then((data) => data.json());

    // request.data.filter((_, i) => i <= 9 && _.media_type === 'IMAGE')
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        body: request.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
          media_url: edge.node.thumbnail_resources[4].src,
          caption: edge.node.edge_media_to_caption.edges[0].node.text,
          id: edge.node.id,
        })),
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
