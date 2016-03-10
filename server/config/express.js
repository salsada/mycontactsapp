var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {

    function compile (str, path){
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public'));
}