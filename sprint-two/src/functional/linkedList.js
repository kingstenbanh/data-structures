var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.ID = 0;

  list.addToTail = function(value){
    var newTail = makeNode(value);
    var oldTail = list.tail;
    this.ID++;

    list.tail = newTail;
  };

  list.removeHead = function(){

  };

  list.contains = function(target){
  };

  return list;
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
