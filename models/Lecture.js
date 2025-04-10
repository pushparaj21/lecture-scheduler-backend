const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema({
  date: Date,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" },
});
lectureSchema.index({ date: 1, instructor: 1 }, { unique: true });
console.log("Lecture model defined");
module.exports = mongoose.model("Lecture", lectureSchema);
