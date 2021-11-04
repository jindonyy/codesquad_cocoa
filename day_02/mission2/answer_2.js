const people = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

// for문 사용
function removeNum(person) {
    for(let i = 0, len = person.length; i < len; i++) {
        const el = person[i];
        if(!isNaN(Number(el))) person = person.replace(el, "");
    }
    return person;
}

function getNewPerson(people) {
    let newPeople = [];

    for(let i = 0, len = people.length; i < len; i++) {
        const person = people[i];
        if(!regExp.test(person)) newPeople.push(removeNum(person));
    }
    return newPeople;
}

console.log(getNewPerson(people));



// forEach, filter 사용
function removeNum2(person) {
    const splitArr = person.split("");
    
    splitArr.filter(el => isNaN(Number(el)));
    return split.join("");
}

function getNewPerson2(people) {
    let newPeople = [];

    people.forEach(person => {
        if(!regExp.test(person)) newPeople.push(removeNum2(person));
    });
    return newPeople;
}

console.log(getNewPerson2(people));