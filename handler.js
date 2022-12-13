"use strict";

module.exports.hello = async (event) => {
  console.log(process.env.SLS_MONGODB_URI);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
