/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n==1) return true;
    while(n !== 1){
        let now = n;
        if(n % 2 == 0) n/=2;
        if(n % 3 == 0) n/=3;
        if(n % 5 == 0) n/=5;
        if(n === now) return false;
    }
    return true;
};