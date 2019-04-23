var mongoose = require('mongoose');

var projectSchema =  new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
});

module.exports = mongoose.model('Project', projectSchema);