const { Types } = require('mongoose');

const { Enrollment } = require('../models/Enrollment');
const { Course } = require('../models/Course');

class EnrollmentService {
  enrollStudent(enrollmentData) {
    return Enrollment.create(enrollmentData);
  }

  async validateEnrollment(enrollment) {
    // Validate course existence and mongoose id
    const isValidObjectId = Types.ObjectId.isValid(enrollment.course);
    const course = await Course.findById(enrollment.course);

    if (!isValidObjectId && !course) {
      return 'Invalid Course Id.';
    }

    // Validate student existence
    if (enrollment.student.length < 1 || !enrollment.student) {
      return 'Student name is required.';
    }

    return true;
  }
}

module.exports = new EnrollmentService();
