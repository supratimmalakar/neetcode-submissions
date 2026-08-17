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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return []
         let q = [{node: root, level: 0}];
        let map = []
        let i = 0;
        while (i < q.length) {
            const current = q[i++];
            const {node, level} = current;
             if (!map[level]) map[level] = [];
        map[level].push(node.val);
            if (node?.left) q.push({node: node?.left, level: level + 1});
            if (node?.right) q.push({node: node?.right, level: level + 1});
        }

        return map
    }
}
