const express = require('express');
const { CardMiddleware } = require('./middleware/CardMiddleware');
const { CardModel, AdminModel, UserModel } = require('./db/db');
const { ValidateUserMiddleWare } = require('./middleware/UserInputValidation');
const app = express()
const PORT = 3000;


//use the middleware
app.use(express.json()); // to the parse the body

// also i need to create a middleware to check if the schema is right for that i need to create a zod validator
// 1.create zod middleware for both get and post methods
// the schema would be like
//  card: {
//  Name: string
//  description: string
//  Interests: [ contains an array of strings]
// Urls: [array of strings of urls] 
// different buttons  for linkedin , twitter etc and show them only if present hence i need to use the state here that way it'll show only the components which are present and for this create the button which will on click take you to their respected urls.
// }

//? Creates Card 
//should only be accessible to the admin
app.post('/admin/createCard', CardMiddleware,ValidateUserMiddleWare, async(req, res) => {

    // Cardmiddleware: takes the input from the body and validates the schema({name:name,
    // description:description,
    // Interests:Interests,
    // UrlArray: UrlArray}) and then passes the control back to the function
   
    // Authenticate admin
    // then create the card
    
    const username = req.headers.username;
    
       const admin= await AdminModel.findOne({username:username})

       if (admin) {
        
        const CardDataToCreate = {

            "name": req.body.name,
            "description": req.body.description,
            "Interests": req.body.Interests,
            "UrlArray": req.body.UrlArray
        
        }

        const newCard = new CardModel(CardDataToCreate);
        
        newCard.save().then(()=>{
    
            res.status(200).json({
    
                msg:"card created successfully"
    
            })
    
        })


       } else {

        res.status(404).json({
        
            msg: "user not found"
        
        })
       
    }

})


// ? deletes a card
app.delete('/admin/deleteCard',ValidateUserMiddleWare,async(req,res)=>{

    //checks the username and password format via the ValidateUserMiddleware 
    //in the function checks the format of the name of the celebrity coming via the body
    //then checks whether the admin is present in the collection
    //if present then deletes that card from the collection

     const NameOnTheCard = req.body.name;
    // authenticates user
    const username = req.headers.username;
    
    const admin= await AdminModel.findOne({username:username})


    if (admin) {
        //show the data
        const dataToReturn = await CardModel.findOne({name: NameOnTheCard});
        if (dataToReturn) {
            
            CardModel.deleteOne({name: NameOnTheCard}).then((card)=>{
                if (card) {
                    return res.status(200).json({
                        msg: "card deleted"
                    })
                }
                else{
                    return res.status(500).json({
                        msg: "card deletion failed"
                    })
                }
            })

        } else {
            return res.status(404).json({
                msg:"Card not found:Db error during deleting card "
            })
        }


    } else {
        res.status(404).json({
            msg:"Admin not found"
        })
    }

})


// ? User Signup
app.post('/user/signup',ValidateUserMiddleWare,(req,res)=>{
//    the ValidateuserMiddlware checks the format of the username and password input from the headers and if okayy then passes the control to the function.

//now take the data from the headers into the variables and then add these data into the collection

const username = req.headers.username;
const password = req.headers.password;

const newUser = new UserModel({
    username: username,
    password: password
})
newUser.save().then(()=>{
    res.status(200).json({
        msg: "user created successfully"
    })
})

});




// ? Admin Signup
app.post('/admin/signup',ValidateUserMiddleWare,(req,res)=>{
    //    the ValidateuserMiddlware checks the format of the username and password input from the headers and if okayy then passes the control to the function.
    
    //now take the data from the headers into the variables and then add these data into the collection
    
    const username = req.headers.username;
    const password = req.headers.password;
    
    const newAdmin = new AdminModel({
        username: username,
        password: password
    })
    newAdmin.save().then(()=>{
        res.status(200).json({
            msg: "Admin created successfully"
        })
    })
    
    });




//displays card to user 
app.get('/user/displayCards', ValidateUserMiddleWare, async(req, res) => {

    // ?will get the cards present in db to only users 

    //input username and password format is Validated via the middleware
    
    // authenticates user
    const username = req.headers.username;
    
    const user= await UserModel.findOne({username:username})


    if (user) {
        //show the data
        const dataToReturn = await CardModel.find();
        if (dataToReturn) {
            res.status(200).json(dataToReturn);
        } else {
            return res.status(500).json({
                msg:"Db error during displaying card to the user"
            })
        }


    } else {
        res.status(404).json({
            msg:"user not found"
        })
    }

})


    //displays card
app.get('/admin/displayCards', ValidateUserMiddleWare, async(req, res) => {

    // ?will get the cards present in db to only users 

    //input username and password format is Validated via the middleware
    
    // authenticates user
    const username = req.headers.username;
    
    const Admin= await AdminModel.findOne({username:username})


    if (Admin) {
        //show the data
        const dataToReturn = await CardModel.find();
        if (dataToReturn) {
            res.status(200).json(dataToReturn);
        } else {
            return res.status(500).json({
                msg:"Db error during displaying card to the Admin"
            })
        }


    } else {
        res.status(404).json({
            msg:"Admin not found"
        })
    }
    
})


app.listen(PORT, () => {

    console.log("!!!Server is running!!!")

})