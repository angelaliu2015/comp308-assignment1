let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    date: currentDate
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About'
   });
});

/* GET Project page. */
router.get('/project', (req, res, next) => {
  res.render('project', {
    title: 'Project'
   });
});

/* GET Service page. */
router.get('/service', (req, res, next) => {
  res.render('service', {
    title: 'Service'
   });
});

/* GET Contact Me page. */
router.get('/contactme', (req, res, next) => {
  res.render('contact', {
    title: 'Contact Me'
   });
});
module.exports = router;