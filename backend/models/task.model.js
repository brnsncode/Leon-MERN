import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    projectId:{
        type:Number,
        required: false
    },
    capacity:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: false
    }
},
{
    timestamps: true // createdAt, updatedAt dates entered
});

const Task = mongoose.model('task', taskSchema);

export default Task;
