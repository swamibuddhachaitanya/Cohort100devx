const express = require('express');

const app = express()
const port = 3000

app.get('/',function(req,res){
    res.send('Hello Brother!')
})

app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})

// app.listen(port,()=>{
//     console.log("up and running")
    
// })