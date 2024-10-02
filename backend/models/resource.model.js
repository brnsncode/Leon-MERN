import mongoose from 'mongoose';

const v = new mongoose.Schema({
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

const Resource = mongoose.model('resource', resourceSchema);

export default Resource;
