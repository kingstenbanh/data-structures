var makeStack = function(){
  var newStack = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  newStack.push = function(value){
    storage[count] = value;
    count++;
  };

  newStack.pop = function(){
    count--;
    var result = storage[count];
    delete storage[count];
    return result;
  };

  newStack.size = function(){
    return count < 0 ? 0 : count;
  };

  newStack.isEmpty = function() {
    return count <= 0;
  }
  return newStack;
};