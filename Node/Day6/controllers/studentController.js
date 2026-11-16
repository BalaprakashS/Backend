
import {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} from "../services/studentService.js";

// POST - Create student
export const addStudent = (req, res) => {
    const student = createStudent(req.body);

    res.status(201).json({
        message: "Student Created Successfully",
        student
    });
};

// GET - Get all students
export const getStudents = (req, res) => {
    const students = getAllStudents();

    res.json(students);
};

// PUT - Update student
export const editStudent = (req, res) => {
    const student = updateStudent(req.params.id, req.body);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.json({
        message: "Student Updated Successfully",
        student
    });
};

// DELETE - Delete student
export const removeStudent = (req, res) => {
    const student = deleteStudent(req.params.id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.json({
        message: "Student Deleted Successfully",
        student
    });
};
