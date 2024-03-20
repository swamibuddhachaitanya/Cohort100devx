

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.kykouaa.mongodb.net/Card_app").then(()=>{
    console.log("connected to the db")
})

const Schema = mongoose.Schema;


const CardSchema = new Schema({
    name: String,
    description: String,
    Interests: {
        type: [String], 
        default: []
    },
    UrlArray: {
        type: [{
            key: String,
            value: String
        }],
        default: [{}]
    }

})

const AdminSchema = new Schema({
    username: String,
    password: String
})

const UserSchema = new Schema({
    username: String,
    password: String
})

const AdminModel = mongoose.model('Admin',AdminSchema)
const UserModel = mongoose.model('User',UserSchema)
const CardModel = mongoose.model('Card',CardSchema)



module.exports={
    CardModel,
    UserModel,
    AdminModel
}


