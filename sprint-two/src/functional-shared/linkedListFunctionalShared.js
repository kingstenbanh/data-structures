var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.ID = 0;

  list.addToTail = function(value){
    var newTail = makeNode(value, this.ID);
    var oldTail = list.tail;

    list.head = list.head || newTail;

    if (oldTail) {
      oldTail.next = newTail;
    }

    this.tail = newTail;
    this[this.ID] = newTail;
    this.ID++;
  };

  list.removeHead = function(){
    if (list.head) {
      var oldHead = list.head;
      var newHead = list.head.next;

      list.head = newHead;

      delete list[oldHead.ID];
      return oldHead.value;
    }
  };

  list.contains = function(target){
    for (var property in list) {
      if (list[property].value === target) {
        return true;
      }
    }
    return false;
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
