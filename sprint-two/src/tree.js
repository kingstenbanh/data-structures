var Tree = function(value){
  var newTree = {};
  this.value = value;
  this.children = [];
};


Tree.prototype.addChild = function(value){
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
