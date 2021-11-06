const getSum = (value) => value.split(" ").reduce((acc, cur) => acc += cur*1, 0);

console.log(getSum("1 2"));