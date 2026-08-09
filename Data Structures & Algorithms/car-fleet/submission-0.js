class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = []
        for (let i = 0; i < position.length; i++) {
            arr.push([position[i], speed[i]])
        }
        arr.sort((a,b) => a[0] - b[0]);
        let stack = []
        for (let i = arr.length - 1; i >= 0; i--) {
            stack.push(arr[i]);
            const last = stack.length - 1;
            if (stack.length > 1) {
                let time2reach_last = (target - stack[last][0])/stack[last][1]
                let time2reach_2ndlast = (target - stack[last - 1][0])/stack[last - 1][1];
                if (time2reach_last <= time2reach_2ndlast) {
                    stack.pop()
                }

            }
        }
        return stack.length
    }
}
