function changeNnum(n, t, num) {
    let numArr = [];

    for(let i = num, len = num + t; i < len; i++) {
        numArr.push(...i.toString(n).split(""));
    }
    return numArr;
}

function getResultArr(n, t, m) {
    let resultArr = [];

    for(let i = 0, len = t * m; i < len; i+=t) {
        resultArr.push(...changeNnum(n, t, i));
    }
    return resultArr;
}

function getPNum(n, t, m, p) {
    return changeNnum(n, t, t * (p-1));
}

console.log(getPNum(2, 4, 3, 2)); // ['1', '0', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1']