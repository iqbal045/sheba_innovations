const { Course } = require('../models/Course');

class CourseService {
  getCourses() {
    return Course.find();
  }

  createCourse(courseData) {
    return Course.create(courseData);
  }

  getCourseById(courseId) {
    return Course.findById(courseId);
  }

  filterCourses(filters) {
    return Course.find(filters);
  }
}

module.exports = new CourseService();
