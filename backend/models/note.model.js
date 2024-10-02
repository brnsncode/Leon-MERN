import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    dateEntered:{
        type: Date,
        required: true
    },
},
{
    timestamps: true // createdAt, updatedAt dates entered
});

const Note = mongoose.model('note', noteSchema);

export default Note;
