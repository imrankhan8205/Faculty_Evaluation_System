const express = require("express");
const router = express.Router();

const reviewData = [
  { facultyName: "Dr. John", department: "CS", semester: "5", course: "AI", reviewScore: 4.5 },
  { facultyName: "Dr. John", department: "CS", semester: "5", course: "ML", reviewScore: 4.2 },
];

router.post("/api/review", (req, res) => {
  const { facultyName, department, semester } = req.body;
  const filteredData = reviewData.filter(
    (data) =>
      data.facultyName === facultyName &&
      data.department === department &&
      data.semester === semester
  );

  if (filteredData.length > 0) {
    res.json(filteredData);
  } else {
    res.status(404).json({ message: "No data found" });
  }
});

module.exports = router;
