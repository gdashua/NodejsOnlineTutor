var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var BookingSchema = mongoose.Schema({
    lesssonID: {type: mongoose.Schema.Types.ObjectId},
    Date: {type: Date}
});