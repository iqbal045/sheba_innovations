const router = require('express').Router();
const {
  getAllCourses,
  getSingleCourse,
  createCourse,
  filterCourses,
} = require('../controllers/CourseController');

router.get('/', getAllCourses);

router.get('/:id', getSingleCourse);

router.post('/', createCourse);

router.get('/filter', filterCourses);

module.exports = router;
