import express from  'express';
import { createCourse,deleteCourseById,getAllCourses,getCourseById,updateCourseById } from '../controllers/courseController.js';

const courseRoute = express.Router();

courseRoute.post('/createCourse', createCourse);
courseRoute.get('/getCourses', getAllCourses);
courseRoute.get('/getCourseById/:id', getCourseById);
courseRoute.put('/updateCourse/:id', updateCourseById);
courseRoute.delete('/deleteCourse/:id', deleteCourseById);


export default courseRoute;