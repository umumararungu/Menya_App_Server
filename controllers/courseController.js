import courseModel from "../models/courseModel.js"

export const createCourse = async (req, res) => {
    try {
        const newCourse = new courseModel(req.body);
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseModel.findById(id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error });
    }
};

export const updateCourseById = async (req, res) => {
    try {
        const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCourseById = async (req, res) => {
    try {
        const course = await courseModel.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

