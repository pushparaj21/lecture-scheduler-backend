const Lecture = require("../models/Lecture");
exports.scheduleLecture = async (req, res) => {
  try {
    const { date, courseId: course, instructorId: instructor } = req.body;
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
exports.getLectures = async (req, res) => {
  const lectures = await Lecture.find({})
    .populate({ path: "course", select: "-_id name description" })
    .populate({ path: "instructor", select: "-_id name email" });
  res.json(lectures);
};
exports.getInstructorLectures = async (req, res) => {
  console.log(`Fetching lectures for instructor ID: ${req.params.id}`);
  const lectures = await Lecture.find({ instructor: req.params.id }).populate(
    "course"
  );
  console.log(lectures, "this is lectures");
  res.json(lectures);
};
