const hashFun = (key) => key.length % 10; // 보통 key가 문자열일 경우 아스키코드를, 숫자일 경우 key의 나머지를 사용 // 테스트이므로 그냥 나머지로 사용
const checkCollision = (cur) => { // 이미 충돌이 일어난 지점이면 cur이 이중 배열일 것이다.
    if(cur === undefined) return false;
    return cur = Array.isArray(cur[0]) ? true : false;
};
const hashMap = function() {
    this.hashTable = [];
}
hashMap.prototype.put = function(key, value) {
    const hash = hashFun(key);
    let cur = this.hashTable[hash];
    if(cur) { // 현재 값이 있을 때(배열)
        this.hashTable[hash] = checkCollision(cur) ? [...cur, [key, value]] : [[...cur], [key, value]];
    } else this.hashTable[hash] = [key, value]; // 현재 값이 없을 때
}
hashMap.prototype.remove = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    if(checkCollision(cur)) {
        cur.forEach((el, i) => {
            if(el[0] === key) {
                cur.splice(i,1)
                if(cur.length <= 2) this.hashTable[hash] = this.hashTable[hash][0]; // length가 2개인 이중 배열은 일차원 배열로 바꿔준다.
            }
        });
   } else this.hashTable[hash] = null;
}
hashMap.prototype.containsKey = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    if(checkCollision(cur)) {
        cur.forEach(el => {
            return el[0] === key ? true : false;
        });
    } else return cur[0] === key ? true : false;
}
hashMap.prototype.get = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    if(checkCollision(cur)) {
        cur.forEach(el => {
            if(el[0] === key) return el[1];
        });
   } else return cur[1];
}
hashMap.prototype.isEmpty = function() {
    return this.hashTable.length ? false : true;
}
hashMap.prototype.keys = function() {
    let keysArr = [];
    this.hashTable.forEach(cur => {
        if(cur) {
            if(Array.isArray(cur[0])) { // cur이 중복 배열일 경우
                cur.forEach(el => {
                    keysArr = [...keysArr, el[0]];
                });
            } else keysArr = [...keysArr, cur[0]];
        }
    });
    return keysArr;
}
hashMap.prototype.replace = function(key, value) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    if(checkCollision(cur)) {
        cur.forEach((el, i) => {
            if(el[0] === key) el[1] = value;
        });
   } else cur[1] = value;
}
hashMap.prototype.size = function() {
    let size = 0;
    this.hashTable.forEach(cur => {
        if(checkCollision(cur)) {
            size += cur.length;
       } else size++;
    })
    return size;
}
hashMap.prototype.clear = function() {
    this.hashTable.splice(0, this.hashTable.length);
}

const map = new hashMap();


map.put('a', 1);
map.put('b', 2);
map.put('aa', 3); // hashTable: [<1 empty item>, [['a', 1], ['b', 2]], ['aa', 3]]
map.remove('b'); // hashTable: [<1 empty item>, ['a', 1], ['aa', 3]]
console.log(map.containsKey('A')); // false
console.log(map.get('a')); // 1
console.log(map.isEmpty()); // false
console.log(map.keys()); // ['a', 'aa']
map.replace('a', 0); // hashTable: [<1 empty item>, ['a', 0], ['aa', 3]]
console.log(map.size()); // 2
map.clear(); // hashTable: []