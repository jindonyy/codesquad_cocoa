const hashFun = (key) => key.length % 10;
const hashMap = function() {
    this.hashTable = [];
}
hashMap.prototype.put = function(key, value) {
    const hash = hashFun(key);
    this.hashTable[hash] ? this.hashTable[hash][key] = value : this.hashTable[hash] = {[key]: value};
}
hashMap.prototype.remove = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    if(cur) delete cur[key];
}
hashMap.prototype.containsKey = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    return cur[key] !== undefined ? true : false;
}
hashMap.prototype.get = function(key) {
    const hash = hashFun(key);
    const cur = this.hashTable[hash];
    return cur[key];
}
hashMap.prototype.isEmpty = function() {
    return this.hashTable.length ? false : true;
}
hashMap.prototype.keys = function() {
    const keysArr = [];
    this.hashTable.forEach(el => {
        if(el) keysArr.push(...Object.keys(el));
    });
    return keysArr;
}
hashMap.prototype.replace = function(key, value) {
    this.hashTable.forEach(el => {
        if(el && el[key] !== undefined) el[key] = value; 
    });
}
hashMap.prototype.size = function() {
    let size = 0;
    this.hashTable.forEach(el => {
        if(el) {
            size += Array.isArray(el) ? el.length : 1;
        }
    })
    return size;
}
hashMap.prototype.clear = function() {
    this.hashTable.splice(0, this.hashTable.length);
}

const map = new hashMap();


map.put('a', 1); // hashTable: [ <1 empty item>, { a: 1 } ]
map.put('b', 1.5); // hashTable: [ <1 empty item>, { a: 1 , b: 1.5} ]
map.remove('b'); // hashTable: [ <1 empty item>, { a: 1 } ]
console.log(map.containsKey('b')); // false
console.log(map.get('a')); // 1
console.log(map.isEmpty()); // false
console.log(map.keys()); // ['a']
console.log(map.size()); // 1
map.clear(); //hashTable: []