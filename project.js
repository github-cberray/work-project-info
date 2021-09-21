const mongoose = require('mongoose');

// SCHEMA
const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    owner: String
});

module.exports = mongoose.model('Project', projectSchema);