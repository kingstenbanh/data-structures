var Tree = function(value){
  var newTree = {};
  this.value = value;
  this.children = [];
};


Tree.prototype.addChild = function(value){
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
