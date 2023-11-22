const response = require('../helpers/response');
const EnrollmentService = require('../services/EnrollmentService');

// enroll a student in a course
exports.enroll = async (req, res) => {
  try {
    const { course, student } = req.body;

    // validate enrollment
    const validateEnrollment = await EnrollmentService.validateEnrollment({
      course,
      student,
    });
    if (validateEnrollment !== true) {
      return response.error(res, {}, validateEnrollment, 400);
    }

    // create enrollment
    const enrollment = await EnrollmentService.enrollStudent({
      course,
      student,
    });

    return response.success(
      res,
      enrollment,
      'Student enrolled successfully.',
      201,
    );
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};
