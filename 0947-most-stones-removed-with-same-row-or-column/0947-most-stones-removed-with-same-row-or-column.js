var removeStones = function(stones) {
	let store = {};
  for(let i=0; i<stones.length; i++){
    store[i] = {};
  }
  for(let i=0; i<stones.length; i++){
    for(let j=0; j<stones.length; j++){
      if(i===j) continue;
      if(stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]){
        store[i][j] = true;
        store[j][i] = true;
      }
    }
  }
  let visit = {};
  let count = 0;
  const dfs = (node,visit) =>{
    visit[node] = true;
    let edges = store[node];
    for(let edge in edges){
      if(!visit[edge]){
        count++;
        dfs(edge,visit);
      }
    }
  }
  for(let edge in store){
    dfs(edge,visit);
  }
  return count;
}