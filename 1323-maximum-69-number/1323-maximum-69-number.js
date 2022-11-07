/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = String(num).split('');
    console.log(numStr);
    let index = numStr.indexOf('6');
    if(index === -1) return num;
    else{
        numStr[index] = '9';
        return numStr.join('');
    }
};