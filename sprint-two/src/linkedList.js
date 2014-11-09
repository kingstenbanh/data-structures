var LinkedList = function(){
  var list = {};
  this.head = null;
  this.tail = null;
  this.ID = 0;
};

LinkedList.prototype.addToTail = function(value){
  var newTail = makeNode(value, this.ID);
  var oldTail = this.tail;

  this.head = this.head || newTail;

  if (oldTail) {
    oldTail.next = newTail;
  }

  this.tail = newTail;
  this[this.ID] = newTail;
  this.ID++;
};

LinkedList.prototype.removeHead = function(){
  if (this.head) {
    var oldHead = this.head;
    var newHead = this.head.next;

    this.head = newHead;

    delete this[oldHead.ID];
    return oldHead.value;
  }
};

LinkedList.prototype.contains = function(target){
  for (var property in this) {
    if (this[property].value === target) {
      return true;
    }
  }
  return false;
};
var makeNode = function(value, ID){
  var node = {};

  node.value = value;
  node.next = null;
  node.ID = ID;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
