/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = x < 0 ? '-' : ''; 
    answer += String(Math.abs(x)).split('').reverse().join('');
    answer = Number(answer);
    return answer >= Math.pow(-2, 31) && answer <= Math.pow(2, 31)-1 ? answer : 0;
};

var reverse2 = function(x) {
    let answer = String(Math.abs(x)).split('').reverse().join('');
    answer = x >= 0 ? Number(answer) : -Number(answer);
    return answer >= Math.pow(-2, 31) && answer <= Math.pow(2, 31)-1 ? answer : 0;
};