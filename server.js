var express = require('express'),
    logger = require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

var app = express();

var config = {
    rootPath: __dirname
}

require('./server/config/express.js')(app, config);

require('./server/config/routes.js')(app);




var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');

