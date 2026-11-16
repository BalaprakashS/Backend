import Student from "../models/crudModels.js";

// Create one student
export const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Insert multiple students
export const insertStudents = async (req, res) => {
    try {
        const students = await Student.insertMany(req.body);
        res.json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get one student
export const getOneStudent = async (req, res) => {
    try {
        const student = await Student.findOne({
            email: req.query.email
        });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};