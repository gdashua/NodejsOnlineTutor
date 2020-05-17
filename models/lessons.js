var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var LessonSchema = mongoose.Schema({
        lessonID: {type: mongoose.Schema.Types.ObjectId},
        lesson_title: {type: String},
        leson_body: {type: String},
        subID: {type: mongoose.Schema.Types.ObjectId}
});