const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: String,
  level: String,
  description: String,
  image: String,
});
console.log("Course model defined");
module.exports = mongoose.model("Course", courseSchema);
