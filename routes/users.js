const express = require('express');
const router = express.Router();

//Login page
router.get('/login', (req, res)=> res.render('login'));
//Register page
router.get('/register', (req, res)=> res.render('register'));
//retrieve a subject by category
router.get('/dashboard/SubByCat:id', (req, res)=> res.render('subByCat'));
//retrieve all subjects by category 
router.get('/dashboard/allSubByCat:id', (req, res)=> res.render('allSubByCat'));
//search for subjects by name sorted alphabetically in ascending order
router.get('/dashboard/allSubByCat:id', (req, res)=> res.render('allSubByCat'));
//search for tutors by firstname sorted in ascending order  
router.get('/dashboard/allSubByCat:id', (req, res)=> res.render('allSubByCat'));

module.exports = router;