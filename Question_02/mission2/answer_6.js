const myReduce = (arr, callback, initialValue) => {
    arr.forEach(el => initialValue = callback(initialValue, el));
    return initialValue;
}

const result1 = myReduce([1, 2, 3, 4, 5], (next, prev) => next += prev, 0);
const result2 = myReduce([[0, 1], [2, 3], [4, 5]], (next, prev) => next = next.concat(prev), []);
console.log(result1);
console.log(result2);


// 초기값 유뮤 체크 ver
const myReduce2 = (arr, callback, initialValue) => {
    let firstEl, startIndex;
    if(initialValue === undefined) { // 초기값(initialValue)이 설정 안돼있을 때
        firstEl = arr[0];
        startIndex = 1;
    } else { // 초기값(initialValue)이 설정 돼있을 때
        firstEl = initialValue;
        startIndex = 0;
    }

    for(let i = startIndex, len = arr.length; i < len; i++) initialValue = callback(initialValue, arr[i]);
    return initialValue;
}

const result3 = myReduce2([1, 2, 3, 4, 5], (next, prev) => next += prev, 0);
const result4 = myReduce2([[0, 1], [2, 3], [4, 5]], (next, prev) => next = next.concat(prev), []);
console.log(result3);
console.log(result4);