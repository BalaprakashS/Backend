
import express from "express";

import {
    createStudent,
    insertStudents,
    getStudents,
    getOneStudent,
    getStudentById
} from "../controllers/crudController.js";

const router = express.Router();

router.post("/", createStudent);
router.post("/many", insertStudents);
router.get("/", getStudents);
router.get("/one", getOneStudent);
router.get("/:id", getStudentById);

export default router;
