class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let start = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[start] > prices[i]) {
                start = i
            }
            else {
                let profit = prices[i] - prices[start]
                maxProfit = Math.max(maxProfit, profit)
             }
        }
        return maxProfit
    }
}
