function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
  
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
  
      maxProfit = Math.max(maxProfit, price - minPrice);
    }  
    return maxProfit;
  }
  
  const prices = [7, 1, 5, 3, 6, 4];
  const profit = maxProfit(prices);
  console.log(profit); // Output: 5


// Time Complexity: O(n)
// Space Complexity: O(1)
  