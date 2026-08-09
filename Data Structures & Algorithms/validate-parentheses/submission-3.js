class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        } 
        const stack = []
        let pushed = false;
        for (let i = 0; i <s.length; i++) {
            const isOpeningBracket = s[i] === "(" || s[i] === "{" || s[i] === "[" 
            if (isOpeningBracket) {
                stack.push(s[i])
                pushed = true
            }
            else {
                if (i === 0) return false
                let length = stack.length;
                if (stack[length - 1] === map[s[i]]) {
                    stack.pop()
                } else return false
            }

        }
        return pushed && stack.length === 0
    }
}
