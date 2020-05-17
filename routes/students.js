const express = require('express');
const router = express.Router();

//see all tutors taking a subject in a category
router.get('/dashboard/allTutorsInACat', (req, res)=> res.render('allTutorsInACat'));
//book lessons 
router.get('/dashboard/bookLessons', (req, res)=> res.render('bookLessons'));

module.exports = router;