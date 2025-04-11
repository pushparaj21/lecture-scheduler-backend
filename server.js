const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const instructorRoutes = require("./routes/instructorRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lectureRoutes = require("./routes/lectureRoutes");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors({}));

console.log("Registering routes...");
app.use("/api/instructors", instructorRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);

app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("API is running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
