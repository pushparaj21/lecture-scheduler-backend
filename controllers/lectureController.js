const Lecture = require("../models/Lecture");
exports.scheduleLecture = async (req, res) => {
  try {
    const { date, course, instructor } = req.body;
    console.log("Scheduling lecture:", req.body);
    const existing = await Lecture.findOne({ date, instructor });
    if (existing) {
      console.warn("Date clash detected:", existing);
      return res.status(400).json({ msg: "Date clash" });
    }
    const lecture = await Lecture.create({ date, course, instructor });
    console.log("Lecture scheduled successfully:", lecture);
    res.status(201).json(lecture);
  } catch (err) {
    console.error("Error scheduling lecture:", err);
    res.status(500).json({ error: err.message });
  }
};
exports.getInstructorLectures = async (req, res) => {
  console.log(`Fetching lectures for instructor ID: ${req.params.id}`);
  const lectures = await Lecture.find({ instructor: req.params.id }).populate(
    "course"
  );
  res.json(lectures);
};
