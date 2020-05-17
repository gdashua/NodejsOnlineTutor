var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var AdminSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password:{
        type: String,
        bcrypt: true
    },
    password2:{
        type: String,
        bcrypt: true
    }
});