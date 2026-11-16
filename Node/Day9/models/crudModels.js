import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18
    },
    course: {
        type: String,
        default: "MERN"
    },
    city: {
        type: String
    }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;