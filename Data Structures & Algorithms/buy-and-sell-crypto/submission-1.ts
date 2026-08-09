class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0;
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            profit = Math.max(profit, prices[i] - prices[buy])
            if (prices[buy] > prices[i]) buy = i
        }

        return profit;
    }
}
