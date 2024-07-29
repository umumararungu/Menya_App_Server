import {getAllEnrollments,enrollCourse,getCourseEnrollments,getUserEnrollments} from '../controllers/enrollControllers.js';
import express from 'express';
const enrollRouter = express.Router();


// Enroll a user in a course
enrollRouter.post('/enrollInCourse', enrollCourse);

// Get all enrollments for a specific user
enrollRouter.get('/user/:userId/enrollments', getUserEnrollments);

// Get all enrollments for a specific course
enrollRouter.get('/course/:courseId/enrollments', getCourseEnrollments);

// Get all enrollments (for admin or general purposes)
enrollRouter.get('/all', getAllEnrollments);

export default enrollRouter;