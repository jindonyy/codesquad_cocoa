const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

// 각각 평균 구하기
function getAverage(grade) {    
    return grade.reduce((acc, cur) => acc += cur) / grade.length;
}

function getAverageArr(grades) {
    return grades.map(el => getAverage(el));
}

console.log(getAverageArr(grades));



// 최고점수 평균 구하기
function getMaxGrade(grades) {
    return grades.map(el => Math.max(...el));
}

function getMaxAverage(grades) {
    let maxArr = getMaxGrade(grades);
    return maxArr.reduce((acc, cur) => acc += cur) / maxArr.length;
}

console.log(getMaxAverage(grades));