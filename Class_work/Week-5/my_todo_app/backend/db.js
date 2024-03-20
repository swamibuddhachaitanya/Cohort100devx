const mongoose = require('mongoose');
const { boolean } = require('zod');
// const { Schema } = require('zod');


// Todo{
//     title: string,
//     description: string,
//     completed: boolean
// }

mongoose.connect("mongodb+srv://admin:admin@cluster0.kykouaa.mongodb.net/todos").then(()=>{
    console.log("db connected");
})

const todoSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: {type: Boolean,
                default: false}

})

const todoModel = mongoose.model('todo',todoSchema);

module.exports = {
    todoModel
}
