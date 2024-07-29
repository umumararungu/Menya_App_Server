import Enroll from "../models/enrollModel.js";
import userModel from "../models/userModel.js";
import courseModel from "../models/courseModel.js";

export const enrollCourse = async(req,res)=>{
    try {
        const {userId, courseId} = req.body;

        //check if the user and course exist
        const user = await userModel.findById(userId);
        const course = await courseModel.findById(courseId);
        if(!user ||!course){
            return res.status(404).json({message: "User or Course not found", status: false});
        }

        //check if the user is already enrolled in the course
        const enrolled = await Enroll.findOne({user: userId, course: courseId});
        if(enrolled){
            return res.status(400).json({message: "User is already enrolled in this course", status: false});
        }

        //create the enrollment
        const newEnroll = new Enroll({user: userId, course: courseId});
        await newEnroll.save();
    } catch (error) {
        res.status(500).json({message:"error enrolling in course", error})
    }
}

// Get all enrollments for a user
export const getUserEnrollments = async (req, res) => {
    try {
        const { userId } = req.params;
        const enrollments = await Enroll.find({ user: userId }).populate('course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user enrollments", error });
    }
};

// Get all enrollments for a course
export const getCourseEnrollments = async (req, res) => {
    try {
        const { courseId } = req.params;
        const enrollments = await Enroll.find({ course: courseId }).populate('user');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching course enrollments", error });
    }
};

// Get all enrollments (optional, for admin purposes)
export const getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await Enroll.find().populate('user').populate('course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all enrollments", error });
    }
};