class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  //   Root -> Left -> right
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }
  //   Left -> Root -> Right
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }
  //   Left -> Right -> Root
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }
}

module.exports = BinaryTree;
