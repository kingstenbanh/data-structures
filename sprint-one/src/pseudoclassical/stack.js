var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {

};

Stack.prototype.pop = function() {

};

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};

Stack.prototype.isEmpty = function() {
  return this.count <= 0;
};
