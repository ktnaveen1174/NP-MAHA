let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let eventController = require('../controllers/event')
//const event = require('../models/event');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);


router.get('/course', indexController.displayCoursePage);


router.get('/business', indexController.displayBusinessPage);


router.get('/communication', indexController.displayCommunicationPage);


router.get('/engineering', indexController.displayEngineeringPage);


router.get('/healthscience', indexController.displayHealthsciencePage);


router.get('/transportation', indexController.displayTransportationPage);


router.get('/faculty', indexController.displayFacultyPage);


router.get('/contact', indexController.displayContactPage);


router.get('/login', indexController.displayLoginPage);


/* GET Event page. */
router.get('/event', eventController.displayEventList);
//router.delete('/event/delete/:id', indexController.performDelete);



module.exports = router;
