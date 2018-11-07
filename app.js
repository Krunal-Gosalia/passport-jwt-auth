var express = require('express'),
    app = express(),
    config = require('./server/config'),
    Fs = require('fs');
path = require('path');

/* Added Passport JWT Authentication required modules */
_ = require("lodash");
jwt = require('jsonwebtoken');
passport = require("passport");
passportJWT = require("passport-jwt");


require('./server/config/express')(app, config);

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);
require('./server/config/routes')(app, config, passport);

app.listen(8000);
console.log('Listening on port 8000...');