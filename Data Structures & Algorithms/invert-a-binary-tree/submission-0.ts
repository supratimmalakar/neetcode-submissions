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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (root === null) return root
        let stack = [root];
        while (stack.length > 0) {
            const current = stack.pop();

            if (current.left) stack.push(current.left);
            if (current.right) stack.push(current.right);

            const temp = current.left;
            current.left = current.right;
            current.right = temp;
        }

        return root

    }
}
