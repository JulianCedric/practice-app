// 2021.10.20:

let str = "PPALLP";
let str2 = "PPALLL";
let str3 = "LPLPLPLPLPL";
let str4 = "LLLALL";

function checkRecord(s) {
  let a = 0;
  let consecL = 0;

  for (let i=0; i<s.length; i++) {
    if (s[i] === "A") {
      a++;
    }
    if (s[i] === "L") {
      // If current index value is "L", then increment consecL.
      consecL++;
      if (consecL >= 3) {
        return false;
      }
    } else {
      consecL = 0;
    } 
      // If current index value is NOT "L", then set consecL equal to 0.
  }
  console.log("a:", a);
  console.log("consecL:", consecL);

  if (a > 1 || consecL >= 3) {
    return false;
  } else {
    return true;
  }
}

// console.log("checkRecord(str):", checkRecord(str));
// console.log("checkRecord(str2):", checkRecord(str2));
// console.log("checkRecord(str3):", checkRecord(str3));
console.log("checkRecord(str4):", checkRecord(str4));

// 2021.10.16: Revisited:

let array = [3,8,9,4,4,1];
let num = 3;

function sum(arr, n) {
  let sum = 0;
  for (let i=0; i<n; i++) {
    sum += arr[i];
  }
  console.log("sum:", sum);
  return sum;
}

console.log("sum(array):", sum(array, num));

// 2021.10.11: 
    // Started on 10/03
    // Completed on 10/11

let moves1 = "UD";
let moves2 = "LL";
let moves3 = "RRDD";
let moves4 = "LDRRLRUULR";

function judgeCircle(moves) {
  let leftOrRight = 0;
  let upOrDown = 0;

  for (let i=0; i<moves.length; i++) {
    switch(moves[i]) {
      case "L": leftOrRight++;
      break;
      case "R": leftOrRight--;
      break;
      case "U": upOrDown++;
      break;
      case "D": upOrDown--;
    }
  }
  console.log("leftOrRight:", leftOrRight);
  console.log("upOrDown:", upOrDown);

  if (leftOrRight === 0 && upOrDown === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log("judgeCircle(move1):", judgeCircle(moves1));
// console.log("judgeCircle(move2):", judgeCircle(moves2));
// console.log("judgeCircle(move3):", judgeCircle(moves3));
console.log("judgeCircle(move4):", judgeCircle(moves4));