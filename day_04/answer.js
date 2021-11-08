function hashMap() {}
hashMap.prototype.put = function(key, value) {
    hash.containsKey(key) ? this[key] = value : hash.replace(key, value);
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
    return hash.keys().length === 0 ? true : false;
}
hashMap.prototype.keys = function() {
    return Object.keys(this);
}
hashMap.prototype.replace = function(key, value) {
    
}
hashMap.prototype.size = function() {
    return hash.keys().length;
}
hashMap.prototype.clear = function() {
    for (var key in hash) {
        delete hash[key];
    }
}

const hash = new hashMap();


hash.put('a', 1);
hash.put('A', 1);
hash.remove('A');
console.log(hash.containsKey('A'));
console.log(hash.get('a'));
console.log(hash.isEmpty());
console.log(hash.keys());
console.log(hash.size());
hash.clear();