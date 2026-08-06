class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stk = [];
        let a = temperatures;
        let i = a.length - 1;
        let result = new Array(a.length).fill(0);
        while (i >= 0) {
            while (stk.length > 0 && a[stk[stk.length - 1]] <= a[i])
            {
                stk.pop();
            }
            if (stk.length === 0) {
                result[i] = 0
            } else {
                result[i] = stk[stk.length - 1] - i;
            }
            stk.push(i);
            i--;

        }
        return result
    }
}
