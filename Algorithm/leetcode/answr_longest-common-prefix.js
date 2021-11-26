/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let answer = strs[0];

    for(let i = 1, strsLen = strs.length; i < strsLen; i++) {
        for(let j = 0, answerLen = answer.length; j < answerLen; j++) {
            if(answer[j] !== strs[i][j]) {
                answer = answer.slice(0, j);
                break;
            }
        }
    }

    return answer;
};

longestCommonPrefix(["flower","flow","flight"]);