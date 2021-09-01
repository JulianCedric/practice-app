// 2021.09.01 - WED: 

var array = [7,1,3,2,4,5,6];
var array2 = [1,3,2,4];

// takes an array of integers and returns the number of swaps to order them in ascending order
function minSwaps(arr) {
  let unsorted = [...arr];
  let min = Math.min(...arr);
  let swaps = 0;

  for (let i=0; i<unsorted.length; i++) {
    if (unsorted[i] !== i+min) {
      let index = unsorted.indexOf(i+min, i); // index equals the index of the first / smallest number
      let temp = unsorted[i]; 
      unsorted[i] = unsorted[index];
      unsorted[index] = temp;
      swaps++
    }
  }
  console.log("swaps:", swaps);
  return swaps;
}

console.log("minSwaps(array):", minSwaps(array));
// console.log("minSwaps(array2):", minSwaps(array2));

// 2021.08.30 - MON:

var numbers1 = [1,2,3,1,1,3];
var numbers2 = [1,1,1,1];
var numbers3 = [1,2,3];

function numIdenticalPairs(nums) {
  var counter = 0;

  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<nums.length; j++) {
      if (nums[i] == nums[j] && i<j) {
        // console.log("i:", i);
        // console.log("j:", j);
        counter += 1;
        // console.log("counter:", counter);
      }
    }
  }

  // console.log("counter:", counter);
  return counter;
}

console.log("numIdenticalPairs(numbers1):", numIdenticalPairs(numbers1));
// console.log("numIdenticalPairs(numbers2):", numIdenticalPairs(numbers2));
// console.log("numIdenticalPairs(numbers3):", numIdenticalPairs(numbers3));


// 2021.08.29 - SUN:

var numbers1 = [0,2,1,5,3,4];
var numbers2 = [5,0,1,2,3,4];
var numbers3 = [0];

function buildArray(nums) {
  var ans = [];

  if (nums.length == 1) {
    ans.push(0);
    return ans;
  }

  for (let i=0; i<nums.length; i++) {
    if (0 <= i<nums.length) {
      ans[i] = nums[nums[i]];
    }
  }

  return ans;
}

// console.log("buildArray(numbers1):", buildArray(numbers1));
// console.log("buildArray(numbers2):", buildArray(numbers2));
console.log("buildArray(numbers3):", buildArray(numbers3));