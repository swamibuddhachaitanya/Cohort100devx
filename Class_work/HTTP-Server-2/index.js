//creating an http server using express
// node default library=> no 

const express = require('express');
const app = express(); // ? always write

// ? create 4 routes

// ? get: User can check how many kidneys they have and their health 
//? post: user can add a new kidney
// ? put: user can replace a kidney, make it healthy
// ? delete: user can remove a kidney


// ? seeding
let patientList= [{
    name:"Rakesh",
    kidneyinfo:{
        numberofkidneys:2,
        numberofhealtykidneys:1,
        numberofunhealthykidneys:1
    }
}]

// ? get: User can check how many kidneys they have and their health 
app.get("/",function(req,res){ // User can check how many kidneys they have and their health
   
    try {
        const username = req.query.username;
        
        const patientObject = patientList.find(obj => obj.name === username);
        
        //if patient record not found
        if (patientObject=== undefined) {
            throw new Error("Inputs were incorrect, file not found");
        }
        //patient record found 
        //then we need to show the number of kidneys they have and their health
         
        res.json({numberofkidneys: patientObject.kidneyinfo.numberofkidneys,
            numberofhealtykidneys: patientObject.kidneyinfo.numberofhealtykidneys,
            numberofunhealthykidneys: patientObject.kidneyinfo.numberofunhealthykidneys
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
    
    
});

//? ------------------------------------------------------------------

//? post: user can add a new kidney

//using middleware to use body for post method
app.use(express.json());

// ? for post requests you send data via the body, and add the kidney and its type to the database
app.post("/",function(req,res){ 
   
    try {
        //catch the name of the person and the check the type of the kidney he wants to add and then add it to the data file 
        const username = req.body.username;
        console.log(username);
        const isHealthy = req.body.isHealthy;
        
        const patientObject = patientList.find(obj=> obj.name===username);

        if (patientObject === undefined) {
            throw new Error("user not found")
        }
        if (isHealthy && patientObject.kidneyinfo.numberofunhealthykidneys>=1) {
         
        patientObject.kidneyinfo.numberofunhealthykidneys -=1;
        patientObject.kidneyinfo.numberofhealthykidneys +=1;   
        }
        res.send("perfecto");
        

    } catch (error) {
        res.status(400).send(error.message);
    }
    
    
});



app.listen(3000); // ? always write