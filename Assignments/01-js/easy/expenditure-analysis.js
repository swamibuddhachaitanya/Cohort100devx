/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza', 
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const outputlist = [];
  
  transactions.forEach(transaction => {
    const index = outputlist.findIndex(obj => obj.category === transaction.category);

    //object not present in the output list hence push it to the outputlist
    if(index === -1){ 

      outputlist.push({category: transaction.category , totalSpent: transaction.price});
    
    }
    else{

      outputlist[index].totalSpent+= transaction.price;

    }    

  });

  return outputlist;
}

// console.log(calculateTotalSpentByCategory([{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza', 
// },{
//   id: 2,
//   timestamp: 1656076800002,
//   price: 20,
//   category: 'chai',
//   itemName: 'kulhad', 
// },{
//   id: 3,
//   timestamp: 1656076800003,
//   price: 30,
//   category: 'Food',
//   itemName: 'burger', 
// }]))

module.exports = calculateTotalSpentByCategory;
