const express = require("express");
const {
  scheduleLecture,
  getInstructorLectures,
  getLectures,
} = require("../controllers/lectureController");
const router = express.Router();
console.log("Lecture routes loaded");
router.post("/", scheduleLecture);
router.get("/", getLectures);
router.get("/:id", getInstructorLectures);
module.exports = router;
