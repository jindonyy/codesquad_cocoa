/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    
    let str = String(x);
    return str.split('').reverse().join('') === str ? true : false;
};