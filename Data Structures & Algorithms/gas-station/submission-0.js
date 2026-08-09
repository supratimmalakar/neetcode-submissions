class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let travelled = 0;
        let r = 0;
        let lap = 0;
        let tank = 0;
        let startIdx = 0
        while (travelled < 2*gas.length ) {
            if (lap === cost.length) return startIdx
            tank += gas[r]
            console.log({r, cost: cost[r], tank})
            if (tank < cost[r]) {
                tank = 0;
                lap = 0;
                startIdx = r + 1
                console.log({startIdx})
            } else {
                tank -= cost[r]
                lap++
            }
            r = increase(r, cost.length)
            travelled++
        }
        return -1
        
    }
}

const increase = (i, l) => {
    if (i === l - 1) return 0
    else return i + 1
}
