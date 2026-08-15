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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

        if (p === null && q === null) return true;
        
        if (p?.val !== q?.val) return false

        const l = this.isSameTree(p?.left || null, q?.left || null);
        const r = this.isSameTree(p?.right || null, q?.right || null);

        return l && r 
    }

    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        let stack = [];
        stack.push(root);
        while (stack.length > 0) {
            const curr = stack.pop();

            if (curr.val === subRoot.val) {
                const res = this.isSameTree(curr, subRoot);
                if (res) return true;
            }

            if (curr.right) stack.push(curr.right);
            if (curr.left) stack.push(curr.left);
        }

        return false
    }
}
