var makeQueue = function(){
  var newQueue = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  newQueue.enqueue = function(value){
  };

  newQueue.dequeue = function(){
  };

  newQueue.size = function(){
    return count < 0 ? 0 : count;
  };

  return newQueue;
};
