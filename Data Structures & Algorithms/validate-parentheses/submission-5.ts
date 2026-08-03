class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s: string): boolean {
        const map = {
            '}': '{',
            ']': '[',
            ')': '(',
        }
        const stack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                stack.push(s[i]);
            }
            else {
                const counterpart = map[s[i]];
                if (stack[stack.length - 1] !== counterpart) return false;
                stack.pop()
            }
        }
        if (stack.length === 0) return true;
        return false
    }
}
