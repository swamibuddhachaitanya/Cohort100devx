

// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require("./types");
const {todoModel} = require("./db");
const app = express()
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5174"
}));

const port = 3000;

app.use(express.json());


// body{
// title: string;
// description: string;
// }

// app.use(cors());

app.post('/todos',async(req,res)=>{
    
const createPayload = req.body;
// console.log("requested body is "+ createPayload)
const parsedPayload = createTodo.safeParse(createPayload);

if (!parsedPayload.success) {

    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
}
    //put it in mongodb
    const todoCreated = await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    // console.log("the todo created is :"+todoCreated);
    res.json(todoCreated);

})

app.get('/todos',async(req,res)=>{
    const todos = await todoModel.find();
    res.json(todos)
})

app.put('/completed',async(req,res)=>{
const createPayload = req.body;
const parsedPayload = updateTodo.safeParse(createPayload);

if (!parsedPayload.success) {
    res.status(411).json({
    msg: "You sent the wrong inputs",
    });
    return;
}
//send the data to mongodb
await todoModel.update({
    _id: req.body.id
},{completed: true})


res.json({
    msg: "Todo marked as completed"
})
})

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
})