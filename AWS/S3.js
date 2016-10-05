var AWS = require('aws-sdk'),
    s3 = new AWS.S3({
        apiVersion: '2006-03-01'
    });

AWS.config.accessKeyId = "";
AWS.config.secretAccessKey = "";


s3.putObject({
    Bucket: 'bucketname',
    Key: 'tests/file.txt',
    Body: "testdata"
}, function(err, res) {
    console.log(res);
});

s3.getObject({
   Bucket: 'bucketname',
   Key: 'tests/file2.txt'
}, function(err, res) {
   console.log(res.Body.toString());
});
