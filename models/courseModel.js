import mongoose from 'mongoose';

const courseTeacherSchema = mongoose.Schema({
    dcover: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    totalTime: {
        type: String,
        required: true
    }
});

const courseSchema = mongoose.Schema({
    
    cover: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseTeacher: {
        type: [courseTeacherSchema],
        required: true
    },
    priceAll: {
        type: String,
        required: true
    },
    pricePer: {
        type: String,
        required: true
    }
});

const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;
