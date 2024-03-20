//1. create a counter in js(counts fown from 30 to 0)
//2. calculate the time it takes between a setTimeout call and inner function actually running  --- 2 seconds
//3. create a terminal clock (HH:MM:SS)

// ----------------------------------------------------------
//1. create a counter in js(counts from from 30 to 0)
// let count=30
// const interval_id = setInterval(()=>{console.log(count--)},1000)

// setTimeout(()=>{clearInterval(interval_id)},32*1000)


//3. create a terminal clock (HH:MM:SS)

// --------------------------------------------

const dateandtime= new Date()

let currhr = dateandtime.getHours()
let currmin = dateandtime.getMinutes()
let currsec = dateandtime.getSeconds()


setInterval(()=> {
    if(currsec+1==60){
        currsec=0;
        if(currmin+1 == 60){
            currmin= 0; 
            if (currhr+1==24) {
                currhr=0;
            }
            else{
                currhr++;
            }
        }
        else{
            currmin++;
        }
    }
    else{
        currsec++;
    }
    console.log(currhr+":"+currmin+":"+currsec);
},1000)

// console.log(currenthour + ":"+currentminutes + ":"+currentseconds)