/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        function check(root: TreeNode | null): number {
            if (root === null) return 0;

            const lh = check(root.left);
            const rh = check(root.right);
            if (lh === -1 || rh === -1) return -1;

            if (Math.abs(lh - rh) > 1) return -1;

            return Math.max(lh, rh) + 1
        }
        const res = check(root);
        if (res === -1) return false
        return true
    }
}
