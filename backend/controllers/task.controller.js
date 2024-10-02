import Task from '../models/task.model.js'
import mongoose from "mongoose";

//GetTasks
export const getTasks = async (req,res) => {
    // function logic
    try {
        const tasks = await Task.find({}); //user will send this data
        res.status(200).json({success:true, data: tasks});
    } catch (error) {
        console.log("Error in fetching tasks", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

// Create New Tasks
export const createNewTask = async (req,res) => {
    // function logic
    const task = req.body; //user will send this data

    if(!task.id || !task.name || !task.capacity){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }
    // res.send("Server is ready")
    const newTask = new Task(task)

    try {
        await newTask.save();
        res.status(201).json({success:true, data: newTask});
    } catch (error) {
        console.error("Error creating new task", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export const updateTask = async (req,res) => {
    const { id } = req.params;

    const task  = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Task not found"});
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, task, {new:true});
        res.status(200).json({succes: true, data: updatedTask});
        console.log("id", id);
    } catch (error) {
        console.log("Error in updating task", error.message);
        res.status(404).json({success:false, message: "Server Error"});
    }

}

export const deleteTask = async (req,res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({succes: true, message: "Task deleted"});
    } catch (error) {
        console.log("Error in deleting task", error.message);
        res.status(404).json({success:false, message: "Task not found"});
    }
    console.log("id", id);
}