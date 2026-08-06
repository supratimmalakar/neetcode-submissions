class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let temp = position.map((v,i) => ({value: v, index: i})).sort((a,b) => a.value - b.value);
        let ss = temp.map((v) => speed[v.index]);
        let sp = temp.map(v => v.value);

        let time = new Array(position.length).fill(0);

        for (let i = 0; i < position.length; i++) {
            time[i] = (target - sp[i])/ss[i]
        }

        let stk = [];

        let fleetCount = 0;

        for (let i = time.length - 1; i >= 0; i--) {
            if (stk.length === 0 || time[i] > stk[stk.length - 1]) {
                fleetCount++
                stk.push(time[i])
            }
        }

        return fleetCount
    }
}
