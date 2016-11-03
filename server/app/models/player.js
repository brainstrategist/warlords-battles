var mongoose     = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var PlayerSchema = new Schema({
    name: String
});

// Mongoose Model definition
module.exports = mongoose.model('players', PlayerSchema);