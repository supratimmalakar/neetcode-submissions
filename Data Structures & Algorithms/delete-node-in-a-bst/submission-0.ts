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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (root === null) return root;

        if (key === root.val) {

            if (root.right === null && root.left === null) {
                return null;
            }

            if (root.right === null && root.left !== null) {
                return root.left;
            }

            let curr = root.right;

            while (curr !== null && curr.left !== null) {
                curr = curr.left;
            }

            curr.left = root.left;

            return root.right

        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key)
        }

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key)
        }

        return root
    }
}
