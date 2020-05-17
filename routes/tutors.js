const express = require('express');
const router = express.Router();

//register to take a subject in a category
router.put('/dashboard/registerTutor', (req, res)=> res.render('registerTutor'));
//see all subjects you have registered to take
router.get('/dashboard/allRegisteredSub', (req, res)=> res.render('allRegisteredSub'));
//update a subject you have registered to take
router.get('/dashboard/updateRegSub', (req, res)=> res.render('updateRegSub'));
//delete a registered subject 
router.get('/dashboard/delRegSub', (req, res)=> res.render('delRegSub'));

module.exports = router;