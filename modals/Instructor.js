const mongoose = require("mongoose");
const instructorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
});
console.log("Instructor model defined");
module.exports = mongoose.model("Instructor", instructorSchema);
