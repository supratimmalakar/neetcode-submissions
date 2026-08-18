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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        if (root === null) return new TreeNode(val);


        if (val > root.val) {
            const res = this.insertIntoBST(root.right, val);
            if (res !== root.right) {
                root.right = res;
                return root;
            }
        }

        if (val < root.val) {
            const res = this.insertIntoBST(root.left, val);
            if (res !== root.left) {
                root.left = res;
                return root;
            }
        }


        return root
    }
}
