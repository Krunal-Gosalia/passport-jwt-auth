/*This File contains all the general application configurations*/

var path = require('path'),
    rootPath = path.normalize(__dirname + '/.././');


module.exports = {
    database: 'mongodb://localhost:27017/test',
    secret: 'S3cRetK3y',
    rootPath: rootPath,
    jwtSession: { session: false }
}