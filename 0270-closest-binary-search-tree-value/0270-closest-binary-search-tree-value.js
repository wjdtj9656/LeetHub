/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
let result = 0;
var closestValue = function(root, target) {
    let min = 987654321;
    result = 0;
   search(root,target,min); 
    return result;
};
const search = (root,target,min) =>{
    if(min > Math.abs(root.val - target)){
        min = Math.abs(root.val - target);
        result = root.val;
    }
    if(root.left) search(root.left,target,min);
    if(root.right) search(root.right,target,min);
    if(!root.left && !root.right) {
        return;
    }
}