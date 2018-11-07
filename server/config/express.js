var express = require('express'),
    bodyParser = require('body-parser'),
    expressHbs = require('express-handlebars'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    stapes = require('stapes');

module.exports = function(app, config) {

    app.engine('hbs', expressHbs({
        extname: 'hbs',
        defaultLayout: 'main.hbs',
        partialsDir: config.rootPath + '/views/partials'
    }));

    app.set('view engine', 'hbs');

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json())
    app.use(express.static(config.rootPath + '/public'));

    app.use(cors({ credentials: true, origin: true }));

    mongoose.connect(config.database, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Connected to database' + config.database);
    });

    mongoose.connection.on('error', (err) => {
        console.log('Database error:' + err);
    });
}