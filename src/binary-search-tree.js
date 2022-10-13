const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
   return this.rootTree;
  }

  add(data) {    
    let newNode = new Node(data);

    if (!this.rootTree) {
      this.rootTree = newNode;
    } else {
      let currentNode = this.rootTree;

      function addNode () {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
          } else {
            currentNode = currentNode.left;
            addNode();
          }
        } else if (newNode.data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
        } else {
          currentNode = currentNode.right;
          addNode();
        }
      }
    }
    addNode();
    }
  }

  has(data) {
    if (!this.rootTree) {
      return false;        
    } else {
      let currentNode = this.rootTree;
      function hasData() {
        if (currentNode.data === data) {
          return true;
        } else if (currentNode.data > data) {
          currentNode = currentNode.left;
          if (!currentNode) {
            return false;
          } else {
            return hasData();
          }
        } else {
          currentNode = currentNode.right;
          if (!currentNode) {
            return false;
          } else {
            return hasData()
          }
        }
      }
      return hasData();
    }
  }

  find(data) {
    if (!this.rootTree) {
      return false;
  } else {
    let currentNode = this.rootTree;
    function findData() {
      if (currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
        if (!currentNode) {
          return null;
        } else {
          return findData();
        }
      } else {
        currentNode = currentNode.right;
        if (!currentNode) {
          return null;
        } else {
          return findData()
        }
      }
    }
    return findData();
  }
};

  remove(data) {
    this.root = removeData (this.rootTree, data);
    function removeData (node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeData(node.left, data)
        return node;
      } else if (node.data < data) {
          node.right = removeData(node.right, data)
          return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left){
          node = node.right;
          return node;
        }

        if (!node.right){
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right){
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;

        node.left = removeData(node.left, maxLeft.data)
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree){
      return null
    } else {
      let currentNode = this.rootTree;
      while(currentNode.left){
        currentNode = currentNode.left;
      }

      return currentNode.data;
    }
  }

  max() {
    if (!this.rootTree){
      return null
    } else {
      let currentNode = this.rootTree;
      while(currentNode.right){
        currentNode = currentNode.right;
      }

      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};