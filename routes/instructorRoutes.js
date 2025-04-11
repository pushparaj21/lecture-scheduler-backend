const express = require("express");
const {
  createInstructor,
  getInstructors,
  getInstructorByEmail,
} = require("../controllers/instructorController");
const router = express.Router();
console.log("Instructor routes loaded");
router.post("/", createInstructor);
router.get("/", getInstructors);
router.get("/email/:email", getInstructorByEmail);
module.exports = router;
