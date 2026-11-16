
import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(express.json());

// Route Mounting
app.use("/api/students", studentRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
