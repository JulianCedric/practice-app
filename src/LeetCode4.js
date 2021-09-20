// 2021.09.20 - MON:

/* 

1. Create output variable.
2. Create numsCopy variable.
3. Create sortedNums variable.
3. Assign n variable to the highest number in the sorted array.
4. Create arrRange variable to store each number of the range.
5. Loop through arrRange.
  i. Find if each element of arrRange is found in nums.
    a. If it is not, then output = arrRange[i].
    b. Return output.

*/

const nums1 = [3,0,1];
const nums2 = [0,1];
const nums3 = [9,6,4,2,3,5,7,0,1];
const nums4 = [0];

function missingNumber(nums) {

  let output = 0;
  let numsCopy = [...nums];
  let numsSorted = numsCopy.sort((a,b)=> (b-a));
  let n = Math.max(...numsSorted); 
  console.log("n:", n);
  let rangeArr = rangeMaker(0, n);

  for (let i=0; i<rangeArr.length; i++) {
    if (nums.indexOf(rangeArr[i]) === -1) {
      console.log("rangeArr[i]:", rangeArr[i]);
      output = rangeArr[i];
      return output;
    }
  }
}

// console.log("missingNumber(nums1):", missingNumber(nums1));
// console.log("missingNumber(nums2):", missingNumber(nums2));
// console.log("missingNumber(nums3):", missingNumber(nums3));
// console.log("missingNumber(nums4):", missingNumber(nums4));

function rangeMaker(start, end) {
  let arr = [];
  for (let i=0; i<=end+1; i++) {
    arr.push(i);
  }
  return arr;
}

/* 

1. Create number variable.
2. Create sortedArray variable.
3. Assign n variable to the highest number in the sorted array.
4. Loop through sortedArray.
  i. Find if each element of sortedArray is found in nums.
    a. If it is not, then number = sortedArray[i].
    b. Return number.

*/

const nums1 = [3,0,1];
const nums2 = [0,1];
const nums3 = [9,6,4,2,3,5,7,0,1];
const nums4 = [0];

function missingNumber(nums) {

}

console.log("missingNumber(nums1):", missingNumber(nums1));
// console.log("missingNumber(nums2):", missingNumber(nums2));
// console.log("missingNumber(nums3):", missingNumber(nums3));
// console.log("missingNumber(nums4):", missingNumber(nums4));

// 2021.09.17 - FRI:

const numbers = [2,5,1,3,4,7];
const number = 3;

const numbers2 = [1,2,3,4,4,3,2,1]; 
const number2 = 4;

const numbers3 = [1,1,2,2]; 
const number3 = 2;

function shuffle(nums, n) {

  let output = [];
  let j = n; // pointer

  for (let i=0; i<n; i++) {
    output.push(nums[i]);
    output.push(nums[j]);
    j++;
  }

  console.log("output:", output);
  return output;
}

console.log("shuffle(numbers, number):", shuffle(numbers, number));
console.log("shuffle(numbers, number):", shuffle(numbers2, number2));
console.log("shuffle(numbers, number):", shuffle(numbers3, number3));

// 2021.09.08 - WED: 

// Fair Candy Swap

var alice = [1,1];
var bob = [2,2];
var alice2 = [1,2];
var bob2 = [2,3];

function fairCandySwap(A, B) {
  console.log("A:", A);
  console.log("B:", B);

  let output = [];
  // let output = new Array(2);
  let mapB = {};
  let totalA = 0;
  let totalB = 0;
  
  for (let i=0; i<A.length; i++) {
    totalA += A[i];
  }
  console.log("totalA:", totalA);

  for (let i=0; i<B.length; i++) {
    totalB += B[i];
    mapB[B[i]] = true; // mapB[2] = true
  }
  console.log("totalB:", totalB);
  console.log("mapB:", mapB);

  let delta = ((totalB - totalA) / 2);
  console.log("delta:", delta);

  for (let i=0; i<A.length; i++) {
    if (mapB[A[i] + delta]) {
      output[0] = A[i];
      output[1] = A[i] + delta;
      console.log("output:", output);
      return output;
    }
  }
}

/*
1. Create output array.
2. Create mapB object.
3. Create TotalA variable.
4. Create TotalB variable.
5. Loop through A.
  a. Add values to TotalA.
6. Loop through B.
  a. Add values to TotalB.
  b. Add values to mapB.
7. Create delta variable equal to (TotalB - TotalA) / 2. 
8. Loop through A.
  a. Find if the delta value + current A value exists in B.
    i. Add the first index value of output to "i".
    ii. Add the value from the mapB to second index value.
    iii. Return output.
*/

// console.log("fairCandySwap(alice, bob):", fairCandySwap(alice, bob));
console.log("fairCandySwap(alice, bob):", fairCandySwap(alice2, bob2));

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