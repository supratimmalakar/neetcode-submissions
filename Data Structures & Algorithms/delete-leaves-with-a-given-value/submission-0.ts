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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root: TreeNode | null, target: number): TreeNode {
        if (root.left === null && root.right === null && root.val === target) return null;

        if (root.left) {
            root.left = this.removeLeafNodes(root.left, target);
        }

        if (root.right) {
            root.right = this.removeLeafNodes(root.right, target)
        }

        if (root.left === null && root.right === null && root.val === target) return null

        return root;
    }
}
