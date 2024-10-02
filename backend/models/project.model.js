import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
},
{
    timestamps: true // createdAt, updatedAt dates entered
});

//mongo collection name projects
const Project = mongoose.model('project', projectSchema);

export default Project;
