// // 2021.06.22 - TUE: 

// // Roman Numeral Converter

// // Starting Code:

// function convertToRoman(num) {
//     return num;
//    }
   
//    console.log("Result:", convertToRoman(36));

//    // 

// // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
//     console.log("num:", num);
  
//     let romanNumeral = "";
  
//     console.log("romanNumeral:", romanNumeral);
//     return romanNumeral;
  
//   }
  
//   console.log("Result:", convertToRoman(2));

//   // passing 2/26 tests:

// // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
//     console.log("num:", num);
  
//     let romanNumeral = "";
  
//     while (num > 0) {
//       console.log(num);
//       romanNumeral += "I";
//       num--;
//     } 
  
//     console.log("romanNumeral:", romanNumeral);
//     return romanNumeral;
  
//   }
  
//   console.log("Result:", convertToRoman(3));

//   // 3 of 26:

//   // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
  
//     let romanNumeral = "";
  
//     while (num > 0) {
//       if (num < 4) {
//         // console.log("num:", num);
//         romanNumeral += "I";
//         num--;
//       } else if (num == 4) {
//           console.log("num:", num);
//           romanNumeral += "IV";
//           num -= 4;
//       } 
//       console.log(num)
//     }
  
//     console.log("romanNumeral:", romanNumeral);
//     return romanNumeral;
  
//   }
  
//   console.log("Result:", convertToRoman(4));

// // *new approach* 

// // 2/26

// // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
//     let arr = [];
//     let hash = {};
  
//     hash[1] = "I";
//     hash[5] = "V";
  
//     while (num > 0) {
//       if (num <= 3) {
//         arr.push(hash[1]);
//         num--;
//       } else {
//         num--;
//       }
//     }
  
//     console.log("hash:", hash);
//     console.log("arr:", arr);
//     return arr.join('');
  
//   }
    
//   console.log("Result:", convertToRoman(3)); 

//   // 3/26:

//   // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
//     let arr = [];
//     let hash = {};
  
//     hash[1] = "I";
//     hash[5] = "V";
  
//     while (num > 0) {
//       if (num <= 3) {
//         arr.push(hash[1]);
//         num--;
//       } else if (num == 4) {
//         arr.push(hash[1]);
//         arr.push(hash[5]);
//         num -= 4;
//       } else {
//         num--;
//       }
//     }
  
//     console.log("hash:", hash);
//     console.log("arr:", arr);
//     return arr.join('');
  
//   }
    
//   console.log("Result:", convertToRoman(4)); 

//   // 5/26:

//   // I  1
// // V  5
// // X  10
// // L  50
// // C  100
// // D  500
// // M  1000 

// function convertToRoman(num) {
//     let arr = [];
//     let hash = {};
  
//     hash[1] = "I";
//     hash[5] = "V";
//     hash[10] = "X";
  
//     while (num > 0) {
//       if (num <= 3) {
//         arr.push(hash[1]);
//         num--;
//       } else if (num == 4) {
//         arr.push(hash[1]);
//         arr.push(hash[5]);
//         num -= 4;
//       } else if (num == 5) {
//         arr.push(hash[5]);
//         num -= 5;
//       } else if (num > 5 && num < 9) {
//         // 6,7,8
//         arr.push(hash[5]);
//         if (num - 5 == 1) {
//           arr.push(hash[1]);
//         } else if (num - 5 == 2) {
//           arr.push(hash[1]);
//           arr.push(hash[1]);
//         } else if (num - 5 == 3) {
//           arr.push(hash[1]);
//           arr.push(hash[1]);
//           arr.push(hash[1]);
//         }
//         num -= num;
//       } else if (num == 9) {
//         arr.push(hash[1]);
//         arr.push(hash[10]);
//         num -= num;
//       }
      
//       else {
//         num--;
//       }
//     }
  
//     console.log("hash:", hash);
//     console.log("arr:", arr);
//     return arr.join('');
  
//   }
    
//   console.log("Result:", convertToRoman(9)); 

// // 2021.06.23 - WED:

// function rot13(str) {
//   let strArr = str.split('');
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let alphabet = letters.split('');

//   let arr = [];
//   let newArr = [];
//   let newerArr = [];

//   for (let i=0; i<strArr.length; i++) {
//     if (alphabet.indexOf(strArr[i]) !== -1) {
//       arr.push(alphabet.indexOf(strArr[i]) + 13);
//     } else {
//       arr.push(" ")
//     }
//   }
//   console.log("arr:", arr);

//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] >= 26) {
//       newArr.push(arr[i] - 26);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log("newArr:", newArr);

//   for (let i=0; i<newArr.length; i++) {
//     newerArr.push(alphabet[newArr[i]]);
//   }
//   console.log("newerArr:", newerArr);

  

// }

// // function converter(letter) {

// // }

// console.log("Result:", rot13("SERR PBQR PNZC"));

// // 1/3

// function rot13(str) {
//   let strArr = str.split('');
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let alphabet = letters.split('');

//   let arr = [];
//   let newArr = [];
//   let newerArr = [];

//   for (let i=0; i<strArr.length; i++) {
//     if (alphabet.indexOf(strArr[i]) !== -1) {
//       arr.push(alphabet.indexOf(strArr[i]) + 13);
//     } else {
//       arr.push(" ")
//     }
//   }
//   // console.log("arr:", arr);

//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] >= 26) {
//       newArr.push(arr[i] - 26);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   // console.log("newArr:", newArr);

//   for (let i=0; i<newArr.length; i++) {
//     newerArr.push(alphabet[newArr[i]]);
//   }

//   for (let i=0; i<newerArr.length; i++) {
//     if (newerArr[i] === undefined) {
//       newerArr[i] = " ";
//     }
//   }

//   let result = newerArr.join('');
//   return result;

// }

// console.log("Result:", rot13("SERR PBQR PNZC")); 

// // 3/3! 

// function rot13(str) {
//   let strArr = str.split('');
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let alphabet = letters.split('');

//   let arr = [];
//   let newArr = [];
//   let newerArr = [];

//   for (let i=0; i<strArr.length; i++) {
//     if (alphabet.indexOf(strArr[i]) !== -1) {
//       arr.push(alphabet.indexOf(strArr[i]) + 13);
//     } else if (strArr[i] === "!" || strArr[i] === "?" || strArr[i] === ".") {
//       arr.push(strArr[i])
//     } else {
//       arr.push(" ")
//     }
//   }
//   // console.log("arr:", arr); 

//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] >= 26) {
//       newArr.push(arr[i] - 26);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   // console.log("newArr:", newArr);

//   for (let i=0; i<newArr.length; i++) {
//     if (newArr[i] === "!" || newArr[i] === "?" || newArr[i] === ".") {
//       newerArr.push(newArr[i]);
//     } else {
//       newerArr.push(alphabet[newArr[i]]);
//     }
//   }
//   console.log("newerArr:", newerArr);

//   for (let i=0; i<newerArr.length; i++) {
//     if (newerArr[i] === undefined) {
//       newerArr[i] = " ";
//     }
//   }

//   let result = newerArr.join('');
//   return result;

// }

// // console.log("Result:", rot13("SERR PBQR PNZC")); 
// console.log("Result:", rot13("SERR CVMMN!"));

// // 2021.06.24 - THU:

// // Telephone Number Validator

// // Starting Code: 

// function telephoneCheck(str) {
//   return true;
// }

// telephoneCheck("555-555-5555");

// // 28 tests in total

// function telephoneCheck(str) {





// }

// console.log("Result:", telephoneCheck("555-555-5555"));

// //

// // check if the str contains only numbers (and dashes, parentheses)

// function telephoneCheck(str) {
//   console.log("str:", str);

  


// }

// console.log("Result:", telephoneCheck("555-555-5555"));

// //

// // check if the str contains only numbers (and dashes, parentheses)

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');
//   console.log("arr:", arr);

// }

// console.log("Result:", telephoneCheck("555-555-5555"));
// // console.log("Result:", telephoneCheck("(555)555-5555"));
// // console.log("Result:", telephoneCheck("(555) 555-5555"));
// // console.log("Result:", telephoneCheck("555 555 5555"));
// // console.log("Result:", telephoneCheck("5555555555"));
// // console.log("Result:", telephoneCheck("1 555 555 5555"));

// //

// // check acceptable str characters: 0-10 as string characters, -, (, and )

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');
//   console.log("arr:", arr);

  

// }

// console.log("Result:", telephoneCheck("555-555-5555"));
// // console.log("Result:", telephoneCheck("(555)555-5555"));
// // console.log("Result:", telephoneCheck("(555) 555-5555"));
// // console.log("Result:", telephoneCheck("555 555 5555"));
// // console.log("Result:", telephoneCheck("5555555555"));
// // console.log("Result:", telephoneCheck("1 555 555 5555"));

// //

// // check acceptable str characters: 0-10 as string characters, -, (, and )

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-()";
//   console.log("acceptableChars:", acceptableChars);

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr); 

// }

// console.log("Result:", telephoneCheck("555-555-5555"));
// // console.log("Result:", telephoneCheck("(555)555-5555"));
// // console.log("Result:", telephoneCheck("(555) 555-5555"));
// // console.log("Result:", telephoneCheck("555 555 5555"));
// // console.log("Result:", telephoneCheck("5555555555"));
// // console.log("Result:", telephoneCheck("1 555 555 5555"));

// // 10/28 passing:

// telephoneCheck("555-555-5555") should return a boolean.

// Passed
// telephoneCheck("1 555-555-5555") should return true.

// Passed
// telephoneCheck("1 (555) 555-5555") should return true.

// Passed
// telephoneCheck("5555555555") should return true.

// Passed
// telephoneCheck("555-555-5555") should return true.

// Passed
// telephoneCheck("(555)555-5555") should return true.

// Passed
// telephoneCheck("1(555)555-5555") should return true.

// telephoneCheck("555-5555") should return false.

// telephoneCheck("5555555") should return false.

// telephoneCheck("1 555)555-5555") should return false.

// Passed
// telephoneCheck("1 555 555 5555") should return true.

// Passed
// telephoneCheck("1 456 789 4444") should return true.

// Passed
// telephoneCheck("123**&!!asdf#") should return false.

// telephoneCheck("55555555") should return false.

// telephoneCheck("(6054756961)") should return false.

// telephoneCheck("2 (757) 622-7382") should return false.

// telephoneCheck("0 (757) 622-7382") should return false.

// telephoneCheck("-1 (757) 622-7382") should return false.

// telephoneCheck("2 757 622-7382") should return false.

// telephoneCheck("10 (757) 622-7382") should return false.

// telephoneCheck("27576227382") should return false.

// telephoneCheck("(275)76227382") should return false.

// telephoneCheck("2(757)6227382") should return false.

// telephoneCheck("2(757)622-7382") should return false.

// telephoneCheck("555)-555-5555") should return false.

// telephoneCheck("(555-555-5555") should return false.

// Passed
// telephoneCheck("(555)5(55?)-5555") should return false.

// telephoneCheck("55 55-55-555-5") should return false.

// // 

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.
// */

// // remove -, (, ), and " " from an acceptable phone number

//   let acceptableNonNumbers = "-() ";
//   let acceptableNonNumbersArr = acceptableNonNumbers.split('');

//   for (let i=0; i<arr.length; i++) {
//     if 
//     (
//       arr.indexOf(" ") !== -1 || 
//       arr.indexOf("-") !== -1 || 
//       arr.indexOf("(") !== -1 || 
//       arr.indexOf(")") !== -1 || 
//       arr.indexOf(" ") !== -1
//     ) {

//     }
//   }

//   return true;
 
// }

// console.log("Result:", telephoneCheck("555-555-555"));
// // console.log("Result:", telephoneCheck("(555)555-5555"));
// // console.log("Result:", telephoneCheck("(555) 555-5555"));
// // console.log("Result:", telephoneCheck("555 555 5555"));
// // console.log("Result:", telephoneCheck("5555555555"));
// // console.log("Result:", telephoneCheck("1 555 555 5555"));

// // 14/14:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log("arr2:", arr2);

//   if (arr2.length < 10) {
//     return false;
//   }

//   return true;
 
// }

// console.log("Result:", telephoneCheck("555-555"));

// // Added a check to see if phone number has more than 11 numbers (to return false); 
// // Now, 15/28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log("arr2:", arr2);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length >= 10) {

//   }



// /* telephoneCheck("1 555)555-5555") should return false BECAUSE ")" IS IN THE WRONG PLACE

// To check for this, we can 

// */ 

//   return true;
 
// }

// console.log("Result:", telephoneCheck("10 (757) 622-7382"));

// // 22/28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log("arr2:", arr2);
//   console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   }


// // If a phone number has 11 numbers, then the first number must be 1


// /* telephoneCheck("1 555)555-5555") should return false BECAUSE ")" IS IN THE WRONG PLACE

// To check for this, we can 

// */ 

//   return true;
 
// }

// console.log("Result:", telephoneCheck("2 757 622-7382"));

// // 23/28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log("arr2:", arr2);
//   console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }


// // If a phone number has 11 numbers, then the first number must be 1


// /* telephoneCheck("1 555)555-5555") should return false BECAUSE ")" IS IN THE WRONG PLACE

// To check for this, we can 

// */ 

//   return true;
 
// }

// console.log("Result:", telephoneCheck("-1 (757) 622-7382"));

// // 24/28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   // console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log("arr2:", arr2);
//   // console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }

// // If a phone number has 11 numbers, then the first number must be 1

// /* telephoneCheck("1 555)555-5555") should return false BECAUSE ")" IS IN THE WRONG PLACE

// To check for this, we can 

// */ 

//   console.log("arr2.length:", arr2.length);
//   console.log("arr2:", arr2);
//   console.log("arr.indexOf(')':", arr.indexOf(")"));

//   if (arr2.length === 11 && arr.indexOf(")") !== -1 && arr.indexOf("(") === -1) {
//     return false;
//   }


//   return true;
 
// }

// console.log("Result:", telephoneCheck("1 555)555-5555"));

// // 25 / 28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   // console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log("arr2:", arr2);
//   // console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }

// // If a phone number has 11 numbers, then the first number must be 1

//   console.log("arr2.length:", arr2.length);
//   console.log("arr2:", arr2);
//   console.log("arr.indexOf(')':", arr.indexOf(")"));

//   if (arr.indexOf(")") !== -1 && arr.indexOf("(") === -1) {
//     return false;
//   }  


//   return true;
 
// }

// console.log("Result:", telephoneCheck("1 555)555-5555"));

// // 26 / 28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   // console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log("arr2:", arr2);
//   // console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }

// // If a phone number has 11 numbers, then the first number must be 1

//   console.log("arr2.length:", arr2.length);
//   console.log("arr2:", arr2);
//   console.log("arr.indexOf(')':", arr.indexOf(")"));

//   if (arr.indexOf(")") !== -1 && arr.indexOf("(") === -1) {
//     return false;
//   }

//   let len = arr.length-1;
//   console.log("len:", len);

//   console.log(arr[len])
//   if (arr.indexOf(")") === len) {
//     return false;
//   } 

//   return true;
 
// }

// console.log("Result:", telephoneCheck("(6054756961)"));

// // 27 / 28 passing:

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   // console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log("arr2:", arr2);
//   // console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }

// // If a phone number has 11 numbers, then the first number must be 1

//   console.log("arr2.length:", arr2.length);
//   console.log("arr2:", arr2);
//   console.log("arr.indexOf(')':", arr.indexOf(")"));

//   if (arr.indexOf(")") !== -1 && arr.indexOf("(") === -1) {
//     return false;
//   }

//   let len = arr.length-1;
//   console.log("len:", len);

//   console.log(arr[len])
//   if (arr.indexOf(")") === len) {
//     return false;
//   } 

//   if (arr.indexOf("(") !== -1 && arr.indexOf(")") === -1) {
//     return false;
//   }

//   return true;
// }

// console.log("Result:", telephoneCheck("(555-555-5555"));

// // 28 / 28 passing!

// function telephoneCheck(str) {
//   console.log("str:", str);

//   let arr = str.split('');

//   let acceptableChars = "0123456789-() ";

//   let acceptableCharsArr = acceptableChars.split('');
//   // console.log("acceptableCharsArr:", acceptableCharsArr);

//   let acceptArr = [];

// // check acceptable str characters: 0-10 as string characters, "-", "(", ")", and " ";
//   for (let i=0; i<arr.length; i++) {
//     if (acceptableCharsArr.indexOf(arr[i]) === -1) {
//       return false;
//     } else {
//       acceptArr.push(arr[i]);
//     }
//   }
//   // console.log("acceptArr:", acceptArr);

// /* 
// telephoneCheck("555-5555") should return false: BECAUSE THERE SHOULD BE AT LEAST 10 NUMBERS.

// To check for this, we'll create arr2 to contain only numbers, and then check that arr2.length >= 10;
// */

//   let arr2 = [];

//   for (let i=0; i<arr.length; i++) {
//     if (
//       arr[i] === "0" ||
//       arr[i] === "1" ||
//       arr[i] === "2" ||
//       arr[i] === "3" ||
//       arr[i] === "4" ||
//       arr[i] === "5" ||
//       arr[i] === "6" ||
//       arr[i] === "7" ||
//       arr[i] === "8" ||
//       arr[i] === "9"     
//     ) {
//       arr2.push(arr[i]);
//     }
//   }
//   // console.log("arr2:", arr2);
//   // console.log("arr2.length:", arr2.length);

//   if (arr2.length < 10 || arr2.length > 11) {
//     return false;
//   } else if (arr2.length === 11 && arr2[0] !== "1") {
//     return false;
//   } else if (arr2.length === 11 && arr[0] === "-") {
//     return false;
//   }

// // If a phone number has 11 numbers, then the first number must be 1

//   // console.log("arr2.length:", arr2.length);
//   // console.log("arr2:", arr2);
//   // console.log("arr.indexOf(')':", arr.indexOf(")"));

//   if (arr.indexOf(")") !== -1 && arr.indexOf("(") === -1) {
//     return false;
//   }

//   let len = arr.length-1;
//   // console.log("len:", len);

//   console.log(arr[len])
//   if (arr.indexOf(")") === len) {
//     return false;
//   } 

//   if (arr.indexOf("(") !== -1 && arr.indexOf(")") === -1) {
//     return false;
//   }

//   let dashesArr = [];

//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] === "-") {
//       dashesArr.push(arr[i])
//     }
//   }
//   console.log("dashesArr:", dashesArr);

//   if (dashesArr.length > 2) {
//     return false;
//   }

//   return true;
// }

// console.log("Result:", telephoneCheck("55 55-55-555-5"));