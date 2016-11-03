/*
    SERVER WARLORDS BATTLES
 */


var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');

// MONGO CONNEXION
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/warlords-battles', function (error) {
    if (error) {
        console.log(error);
    }
});


// ROUTING  -------------------------------
var fronted = require('./app/fronted');
var api = require('./app/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serveur settings
var port = process.env.PORT || 8080;

// ROUTES -------------------------------

app.use('/api', api);
app.use('/app', fronted);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// START  -------------------------------
app.listen(port, function () {
    console.log('Warlords-Battles server is running on port 8080');
});

module.exports = app;