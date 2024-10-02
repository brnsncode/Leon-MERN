import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import taskRoutes from "./routes/task.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

// Allows JSON data in the req.body
app.use(express.json()); 

app.use("/api/tasks", taskRoutes)

// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})



