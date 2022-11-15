/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visit = new Set();
    let m = grid.length;
    let n = grid[0].length;
    let result = 0;
    let flag = false;
    const dfs = (x,y) =>{
        if(x<0 || x>=m || y<0 || y>=n) return;
        if(grid[x][y] === "0") return;    
        if(visit.has(`${x}-${y}`)) return;
        visit.add(`${x}-${y}`);
        flag = true;
        dfs(x+1,y);
        dfs(x,y+1);
        dfs(x-1,y);
        dfs(x,y-1);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            flag = false;
            dfs(i,j)
            if(flag) result++;
        }
    }
    return result;
};