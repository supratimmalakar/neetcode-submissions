

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map: { [k: number]: number } = {};
    for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i;

    let preIdx = 0;

    function build(inLo: number, inHi: number): TreeNode | null {
        if (inLo > inHi) return null;

        const rootVal = preorder[preIdx++];
        const idx = map[rootVal];

        const left = build(inLo, idx - 1);
        const right = build(idx + 1, inHi);

        return new TreeNode(rootVal, left, right);
    }

    return build(0, inorder.length - 1);
}
}
