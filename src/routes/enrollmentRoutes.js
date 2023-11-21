const router = require('express').Router();
const { enroll } = require('../controllers/EenrollmentController');

router.post('/', enroll);

module.exports = router;
