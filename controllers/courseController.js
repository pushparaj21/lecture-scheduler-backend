const Course = require("../models/Course");
exports.createCourse = async (req, res) => {
  console.log("Creating course with data:", req.body);
  const course = await Course.create(req.body);
  console.log("Course created:", course);
  res.status(201).json(course);
};
exports.getCourses = async (req, res) => {
  console.log("Fetching all courses");
  const courses = await Course.find();
  res.json(courses);
};
