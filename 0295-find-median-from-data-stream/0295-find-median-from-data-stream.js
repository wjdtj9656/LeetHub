let arr = [];
var MedianFinder = function() {
    arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let start = 0;
    let end = arr.length;
    while(start <= end){
        let mid = parseInt((start + end)/2);
        if(arr[mid] < num){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    arr.splice(start,0,num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let mid = arr.length/2;
    let sum = 0;
    if(mid % 1 == 0) sum = (arr[parseInt(mid)] + arr[parseInt(mid)-1])/2; 
    else sum = arr[parseInt(mid)];
    return sum;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */