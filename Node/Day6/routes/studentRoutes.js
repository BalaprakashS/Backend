
import express from "express";

import {
    addStudent,
    getStudents,
    editStudent,
    removeStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", addStudent);
router.get("/", getStudents);
router.put("/:id", editStudent);
router.delete("/:id", removeStudent);

export default router;
