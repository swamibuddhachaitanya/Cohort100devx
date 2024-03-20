const express = require('express');
const { Router } = require('express');
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course }=require('../db/index.js')
router.use(express.json());


// Admin Routes

// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }

router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const newAdmin = new Admin({
        username: username,
        password: password
    });
    newAdmin.save().then(obj=>{
        // console.log("Admin created successfully");
        res.status(200).json({message: "Admin created successfully"});
    })

});


// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const newCourse = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    });
    newCourse.save().then(obj=>{
        console.log("Course created successfully");
        res.status(200).json({message:'Course created successfully', courseId: obj._id});
    })

});


// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then((courses)=>{
        res.status(200).json(courses);
    });
    
    
    
});

module.exports = router;