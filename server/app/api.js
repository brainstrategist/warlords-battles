var express = require('express');
var router  = express.Router();
var Player  = require('./models/player');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API ROUTER CALLED');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the Warlords Battles -- API --' });
});


// API CLASSES
var Player  = require('../app/models/player');

router.route('/player')
    .get(function(req, res) {

        Player.find({}, function (err, docs) {
            res.json(docs);
        });

    }).post(function(req, res) {

        var newUser = new Player();
        newUser.name=req.body.name;

        newUser.save(function(err) {
            if (err) throw err;

            // finding the document intentionally for this example
            Player.find({_id: newUser._id}, function(err, users) {
                var user = users[0];
                res.json(user);
            });

        });
})




module.exports = router;