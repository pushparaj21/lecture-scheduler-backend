const express = require("express");
const {
  scheduleLecture,
  getInstructorLectures,
} = require("../controllers/lectureController");
const router = express.Router();
console.log("Lecture routes loaded");
router.post("/", scheduleLecture);
router.get("/:id", getInstructorLectures);
module.exports = router;
