const express = require('express');
const router = express.Router();

//Create subjects under a category
router.put('/dashboard/createSubByCat', (req, res)=> res.render('createSubByCat'));
//Register page
router.update('/dashboard/updateSubInACatBy:id', (req, res)=> res.render('updateSubInACatById'));
//retrieve a subject by category
router.delete('/dashboard/delSubInCat:id', (req, res)=> res.render('delSubInCat'));
//retrieve all subjects by category 
router.update('/dashboard/delOrUpdateACat', (req, res)=> res.render('delOrUpdateACat'));
//retrieve all tutors
router.get('/dashboard/retrieveAllTutors', (req, res)=> res.render('retrieveAllTutors'));
//delete or deactivate a tutor 
router.delete('/dashboard/delTutor', (req, res)=> res.render('delTutor'));
//get a tutor by ID 
router.get('/dashboard/delTutor', (req, res)=> res.render('delTutor'));
//book lessons 
router.put('/dashboard/bookLesson', (req, res)=> res.render('bookLesson'));
//retrieve all lessons 
router.get('/dashboard/retAllLessons', (req, res)=> res.render('retAllLessons'));
//retrieve a lesson by ID
router.get('/dashboard/retALessons', (req, res)=> res.render('retALessons'));
//update a lesson by ID
router.get('/dashboard/retALesson', (req, res)=> res.render('retALesson'));
//delete a Lesson by ID
router.get('/dashboard/delALesson', (req, res)=> res.render('retALesson'));

module.exports = router;