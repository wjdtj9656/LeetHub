/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(let num of arr){
        if(map.has(num)) map.set(num,map.get(num)+1);
        else map.set(num,1);
    }
    const mapArr = [...map];
    const result = new Set();
    for([key,val] of mapArr){
        if(result.has(val)) return false;
        result.add(val);
    }
    return true;
};