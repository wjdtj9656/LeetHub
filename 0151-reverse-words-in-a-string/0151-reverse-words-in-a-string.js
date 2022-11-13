/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ').filter((str)=>str.length>0);
    return arr.reverse().join(' ');
};