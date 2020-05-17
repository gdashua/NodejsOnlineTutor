var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var categSchema = mongoose.Schema({
    classID: {type: [mongoose.Schema.Types.ObjectId]},
    subject: [{
        subID:{type: [mongoose.Schema.Types.ObjectId]},
        }],
});