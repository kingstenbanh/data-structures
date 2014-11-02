var makeQueue = function(){
  var newQueue = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  newQueue.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  newQueue.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    for (var i = 0; i < count - 1; i++) {
      storage[i] = storage[i + 1];
    }
    count--;
    return result;
  };

  newQueue.size = function(){
    return count < 0 ? 0 : count;
  };

  return newQueue;
};
