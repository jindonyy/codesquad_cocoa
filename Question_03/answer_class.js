class hashMap {
    constructor() { }
    put(key, value) {
        this[key] = value;
    }
    remove(key) {
        delete this[key];
    }
    containsKey(key) {
        return this[key] !== undefined ? true : false;
    }
    get(key) {
        return this[key];
    }
    isEmpty() {
        return hashMap.prototype.keys().length === 0 ? true : false;
    }
    keys() {
        return Object.keys(this);
    }
    replace(key, value) {
        this[key] = value;
    }
    size() {
        return hashMap.prototype.keys().length;
    }
    clear() {
        for (var key in map) {
            delete map[key];
        }
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