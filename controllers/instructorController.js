const Instructor = require("../models/Instructor");
exports.createInstructor = async (req, res) => {
  console.log("Creating instructor with data:", req.body);
  const instructor = await Instructor.create(req.body);
  console.log("Instructor created:", instructor);
  res.status(201).json(instructor);
};
exports.getInstructors = async (req, res) => {
  console.log("Fetching all instructors");
  const instructors = await Instructor.find();
  res.json(instructors);
};
exports.getInstructorByEmail = async (req, res) => {
  const instructor = await Instructor.findOne({ email: req.params.email });
  if (!instructor) {
    return res.status(404).json({ message: "Instructor not found" });
  }
  res.json(instructor);
};
