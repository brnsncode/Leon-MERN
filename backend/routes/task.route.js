import express from "express";

import { getTasks, createNewTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

// Get all tasks
router.get("/", getTasks);

// Create new task
router.post("/", createNewTask);

// Update task
router.put("/:id", updateTask);

// Delete task
router.delete("/:id", deleteTask);

export default router;