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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {

        function checkPQ(root: TreeNode | null): TreeNode | null {

            if (root === null || root === p || root === q) return root;


            const leftN = checkPQ(root.left);
            const rightN = checkPQ(root.right);

           
            if (leftN && rightN) return root;

            return leftN || rightN || null

        }

        return checkPQ(root)
    }
}
