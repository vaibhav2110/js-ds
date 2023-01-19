/**
 * Initialize your data structure here.
 */
class TrieNode {
  links;
  isEnd;

  constructor() {
    this.links = new Array(27).fill(0);
    this.isEnd = false;
  }

  getIndex(ch) {
    if (ch === ".") {
      return 26;
    }
    return Math.abs(97 - ch.charCodeAt(0));
  }
  containsKey(ch) {
    if (ch === ".") {
      return this.links[this.links.length - 1];
    }
    if (this.links[this.getIndex(ch)]) {
      console.log("here");
      return true;
    }
    return false;
  }
  get(ch) {
    if(ch === '.'){
        return this.links[this.links.length - 1];
    }
    return this.links[this.getIndex(ch)];
  }
  put(ch, node) {
    this.links[this.getIndex(ch)] = node;
    return this.links[this.getIndex(ch)];
  }
  update(ch){
      this.links[this.links.length - 1].links[this.getIndex(ch)] = new TreeNode();
  }
  setEnd() {
    this.isEnd = true;
  }
  getEnd() {
    return this.isEnd;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!node.containsKey(word[i])) {
      let insertedNode = node.put(word[i], new TrieNode());
      node.update('.', word[i]);
    }
    node = node.get(word[i]);
  }
  node.setEnd();
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!node.containsKey(word[i])) {
      console.log("here");
      return null;
    }
    node = node.get(word[i]);
  }
  return node;
};

Trie.prototype.search = function (word) {
  let node = this.searchPrefix(word);
  console.log(node);
  if (!node) {
    return false;
  }
  return node.getEnd();
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.searchPrefix(prefix);
  return node !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
module.exports = Trie;