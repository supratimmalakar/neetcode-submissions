class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let countArrayAll: string[] = new Array(strs.length).fill('');

        for (let i = 0; i < strs.length; i ++) {
            const countArr = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                const indx = strs[i].charCodeAt(j) - 97;
                countArr[indx]++ 
            }
            countArrayAll[i] = countArr.join(',');
        }

        const unique = Array.from(new Set(countArrayAll));

        return unique.map(u => {
            let x = [];
            for (let k = 0; k < countArrayAll.length; k++) {
                if (countArrayAll[k] === u) {
                    x.push(strs[k]);
                }
            }
            return x
        })
    }
}