// 2021.07.06 - TUE:

// 3/6 passing:

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    console.log("cid:\n ", cid);
  
    let cashInDrawer = 0; 
    
    for (let i=0; i<cid.length; i++) {
      for (let j=1;j<cid[i].length; j++) {
        // console.log("cid[i][1]:", cid[i][1]);
        cashInDrawer += cid[i][1];
      }
    }
    console.log("cashInDrawer:", cashInDrawer);
  
    let hash = {};
    let changeDue = cash - price;
    console.log("changeDue:", changeDue);
  
    if (cashInDrawer < changeDue) {
      hash.status = "INSUFFICIENT_FUNDS";
      hash.change = []; 
    } else if (cashInDrawer === changeDue) {
      hash.status = "CLOSED";
      hash.change = cid;
    }
    console.log("hash:", hash) 
    return hash;
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    // console.log("cid:\n ", cid);
  
    let cashInDrawer = 0; 
    
    for (let i=0; i<cid.length; i++) {
      for (let j=1;j<cid[i].length; j++) {
        // console.log("cid[i][1]:", cid[i][1]);
        cashInDrawer += cid[i][1];
      }
    }
    console.log("cashInDrawer:", cashInDrawer);
  
    let hash = {};
    let changeDue = cash - price;
    console.log("changeDue:", changeDue);
  
    if (cashInDrawer < changeDue) {
      hash.status = "INSUFFICIENT_FUNDS";
      hash.change = []; 
    } else if (cashInDrawer === changeDue) {
      hash.status = "CLOSED";
      hash.change = cid;
    }
    console.log("hash:", hash) 
    return hash;
  
  }
  
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    // console.log("cid:\n ", cid);
  
    let cashInDrawer = 0;
    
    for (let i=0; i<cid.length; i++) {
      for (let j=1;j<cid[i].length; j++) {
        // console.log("cid[i][1]:", cid[i][1]);
        cashInDrawer += cid[i][1];
      }
    }
    console.log("cashInDrawer:", cashInDrawer);
  
    let hash = {};
    let changeDue = cash - price;
    console.log("changeDue:", changeDue);
  
    if (cashInDrawer < changeDue) {
      hash.status = "INSUFFICIENT_FUNDS";
      hash.change = []; 
    } 
    console.log("hash:", hash) 
    return hash;
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    // console.log("cid:\n ", cid);
  
    let total = 0;
    
    for (let i=0; i<cid.length; i++) {
      for (let j=1;j<cid[i].length; j++) {
        console.log("cid[i][1]:", cid[i][1]);
        total += cid[i][1];
      }
    }
    console.log("total:", total);
  
  
  
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    // console.log("cid:\n ", cid);
  
    
    
    for (let i=0; i<cid.length; i++) {
      for (let j=1;j<cid[i].length; j++) {
        console.log("cid[i][1]:", cid[i][1]);
      }
    }
  
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    console.log("cid:\n ", cid);
    
  
  
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 

// Roman Numeral Converter

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
  
}
  
console.log("Result:", convertToRoman(9)); 

// 
// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    const map = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1,
    };
    let result = '';
    
    // main algorithm
    
    console.log("result:", result);
    return result;
  };
  
console.log("Result:", convertToRoman(9)); 

//

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    const map = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1,
    };
    let result = '';
    

  for (let key in map) {  
    const repeatCounter = Math.floor(num / map[key]);
    
    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }
    
    num %= map[key];
    
    if (num === 0) return result;
  }
    
    console.log("result:", result);
    return result;
  };
  
console.log("Result:", convertToRoman(9)); 