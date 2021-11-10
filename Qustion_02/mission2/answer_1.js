// 재귀함수 사용
function calculate(m) {
    if(m <= 1) return [1];

    let factorial = calculate(m-1);
    factorial.push(m * factorial[factorial.length-1]);

    return factorial;
}

console.log(calculate(4));



// for문 사용
function calculate2(m) {
    let factorial = [1];

    for(let i = 2; i <= m; i++) {
        factorial.push(factorial[factorial.length-1] * i);
    }

    return factorial;
}

console.log(calculate2(4));