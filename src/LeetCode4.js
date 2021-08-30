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