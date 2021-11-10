const getDiv = (value) => {
    const split = value.split(" ");
    return split[0] / split[1];
}

console.log(getDiv("1 3"));