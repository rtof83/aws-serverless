"use strict";

const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.deleteItem = (event, context, callback) => {
  const params = {
    TableName: 'ItemTable',
    Key: {
      id: event.pathParameters.id
    }
  };

  dynamodb.delete(params, (error) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t remove the item.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };
    callback(null, response);
  });
};