// 2021.08.28 - SAT: 

var c1 = "G()(al)";
var c2 = "G()()()()(al)";
var c3 = "(al)G(al)()()G";

function interpret(command) {

  var arr = command.split("");
  var newArr = [];

  for (let i=0;i<arr.length;i++) {
    var currentValue;

    if (arr[i] === "G") {
      currentValue = "G";
      newArr.push(currentValue);
    } else if ((arr[i] === "(") && (arr[i+1]) === ")") {
      currentValue = "o";
      newArr.push(currentValue);
    } else if ((arr[i] === "(") && (arr[i+1] === "a") && (arr[i+2] === "l") && (arr[i+3] === ")")) {
      currentValue = "al";
      newArr.push(currentValue)
    } else {
      // console.log("error");
    }
  }

  var newString = newArr.join("");
  return newString;
}

console.log(interpret(c1));
// console.log(interpret(c2));
// console.log(interpret(c3));

// 2021.08.27 - FRI: 

var sentence1 = "is2 sentence4 This1 a3";
var sentence2 = "Myself2 Me1 I4 and3";

function sortSentence(s) {
  var string;

  var arr = [];

  s = s.split(" ");

  for (let i=0; i<s.length; i++) {
    var stringifiedNumber = (i + 1).toString();

    for (let j=0; j<s.length; j++) {
      if (s[j].includes(stringifiedNumber)) {
        arr[i] = s[j]
      }
    }
  }
  console.log("arr:", arr);

  for (let i=0;i<arr.length; i++) {
    var word = arr[i].slice(0, -1);
    arr[i] = word;
  }
  console.log("arr2:", arr);

  string = arr.join(" ");

  return string;
}

console.log("sortSentence(sentence1):", sortSentence(sentence1));
// console.log("sortSentence(sentence1):", sortSentence(sentence2));

//

var sentence1 = "is2 sentence4 This1 a3";
var sentence2 = "Myself2 Me1 I4 and3";

function sortSentence(s) {
  var string;

  var arr = [];

  s = s.split(" ");

  for (let i=0; i<s.length; i++) {
    var stringifiedNumber = (i + 1).toString();
    console.log(stringifiedNumber); // i = 0;

    for (let j=0; j<s.length; j++) {
      if (s[j].includes(stringifiedNumber)) {
        arr[i] = s[j]
      }
    }
  }

  string = arr.join(" ");

  return string;
}

console.log("sortSentence(sentence1):", sortSentence(sentence1));
// console.log("sortSentence(sentence1):", sortSentence(sentence2));

// 2021.08.26 - THU:

var numbers1 = [8,1,2,2,3];
var numbers2 = [6,5,4,8];
var numbers3 = [7,7,7,7];

function smallerNumbersThanCurrent(nums) {

  var arr = [];

  for (let i=0;i<nums.length; i++) {
    var counter = 0;

    for (let j=0; j<nums.length; j++) {
      if ((j != i) && (nums[j] < nums[i])) {
        counter += 1;
      }
    }
    console.log("i:", i, "          counter:", counter);
    arr[i] = counter;
  }

  return arr;
}

console.log(smallerNumbersThanCurrent(numbers1));
// console.log(smallerNumbersThanCurrent(numbers2));
// console.log(smallerNumbersThanCurrent(numbers3));

// 2021.08.25 - WED:

var numbers1 = [8,1,2,2,3];
var numbers2 = [6,5,4,8];
var numbers3 = [7,7,7,7];
var numbers4 = [36,28,40,50,89,49,85,99,22,1,49,83,44,77,100,99,78,28,29,8,78,40,49,26,90,37,12,55,0,44,11,52,19,14,68,93,22,96,43,18,48,55,41,69,81,89,66,35,26,24,20,21,68,20,18,15,56,74,66,16,55,17,42,77,93,89,87,40,76,17,2,45,99,22,28,30,88,63,75,62,4,83,11,17,68,60,72,18,26,46,90,17,35,94,44,8,49,60,3,67,59,25,92,30,26,88,0,92,89,38,5,34,66,24,9,13,98,14,51,42,13,57,91,73,66,90,83,61,85,35,18,55,47,82,44,96,49,52,55,47,70,26,25,8,18,30,30,2,30,85,50,58,100,78,56,72,12,6,22,67,0,5,55,100,35,53,16,30,88,98,84,47,53,99,43,74,95,6,64,58,16,88,66,46,74,7,44,15,31,81,81,15,55,19,2,46,16,19,36,3,60,81,3,61,8,96,75,55,11,60,69,77,64,12,16,68,86,90,50,82,77,69,52,30,66,48,61,93,40,56,14,8,26,75,78,89,47,13,12,45,13,25,14,88,83,75,11,0,65,55,30,11,39,62,78,7,73,54,71,38,50,80,5,85,76,3,35,79,61,56,28,34,41,99,61,56,68,7,34,65,22,95,90,56,58,37,74,75,23,41,65,84,50,97,85,88,52,87,71,76,50,61,96,80,28,39,2,8,18,63,14,46,33,39,69,38,17,13,64,17,58,4,57,60,93,72,41,69,47,16,91,1,68,25,98,34,79,8,100,59,36,1,82,34,92,64,88,2,72,51,14,12,87,41,77,79,81,89,88,73,57,11,78,63,67,43,75,86,5,24,21,7,78,14,5,15,71,67,39,96,100,25,20,68,19,29,27,11,64,45,88,72,55,34,78,17,36,73,31,8,76,33,7,2,55,78,36,60,54,55,8,23,27,98,86,4,81,96,54,53,45,45,65,18,22,28,29,7,46,8,57,41,27,28,32,19,88,90,66,48,13,61,87,93,100,78,0,60,39,33,99,89,37,26,16,88,81,48,84,4,100,98,48,58,68,3,16,29,63,82,12,37,89,79,55,25,66,42,12,31,31,62,73,14,22,63,45,90,82,76,81,79,55,51,70,53,96,3,80,51];

function smallerNumbersThanCurrent(nums) {
  var arr = [];

  for (let i=0; i<nums.length; i++) {
    var currentNum = nums[i];
    var counter = 0;

    for (let j=0; j<nums.length; j++) {

      if (i != j) {
        if (nums[i] > nums[j]) {
          counter += 1
        } else if (i == j) {
          counter += 0;
        }
        console.log("          ");
        console.log("Iteration #:", i+1)
        console.log("counter: ", counter);

        console.log("i=" + i + " " + "j=" + j);
        console.log("nums[i]=" + nums[i] + " ");
        console.log("nums[j]=" + nums[j]);
      } 
    }
    console.log("*** counter:", counter);
    arr.push(counter);

  }
  console.log("arr:", arr);
  return arr;
}

// console.log(smallerNumbersThanCurrent(numbers1));
// console.log(smallerNumbersThanCurrent(numbers2));
console.log(smallerNumbersThanCurrent(numbers3));
console.log(smallerNumbersThanCurrent(numbers4));


// 2021.08.24 - TUE:

// Revisited

function numJewelsInStones(jewels, stones) {
  var output = 0;

  var jewelsArr = jewels.split("");
  console.log("jewelsArr:", jewelsArr);

  var stonesArr = stones.split("");
  console.log("stonesArr:", stonesArr);

  for (let i=0; i<stonesArr.length; i++) {
    if (jewelsArr.indexOf(stonesArr[i]) !== -1) {
      output += 1;
    }
  }

  return output;
}

// 2021.08.15 - SUN:

var numbers = [1,1,2];
var numbers2 = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(nums) {
  var arr = [nums[0]];

  var currNum = nums[0];

  for (let i=1; i<nums.length; i++) {
    if (nums[i] == currNum + 1) {
      currNum = nums[i];
      arr.push(currNum);
    }
  }
  console.log("arr:", arr);
  nums = arr;
  console.log("nums:", nums);

  var k = nums.length;

  return k;

}

console.log("removeDuplicates(numbers):", removeDuplicates(numbers));

// 2021.08.13 - FRI:

var jwls = "aA";
var stns = "aAAbbbb";
var jwls2 = "z";
var stns2 = "ZZ";

function numJewelsInStones(jewels, stones) {
  var output = 0;

  var jewelsArr = jewels.split("");
  console.log("jewelsArr:", jewelsArr);

  var stonesArr = stones.split("");
  console.log("stonesArr:", stonesArr);

  for (let i=0; i<stonesArr.length; i++) {
    if (jewelsArr.indexOf(stonesArr[i]) !== -1) {
      output += 1;
    }
  }

  return output;
}

// console.log("numJewelsInStones(jwls, stns):", numJewelsInStones(jwls, stns));
console.log("numJewelsInStones(jwls, stns):", numJewelsInStones(jwls2, stns2));

//

var arr = [2,3,5,1,3]; 
var extraArr = 3;
var arr2 = [4,2,1,1,2];
var extraArr2 = 1;

function kidsWithCandies(candies, extraCandies) {
  var output = [];

  var candiesCopy = candies.slice();
  var sortedArr = candiesCopy.sort((a,b) => (b-a));
  var highestNum = sortedArr[0];
  var currentBoolVal = false;

  for (let i=0; i<candies.length; i++) {
    if (candies[i] + extraCandies >= highestNum) {
      currentBoolVal = true;
      output.push(currentBoolVal);
    } else if (candies[i] + extraCandies < highestNum) {
      console.log("candies[3]:", candies[3]);
      currentBoolVal = false;
      output.push(currentBoolVal);
    }
  }
  console.log("output:", output);

  return output;
}

// console.log("kidsWithCandies(arr, extraArr):", kidsWithCandies(arr, extraArr));
console.log("kidsWithCandies(arr, extraArr):", kidsWithCandies(arr2, extraArr2));

//

var img = [[1,1,0],[1,0,1],[0,0,0]];
var img2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

function flipAndInvertImage(image) {
  var newImage = [];

  var outerArr = [];
  var innerArr = [];

  for (let i=0; i<image.length; i++) {
      innerArr = image[i].reverse();
      outerArr.push(innerArr);
  }
  console.log("outerArr:", outerArr);

  for (let i=0; i<outerArr.length; i++) {
    for (let j=0; j<outerArr[i].length; j++) {
      if (outerArr[i][j] == 0) {
        outerArr[i][j] = 1;
      } else if (outerArr[i][j] == 1) {
        outerArr[i][j] = 0;
      }
    }
  }
  console.log('outerArr:', outerArr);

  newImage = outerArr;

  return newImage;
}

// console.log("flipAndInvertImage(img):", flipAndInvertImage(img));
console.log("flipAndInvertImage(img):", flipAndInvertImage(img2));

//

var arr = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
var rK = "color";
var rV = "silver";
var arr2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
var rK2 = "type"; 
var rV2 = "phone";

function countMatches(items, ruleKey, ruleValue) {
  var numItems = 0;

  for (let i=0; i<items.length; i++) {
    console.log("Iteration #:", i+1, items[i]);
    
    if (ruleKey == "type") {
      for (let j=0; j<1 ; j++) {
        if (items[i][j] == ruleValue) {
          numItems += 1;
        }
      }
    }
    
    if (ruleKey == "color") {
      for (let j=1; j<2; j++) {
        console.log("j=", items[i][j])
        if (items[i][j] == ruleValue) {
          numItems += 1; 
        }
      }
    }

    if (ruleKey == "name") {
      for (j=2; j<3; j++) {
        if (items[i][j] == ruleValue) {
          numItems += 1;
        }
      }
    }

  }

  return numItems;
};

// console.log("countMatches(arr, rK, rV):", countMatches(arr, rK, rV));
console.log("countMatches(arr2, rK2, rV2):", countMatches(arr2, rK2, rV2));











// 2021.07.21 - WED: 

// Defanged IP Address:

var addr = "1.1.1.1";

function defangIPaddr(address) {
  
    address = address.split("");
    
    let arr = [];
    
    for (let i=0; i<address.length; i++) {
        if (address[i] === ".") {
          address[i] = "[.]";
        }

        arr.push(address[i]);
    }
    console.log("arr:", arr);

    let str = arr.join("");
    console.log("str:", str);

    return str;

};

console.log("Result:", defangIPaddr(addr)); 

// Longest Common Prefix:

var strings = ["flower","flow","flight"];
// var strings = ["dog","racecar","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  for (let comparisonLetter of comparisonWord) {
    console.log("comparisonLetter:", comparisonLetter);
  
    
  
  }


};

console.log("Result:", longestCommonPrefix(strings)); 

//

var strings = ["flower","flow","flight"];
// var strings = ["dog","racecar","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }
  console.log("arr:", arr);

};

console.log("Result:", longestCommonPrefix(strings));  

// 

// var strings = ["flower","flow","flight"];
var strings = ["cir","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

    if (arr.length > 1) {
      for (let j=0; j<arr.length; j++) {
        if (Math.abs(comparisonWord.indexOf(arr[j]) - comparisonWord.indexOf(arr[j+1]) > 1)) {
          arr.pop();
        }
      }
    }

  }
  console.log("arr:", arr);

  let longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

//

var strings = ["flower","flow","flight"];
// var strings = ["cir","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }

  if (arr.length > 1) {
    for (let j=0; j<arr.length-1; j++) {
      console.log(Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])));
      if (Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])) > 1) {
        arr.pop();
      }
    }
  }
  console.log("arr:", arr);

  let longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

// 

var strings = ["flower","flow","flight"];
// var strings = ["cir","car"];
// var strings = ["flower", "fkow"];

function longestCommonPrefix(strs) {

  let longest = "";

  let comparisonWord = strs[0];

  let firstLetterOfFirstWord = strs[0].charAt(0);
  if (strs[1]) {
    let secondWord = strs[1];
    let firstLetterOfSecondWord = secondWord.charAt(0);

    if (firstLetterOfFirstWord !== firstLetterOfSecondWord) {
      return longest;
    }

  }

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);

    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }

  if (arr.length > 1) {
    for (let j=0; j<arr.length-1; j++) {
      if (Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])) > 1) {
        arr.pop();
        console.log("arr.pop():", arr.splice(j+1, 1));
      }
    }
  }
  console.log("arr:", arr);

  longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

// 2021.07.29 - React Practice - new app 
