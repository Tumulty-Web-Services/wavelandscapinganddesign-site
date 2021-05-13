exports.handler = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        body: "We aren't need anymore",
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
