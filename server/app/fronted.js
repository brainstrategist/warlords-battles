var express = require('express');
var router = express.Router();
var path = require('path');

// middleware that is specific to this router
router.use('/',express.static(__dirname+'/../../client/dist'));

// define the home page route
router.get('/*', function (req, res) {
    var path = 'index.html';
    res.sendfile(path, {'root': __dirname+'/../../client/dist'});
});

module.exports = router;
