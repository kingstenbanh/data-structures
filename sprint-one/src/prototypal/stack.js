var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.count = 0;
  newStack.storage = {};

  return newStack;  
};

var stackMethods = {};

stackMethods.push = function(value) {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

stackMethods.isEmpty = function() {

};




