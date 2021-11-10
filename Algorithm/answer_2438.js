const printStar = (value) => {
    const starArr = Array(value).fill("*");

    starArr.reduce((acc, cur) => {
        console.log(acc+cur);
        return acc += cur;
    }, "");
}

printStar(5);