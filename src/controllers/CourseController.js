const response = require('../helpers/response');
const CourseService = require('../services/CourseService');

// get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await CourseService.getCourses();

    return response.success(
      res,
      courses,
      'All Courses fetched successfully.',
      200,
    );
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// get single course
exports.getSingleCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseService.getCourseById(id);

    return response.success(res, course, 'Course fetched successfully.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// create course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, instructor, duration } = req.body;
    const course = await CourseService.createCourse({
      title,
      description,
      price,
      instructor,
      duration,
    });

    return response.success(res, course, 'Course created successfully.', 201);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// filter courses
exports.filterCourses = async (req, res) => {
  try {
    // url: '/api/courses/filter?title=value&instructor=value&duration=value&price=value'
    const filter = {};

    ['title', 'instructor', 'duration', 'price'].forEach(param => {
      if (req.query[param]) {
        filter[param] = req.query[param];
      }
    });

    const filteredCourses = await CourseService.filterCourses(filter);

    if (!filteredCourses || filteredCourses.length === 0) {
      return response.error(res, {}, 'Courses not found.', 404);
    }

    return response.success(
      res,
      filteredCourses,
      'Courses filtered successfully.',
      200,
    );
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};
