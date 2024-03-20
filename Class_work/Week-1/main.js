let firstname = "Kashyap";
let lastname = "Joshi";
let gender = "male";


if (gender=="male") {
    console.log("hello "+"mr. "+firstname+" "+lastname);
}
else{
    console.log("hello"+"miss. "+firstname+" "+lastname);
}

let array1 = [1,2,8,4,5,6,7,3];
let front = 0;
let back = array1.length;

while (front<back) {
    [array1[front],array1[back]] = [array1[back],array1[front]];
    front++;
    back--;
}



for( let index = 0; index< array1.length ; index++){

    console.log(array1[index]);    
}


const person_details = [
    {
    firstname: "swami",
    gender:"male",
    metadata: {
        age: 25,
        bloodgroup: "A+"
    }
    },

    {
        firstname: "Khushboo",
        gender:"female",
        metadata: {
            age: 23,
            bloodgroup: "O+"
        }
        },
        {
            firstname: "Kashyap",
            gender:"male",
            metadata: {
                age: 24,
                bloodgroup: "B+"
            }
            }
]


for (let index = 0; index <person_details.length; index++) {
    if (person_details[index]["gender"]=="male") {
        console.log("age of the male is: "+ person_details[index]["metadata"]["age"])
    }

}

function sum(a,b){
    return a+b;
}

const sumofab = sum(1,2)
console.log(sumofab)