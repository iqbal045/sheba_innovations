const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    student: {
      type: String,
      trim: true,
      required: true,
    },
    enrolled_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

enrollmentSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
  },
});

exports.Enrollment = mongoose.model('Enrollment', enrollmentSchema);
