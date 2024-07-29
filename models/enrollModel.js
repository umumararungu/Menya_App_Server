import mongoose from 'mongoose';
import userModel from './userModel.js';
import courseModel from './courseModel.js';


const enrollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel', 
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courseModel', 
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    }
});

const Enroll = mongoose.model('Enroll', enrollSchema);

export default Enroll;
