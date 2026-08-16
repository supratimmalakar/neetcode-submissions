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

        let ans;

        function checkPQ(root: TreeNode | null): {p: TreeNode | null, q: TreeNode | null} {

            if (root === null) return {p: null, q: null};


            const {p: pl, q: ql} = checkPQ(root.left);
            const {p: pr, q: qr} = checkPQ(root.right);

            if (ans) return {p: null, q: null}

            let pf = pl || pr || null;
            let qf = ql || qr || null;

            if (root?.val === p?.val) {
                pf = root;
            }

            if (root?.val === q?.val) {
                qf = root
            }


            if (pf && qf) {
                ans = root;
            }

            return {p: pf, q: qf}
        }

        checkPQ(root)

        return ans
    }
}
