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
            if (stack.length === 0) stack.push(arr[i])
            else {
                let time2reach_last = (target - stack[stack.length - 1][0])/(stack[stack.length - 1][1])
                let time2reach_current = (target - arr[i][0])/arr[i][1]
                // console.log({time2reach_last, time2reach_current})
                if (time2reach_last < time2reach_current) stack.push(arr[i])
            }
            // console.log({stack})
        }
        return stack.length
    }
}
