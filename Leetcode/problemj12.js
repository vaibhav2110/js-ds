var RandomizedSet = function() {
    this.collections = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.collections.hasOwnProperty(val)){
        return;
    }
    this.collections[val] = val;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.collections.hasOwnProperty(val)){
        return;
    }
    delete this.collections[val];
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randIndex = Math.floor(Object.keys(this.collections).length * Math.random());
    let randValue = Object.keys(this.collections)[randIndex];
    return this.collections[randValue];
};

module.exports = RandomizedSet;
