class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(
        customers: number[],
        grumpy: number[],
        minutes: number,
    ): number {
        let satisfied = 0;
        let maxToAdd = 0;
        let max = 0

        for (let i = 0; i < minutes; i++) {
            if (grumpy[i] === 0) {
                satisfied += customers[i]
            }
            if (grumpy[i] === 1) {
                maxToAdd += customers[i]
            }
        }

        max = maxToAdd

        for (let i = minutes; i < customers.length; i++) {
            let last = i - minutes;
            if (grumpy[last] === 1) {
                maxToAdd -= customers[last]
            }

            if (grumpy[i] === 1) {
                maxToAdd+= customers[i]
            }

            max = Math.max(maxToAdd, max)

            if (grumpy[i] === 0) {
                satisfied += customers[i]
            }
            
        }

        return satisfied + max

        
    }
}
