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