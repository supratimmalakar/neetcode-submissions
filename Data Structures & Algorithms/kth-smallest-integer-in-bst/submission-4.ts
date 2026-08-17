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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let ans;
        let count = 0;
        function inorder(root: TreeNode | null) {
            if (root === null) return;
            if (ans) return;

            if (root.left) inorder(root.left);
            count++;
            if (count === k) ans = root.val
            if (root.right) inorder(root.right);
        }

        inorder(root)

        return ans
    }
}
