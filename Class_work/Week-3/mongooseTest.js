const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.kykouaa.mongodb.net/userappnew").then(()=>{
    
    const User = mongoose.model('Users',{name: String , email:String, password: String});

    const user = new User({name: 'Harkirat Singh',email: 'tzirw@example.com',password:'123456'});
    user.save().then(()=>{
        console.log("data saved successfully");
    });


})



