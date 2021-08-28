// 2021.07.01 - THU:

// (LeetCode - revisited problem:) Best Time to Buy and Sell Stock:

// We are given an array of integers
// Write a function that returns the biggest difference of two integers in which.. 
// .. the number being subtracted from the other is:
    // .. smaller and 
    // .. comes first in the array
// If such a difference is not found, the function must return 0. 

var prices = [2,4,1];

function maxProfit(arr) {
  console.log("arr:", arr);

  let x = arr[0];
  console.log("x:", x);

  let y = 0;

  for (let i=1; i<arr.length; i++) {
    if (x > arr[i]) {
      x = arr[i]
    } else {
      y = arr[i];
      i++;
    }
  }
  console.log("x:", x);

  console.log("y:", y);
  console.log("y - x = ", y - x);

  if ((y - x) < 0) {
    return 0;
  } else {
    return (y - x);
  }

};

console.log("Result:", maxProfit(prices)); 

// 

// We are given an array of integers
// Write a function that returns the biggest difference of two integers in which.. 
// .. the number being subtracted from the other is:
    // .. smaller and 
    // .. comes first in the array
// If such a difference is not found, the function must return 0. 

// var prices = [7,1,5,3,6,4];
// var prices = [7,6,4,3,1];

function maxProfit(prices) {
    console.log("prices:", prices);
  
    let buyPrice = prices[0];
    let profit = 0;
  
    for (let i=1; i<prices.length; i++) {
      if (buyPrice > prices[i]) {
        buyPrice = prices[i];
      } else {
        profit = Math.max(prices[i] - buyPrice, profit);
        console.log("profit:", profit);
      }
    }
    console.log("buyPrice:", buyPrice);
  
    return profit;
  };


// 

var mat1 = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]; 
var k1 = 3;

function kWeakestRows(mat, k) {

  let hash = {};

  for (let i=0; i<mat.length; i++) {
    var numSoldiers = 0;

    for (let j=0; j<mat[i].length; j++) {

      if (mat[i][j] === 1) {
        numSoldiers = numSoldiers + 1;
      }
    }
    hash[i] = numSoldiers;
  }
  console.log(hash);

  let keys = Object.keys(hash);

  keys.sort((a,b) => hash[a] - hash[b]);

  return keys.slice(0, k)


}

console.log(kWeakestRows(mat1, k1));



















// Make a Person - algo problem:

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return "";
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();


// (moved global variable inside the function)

var flattenedArr = [];

function steamrollArray(arr, flattenedArr = []) {
  console.log("arr:", arr);

  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = steamrollArray(arr[i], flattenedArr);
    } else {
      flattenedArr.push(arr[i])
    }
  }

  // console.log("flattenedArr:", flattenedArr);
  return flattenedArr;

}

console.log("Result:", steamrollArray([1, [2], [3, [[4]]]]));

//

var flattenedArr = [];

function steamrollArray(arr) {
  console.log("arr:", arr);

  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = steamrollArray(arr[i]);
    } else {
      flattenedArr.push(arr[i])
    }
  }

  console.log("flattenedArr:", flattenedArr);
  return flattenedArr;


}

console.log("Result:", steamrollArray([1, [2], [3, [[4]]]]));

// 

function steamrollArray(arr) {
    console.log("arr:", arr);
  
    console.log("arr[0]:", arr[0]);
    console.log("arr[1]:", arr[1]);
    console.log("arr[2]:", arr[2]);  
  
  
  
  
  }
  
  console.log("Result:", steamrollArray([1, [2], [3, [[4]]]]));

// Steamroller - Flatten a Nested Array algo problem:

function steamrollArray(arr) {

    while (arrInDS(arr)) {
      arr = arr.flat();
    }
  
    return arr;
  
  
  }
  
  function arrInDS(ds) {
    return ds.some(dPoint => {
      return Array.isArray(dPoint);  
    })
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
















// Refactoring 'Smallest Common Multiple' Algo Problem:

function smallestCommons(arr) {

    let sortedArr = arr.sort((a,b) => a-b);
    console.log("sortedArr:", sortedArr);
  
    let lowerNum = sortedArr[0];
    let higherNum = sortedArr[1];
    // console.log(lowerNum, higherNum);
  
    let range = rangeMaker(lowerNum, higherNum);
    let multiple = 1;
  
    for (let i=0; i<range.length; i++) {
      
    }
  
  }
  
  function rangeMaker(lowerNumber, higherNumber) {
    let arr = [];
    let counter = lowerNumber;
  
    while (counter <= higherNumber) {
      arr.push(counter);
      counter += 1;
    }
    console.log("arr:", arr);
    return arr;
  }
  
  console.log("Result:", smallestCommons([1,5]));