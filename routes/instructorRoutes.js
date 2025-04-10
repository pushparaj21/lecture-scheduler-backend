const express = require("express");
const {
  createInstructor,
  getInstructors,
} = require("../controllers/instructorController");
const router = express.Router();
console.log("Instructor routes loaded");
router.post("/", createInstructor);
router.get("/", getInstructors);
module.exports = router;
