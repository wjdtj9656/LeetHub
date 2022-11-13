/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const map = new Map();
    for(let [start,end,cost] of flights){
        if(map.has(start)) map.get(start).push([end,cost]);
        else map.set(start,[[end,cost]]);
    }
    const queue = [[0, src, k+1]];
    const visited = new Map();
    
    while(queue.length){
        queue.sort((a,b)=> a[0]-b[0]);
        
        const [cost, city, stops] = queue.shift();
        visited.set(city, stops);
        if(city === dst) return cost;
        if(stops <= 0 || !map.has(city)) continue;
        
        for(let [nextCity, nextCost] of map.get(city)){
            if(visited.has(nextCity) && visited.get(nextCity) >= stops) continue;
            queue.push([cost + nextCost,nextCity,stops-1]);
        }
    }
    return -1;
};
