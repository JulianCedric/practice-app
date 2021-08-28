// 2021.07.19 - MON:

// Shortest Distance to a Character:

var str = "loveleetcode";
var char = "e";

function shortestToChar(s, c) {
    let output = [];
    
    s = s.split("");

    let curE = s.indexOf(c);
    console.log("curE:", curE);


    for (let i=0; i<s.length; i++) {
        if (s[i] === c) {
            curE = i
        }

        let left = Math.abs(i - curE);
        let right = Math.abs(i - s.indexOf(c,i));
        
        // console.log("Left=" + left)
        // console.log("Right=" + right)

        let distance = Math.min(left, right)
        
        output.push(distance)
    }
    
  return output
};

console.log("Result:", shortestToChar(str, char));


//2021.07.16 - FRI:

var array = [1,2,3,4];

function runningSum(nums) {

  let sum = 0;
  let arr = [];

  for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  console.log(arr);

  return arr;

}

console.log("\n Result:", runningSum(array)); 