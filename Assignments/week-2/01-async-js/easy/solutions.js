
// ? 1-counter with setInterval
// let i =0;
// setInterval(()=> console.log(i++),1000);


// ?2- Without using setInterval, try to code a counter in Javascript.
// by using recursion


// let i =0;

// function counter(){
//     setTimeout(()=>{
//     console.log(++i);
//     counter();}
//     ,1000);
    

// }

// counter();

// ? 3- ## Reading the contents of a file

// ? Write code to read contents of a file and print it to the console. 
//  ? You can use the fs library to as a black box, the goal is to understand async tasks. 
//  ? Try to do an expensive operation below the file read and see how it affects the output. 
//  ? Make the expensive operation more and more expensive and see how it affects the output. 

// const fs = require('fs');

// fs.readFile('./Assignments/week-2/01-async-js/easy/dummyfile.txt','utf-8',(err,data)=>{
//     console.log('data read from the file is : ');
//     console.log(data);
//     if (err) {
//         console.log(err);
//     }
// });

// for (let index = 0; index < 1000000000000; index++) {
    
// }
// console.log("hiii")


//? ## Write to a file
//? Using the fs library again, try to write to the contents of a file.
//? You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const dataToWrite = "This code will create a file named example.txt with the content Hasfddddddddddddello, World! in the current directory. If the file already exists, it will be overwritten";

fs.writeFile('./dummyfile.txt',dataToWrite,(err)=>{
    if (err) {
        throw err;
    }
    console.log("data written succesfully");
});

for (let index = 0; index < 10000000000; index++) {
    // console.log("inside the loop");
}
console.log("hiii")