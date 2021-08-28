// 2021.08.23 - MON: 

// Revisited algo problem:

function maxProfit(prices) {
    console.log("prices:", prices);
  
    let buyPrice = prices[0];
    let profit = 0;
  
    for (let i=1; i<prices.length; i++) {
      if (buyPrice > prices[i]) {
        buyPrice = prices[i];
      } else {
        profit = Math.max(prices[i] - buyPrice, profit);
        console.log("profit:", profit);
      }
    }
    console.log("buyPrice:", buyPrice);
  
    return profit;
  };