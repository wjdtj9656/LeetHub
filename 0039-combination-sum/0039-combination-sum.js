/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let buffer = [];
    let result = [];
    
    const search = (startIdx,target)=>{
        if(target === 0)return result.push(buffer.slice());
        if(target < 0) return;
        if(startIdx === candidates.length) return;
        buffer.push(candidates[startIdx]);
        search(startIdx,target - candidates[startIdx]);
        buffer.pop();
        search(startIdx+1, target);
    }
    
    search(0, target);
    return result;
    
    
};