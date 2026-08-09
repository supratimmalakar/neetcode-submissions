class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
         const k = s1.length;
         if (k > s2.length) return false;

         const count1 = new Array(26).fill(0);
         const count2 = new Array(26).fill(0);

         let matches = 0;

         for (let i = 0; i < k; i++) {
            const index1 = s1.charCodeAt(i) - 97;
            const index2 = s2.charCodeAt(i) - 97;
            count1[index1] = count1[index1] + 1;
            count2[index2] = count2[index2] + 1;
         }

         for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) matches++
         }


         for (let i = k; i < s2.length; i++) {
            if (matches === 26) return true;
            
            const letterIdx2 = s2.charCodeAt(i) - 97;
            if (count2[letterIdx2] === count1[letterIdx2]) matches--;
            count2[letterIdx2]++;
            if (count2[letterIdx2] === count1[letterIdx2]) matches++;

            const letterIdx1 = s2.charCodeAt(i - k) - 97;
            if (count2[letterIdx1] === count1[letterIdx1]) matches--;
            count2[letterIdx1]--;
            if (count2[letterIdx1] === count1[letterIdx1]) matches++;
         }

         if (matches === 26) return true
         return false
    }
}
