const express = require('express');
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index.js');
router.use(express.json());

// User Routes

// - POST /users/signup
//   Description: Creates a new user account.
//   header Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const newUser = new User({
        username: username,
        password: password
    });
    newUser.save().then(()=>{
        // console.log("User created successfully");
        res.status(200).json({message: "User created successfully"});
    })
});


// - GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((courses)=>{
        res.status(200).json(courses);
    })
    
});


// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    Course.findById(courseId).then((course)=>{
        
                //find username
                const username = req.headers.username;
                User.findOne({username: username}).then((user)=>{
                    user.purchasedCourses.push(course);
                        user.save().then(()=>{
                            
                                res.status(200).json({message: 'Course purchased successfully'});
                            

                });
                
        })


    })
    
    


});


// - GET /users/purchasedCourses
//   Description: Lists all the courses purchased by the user.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    User.findOne({username: req.headers.username}).then((user)=>{
        res.status(200).json(user.purchasedCourses);

    })
    
});

module.exports = router