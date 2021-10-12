"use strict";

const AWS = require("aws-sdk")

const deleteItem = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const {id} = event.pathParameters

  let msg;
 
  try {
    const result = await dynamodb.delete({
      TableName: "ItemTable",
      Key: {id}
    }).promise();

    msg = 'Item ' + result.msg + ' deleted';

  } catch (error) {
    console.log(error)
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(msg),
  };
};

module.exports = {
    handler:deleteItem
}
