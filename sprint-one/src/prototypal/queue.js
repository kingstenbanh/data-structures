var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.count = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {

};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

queueMethod.isEmpty = function() {

};


