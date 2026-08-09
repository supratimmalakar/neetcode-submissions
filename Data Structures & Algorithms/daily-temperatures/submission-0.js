class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = Array(temperatures.length).fill(0);
        for (let i = temperatures.length - 1; i >= 0; i--) {
            const temp = temperatures[i]
            while (stack.length > 0 && temperatures[stack[stack.length-1]] <= temp ) {
                stack.pop()
            }
            if (stack.length === 0) res[i] = 0;
            else {
                res[i] = stack[stack.length-1] - i
            }
            stack.push(i)
            console.log({i, temp, stack})
        }
        return res
    }
}
