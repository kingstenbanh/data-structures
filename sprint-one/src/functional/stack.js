var makeStack = function(){
  var newStack = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  newStack.push = function(value){
    storage[value] = value;
    count++;
  };

  newStack.pop = function(){
    count--;
  };

  newStack.size = function(){
    return count < 0 ? 0 : count;
  };

  return newStack;
};