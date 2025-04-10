const express = require("express");
const { createCourse, getCourses } = require("../controllers/courseController");
const router = express.Router();
console.log("Course routes loaded");
router.post("/", createCourse);
router.get("/", getCourses);
module.exports = router;
