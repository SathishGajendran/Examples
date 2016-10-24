var AWS = require('aws-sdk'),
    DynamoDB = new AWS.DynamoDB({
        apiVersion: '2012-08-10'
    });

AWS.config.accessKeyId = "";
AWS.config.secretAccessKey = "";
// localdatakinesis

DynamoDB.listTables({
    // ExclusiveStartTableName: 'data',
    Limit: 90  //default is 100
}, function(err, res) {
    console.log(res);
});
