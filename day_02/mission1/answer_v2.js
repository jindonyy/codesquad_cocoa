function changeNnum(n, num) {
    return num.toString(n).split("");
}

function getResultArr(n, t, m) {
    let resultArr = [];

    for(let i = 0, len = t * m; i < len; i++) {
        resultArr.push(...changeNnum(n, i));
    }
    return resultArr;
}

function getPNum(n, t, m, p) {
    const resultArr = getResultArr(n, t, m);
    let start = 0;
    let end = 0;
    
    for(let i = 0, len = t * m; i < len; i++) {
        const numLen = changeNnum(n, i).length;
        if(i > t * p) break;
        if(i >= t * (p-1)) end += numLen;
        else start += numLen;
    }
    return resultArr.slice(start, start + end);
}

console.log(getPNum(2, 4, 2, 2)); // ['1', '0', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1']