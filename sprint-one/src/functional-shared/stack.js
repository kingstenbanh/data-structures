var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  newStack.count = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[count] = value;
  this.count++;
};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

stackMethods.isEmpty = function() {

};


