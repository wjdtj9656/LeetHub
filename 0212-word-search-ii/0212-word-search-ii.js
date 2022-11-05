/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let m = board.length;
    let n = board[0].length;
    let root = {};
    let res =[];
    root = builderTrie(words);
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            dfs(root,i,j,board,res);
        }
    }
    return res;
}
const builderTrie = (words) =>{
    const root = {};
        for(let w of words){
            pointer = root;
            for(let c of w){
                if(!pointer[c]) pointer[c] = {};
                pointer = pointer[c];
            }
            pointer.end = w;
        }
    return root;
}
const dfs = (node,row,col,board,res) =>{
    if(node.end){
        res.push(node.end);
        node.end = null;
    }
    if(row < 0 || row>=board.length || col <0 || col>=board[0].length) return;
    if(!node[board[row][col]]) return;
    
    let save = board[row][col];
    board[row][col] = '#';
    dfs(node[save],row+1,col,board,res);
    dfs(node[save],row-1,col,board,res);
    dfs(node[save],row,col+1,board,res);
    dfs(node[save],row,col-1,board,res);
    board[row][col] = save;
}
    
