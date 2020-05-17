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
    subject: [{
        subID:{type: [mongoose.Schema.Types.ObjectId]},
        subTitle:{type: String},
        Category: {type: [mongoose.Schema.Types.ObjectId]},
    }]
});