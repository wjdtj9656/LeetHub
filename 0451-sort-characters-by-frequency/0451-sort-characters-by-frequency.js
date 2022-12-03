/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();
    let result = "";
    s = s.split('');
    for(let str of s){
        if(map.has(str)) map.set(str,map.get(str)+1);
        else map.set(str,1);
    }
    let mapArr = [...map];
    mapArr.sort((a,b)=> b[1] - a[1]);
    console.log(mapArr);
    for(let [str,num] of mapArr){
        while(num > 0){
            result += str;
            num--;
        }
    }
    return result;
};