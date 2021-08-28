// 2021.06.28 - MON:

// Regex

let username = "JackOfAllTrades";
let userCheck = /^[a-z]/; // Change this line
let result = userCheck.test(username);

console.log("result:", result);

// 6/13 passing:

let username = "JackOfAllTrades";
let userCheck = /^[a-z]/; // Change this line
let result = userCheck.test(username);

console.log("result:", result);

// 8/13:

let username = "JackOfAllTrades";
let userCheck = /^[a-z]/i; // Change this line
let result = userCheck.test(username);

console.log("result:", result);

// 13/13 passing!

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|[\d][\d])$/i; // Change this line
let result = userCheck.test(username);

console.log("result:", result); 