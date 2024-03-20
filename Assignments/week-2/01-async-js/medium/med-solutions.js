//?Read a file, remove all the extra spaces and write it back to the same file.
//? For example, if the file input was
//? '''hello     world    my    name   is       raman'''

//? After the program runs, the output should be
 
//? '''hello world my name is raman'''



//? first way is to read it , filter it and write it inside the async function directly

// const fs = require('fs');
// fs.readFile('dummyfile.txt','utf-8',(err,data)=>{
//     if (err) throw err;
//     const filteredData = data.replace(/\s+/g," ");
//     fs.writeFile('dummyfile.txt',filteredData,(err)=>{
//         if (err) throw err;
//         console.log("data filtered and file written succesfully");
//     })
// })


// ? or second way is to use a promise function 
// inside promise we'll read the file and filter it and return it
// const fs = require('fs');

// function LearningToPromise(filename){
//     const p = new Promise(function(resolve){
//         fs.readFile(filename,'utf-8',(err,data)=>{
//             const filteredData = data.replace(/\s+/g," ");
//             fs.writeFile(filename,filteredData,(err)=>{});
//             resolve();
//         });
//     });
//     return p;
// }

// LearningToPromise('dummyfile.txt').then(function(){
// console.log("content filtered and uploaded.")
// });


// ?and third is to use await


const fs = require('fs');

function LearningToPromise(filename){
    const p = new Promise(function(resolve){
        fs.readFile(filename,'utf-8',(err,data)=>{
            const filteredData = data.replace(/\s+/g," ");
            fs.writeFile(filename,filteredData,(err)=>{});
            resolve();
        });
    });
    return p;
}

async function main(){
await LearningToPromise('dummyfile.txt');
console.log("content filtered and uploaded.");
}

main();