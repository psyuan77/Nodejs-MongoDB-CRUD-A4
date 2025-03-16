const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.Index);
router.get('/about', indexController.About);
router.get('/contact', indexController.Contact);
router.post('/contact', indexController.SubmitContact); //Handle form submissions

module.exports = router;
