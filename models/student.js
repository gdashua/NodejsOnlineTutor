var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var TutorSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username:{
        type: String,
        bcrypt: true
    },
    email:{
        type: String,
        bcrypt: true
    },
    Category: {type: [mongoose.Schema.Types.ObjectId]},
});