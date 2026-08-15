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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

        if (p === null && q === null) return true;
        
        if (p?.val !== q?.val) return false

        const l = this.isSameTree(p?.left || null, q?.left || null);
        const r = this.isSameTree(p?.right || null, q?.right || null);

        return l && r 
    }
}
