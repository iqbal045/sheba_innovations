const router = require('express').Router();
const {
  getAllCourses,
  getSingleCourse,
  createCourse,
  filterCourses,
} = require('../controllers/CourseController');

router.get('/', getAllCourses);

router.get('/filter', filterCourses);

router.get('/:id', getSingleCourse);

router.post('/', createCourse);

module.exports = router;
