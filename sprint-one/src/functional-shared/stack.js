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

};

stackMethods.pop = function() {

};

stackMethods.size = function() {

};

stackMethods.isEmpty = function() {

};


