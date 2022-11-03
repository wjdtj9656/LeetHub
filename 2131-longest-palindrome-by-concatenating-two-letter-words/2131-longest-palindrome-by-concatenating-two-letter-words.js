/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const map = new Map();
    let answer = 0;
    for(let i=0; i<words.length; i++){
        let reverseWord = words[i][1] + words[i][0];
        if(reverseWord in map){
            answer +=4;
            map[reverseWord]--;
            if(map[reverseWord] === 0){
                delete map[reverseWord];
            }
        }
        else map[words[i]] = map[words[i]] ? map[words[i]]+1 : 1;
    }
    for(let word in map){
        if(word[0] === word[1]){
            answer+=2;
            break;
        }
    }
    return answer;
};