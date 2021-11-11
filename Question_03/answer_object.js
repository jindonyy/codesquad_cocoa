function hashMap() {}
hashMap.prototype.put = function(key, value) {
    this[key] = value;
}
hashMap.prototype.remove = function(key) {
    delete this[key];
}
hashMap.prototype.containsKey = function(key) {
    return this[key] !== undefined ? true : false;
}
hashMap.prototype.get = function(key) {
    return this[key];
}
hashMap.prototype.isEmpty = function() {
    return hashMap.prototype.keys().length === 0 ? true : false;
}
hashMap.prototype.keys = function() {
    return Object.keys(this);
}
hashMap.prototype.replace = function(key, value) {
    this[key] = value;
}
hashMap.prototype.size = function() {
    return hashMap.prototype.keys().length;
}
hashMap.prototype.clear = function() {
    for (var key in map) {
        delete map[key];
    }
}

const map = new hashMap();


map.put('a', 1);
map.put('b', 2);
map.put('c', 3); // hashMap { a: 1, b: 2, c: 3 }
map.remove('b'); // hashMap { a: 1, c: 3 }
console.log(map.containsKey('A')); // false
console.log(map.get('a')); // 1
console.log(map.isEmpty()); // false
console.log(map.keys()); // ['a', 'c']
map.replace('a', 0); // hashMap { a: 0, c: 3 }
console.log(map.size()); // 2
map.clear(); // hashMap {}