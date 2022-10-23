/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    const dp = Array(amount+1).fill(987654321);
    coins.sort((a,b)=>a-b);
    for(let coin of coins){
        dp[coin] = 1;
        for(let i=1; i<=amount; i++){
            if(i-coin <= 0) continue;
            dp[i] = Math.min(dp[i-coin]+1,dp[i]);
        }
        console.log(dp);
    }
    if(dp[amount] === 987654321) return -1;
    return dp[amount];
};