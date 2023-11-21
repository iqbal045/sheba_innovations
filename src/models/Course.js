const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    instructor: {
      type: String,
      trim: true,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

courseSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
  },
});

exports.Course = mongoose.model('Course', courseSchema);
