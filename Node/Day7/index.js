
import express from "express";

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Student Registration API
app.post("/api/students", (req, res) => {
    const { name, email, course, age } = req.body;

    const student = {
        name: name,
        email: email,
        course: course,
        age: age
    };

    res.status(201).json({
        message: "Student Registered Successfully",
        student: student
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
