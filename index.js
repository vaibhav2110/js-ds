"use strict";

let selectionSort = require("./Sorting/SelectionSort");
let bubbleSort = require("./Sorting/BubbleSort");
let insertionSort = require("./Sorting/InsertionSort");
let mergeSort = require("./Sorting/MergeSort");
let quickSort = require("./Sorting/QuickSort");

let LinkedListTest = require("./LinkedList/LinkedList");

let lengthofLongestSubscting = require("./Leetcode/problem3");
let convert = require("./Leetcode/problem6");
let intToRoman = require("./Leetcode/problem12");
let romanToInt = require("./Leetcode/problem13");
let letterCombinations = require("./Leetcode/problem17");
let generateParenthesis = require("./Leetcode/problem22");
let swapPairs = require("./Leetcode/problem24");
let twoCitySchedCost = require("./Leetcode/problemj3");
let sol = require("./Leetcode/problemj4");
let recon = require("./Leetcode/problemj5");
let change = require("./Leetcode/problemj6");

let BinarySearchTree = require("./BST/BinarySearchTree");
let AVL = require("./BST/AVL");
const Node = require("./BST/node").Node;

let Graph = require("./Graph/Graph");

const isSubsequence = require("./Leetcode/problemj8");

const searchInsert = require("./Leetcode/problemj10");
const sortColors = require("./Leetcode/problemj11");
const RandomizedSet = require("./Leetcode/problemj12");
const largestDivisibleSubset = require("./Leetcode/problemj13");

const validateIPAddress = require("./Leetcode/problemj16");
const surroundedRegions = require("./Leetcode/problemj17");
const hIndex = require("./Leetcode/problemj18");
const getPermutation = require("./Leetcode/problemj20");
const calculateMinimumHP = require("./Leetcode/problemj21");
const singleNumber = require("./Leetcode/problemj22");
const sumNumbers = require("./Leetcode/problemj26");
const numSquares = require("./Leetcode/problemj27");
const findItinery = require("./Leetcode/problemj28");
const uniquePaths = require("./Leetcode/problemj29");

const levelOrderBottom = require("./Leetcode/problemjuly2");
const islandPerimeter = require("./Leetcode/problemjuly7");
const threeSum = require("./Leetcode/problemjuly8");
const widthOfBinaryTree = require("./Leetcode/problemjuly9");
const flatten = require("./Leetcode/problemjuly10");
const subsets = require("./Leetcode/problemjuly11");
const reverseBits = require("./Leetcode/problemjuly12");
const kMax = require("./Leetcode/problemjuly17");
const findOrder = require("./Leetcode/problemjuly18");
const buildTree = require("./Leetcode/problemjuly27");
const sortedArr = require("./Leetcode/problemjuly28");
const wordBreak = require("./Leetcode/problemjuly30");

const verticalTraversal = require("./Leetcode/problemaug8");
const orangesRotting = require("./Leetcode/problemaug9");

const heap = require("./Heap/heap");
const Trie = require("./Trie/Trie");

const boundGetX = require("./Polyfills/polyfills");
//selectionSort([7, 5, 4, 3, 2]);
//bubbleSort([7, 5, 4, 3, 2]);
// insertionSort([1, 5, 7, 8, 2]);

// let arr = [7, 5, 4, 3, 2];
// mergeSort(arr);
// console.log(arr);

// let arr = [7, 2, 4, 3, 5];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
// let nums = [2, 7, 11, 15];
// let target = 9;

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let secondIndex = nums.indexOf(target - nums[i]);
//     if (secondIndex !== -1) {
//       return [i, secondIndex];
//     }
//   }
// };

// console.log(twoSum(nums, target));

// let linkedListTest = new LinkedListTest();
// linkedListTest.run();

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   // let firstarr = [];
//   // let secondarr = [];
//   // while (l1) {
//   //   firstarr.unshift(l1.val);
//   //   l1 = l1.next;
//   // }
//   // while (l2) {
//   //   secondarr.unshift(l2.val);
//   //   l2 = l2.next;
//   // }
//   let firstnum = BigInt([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].join(''));
//   console.log(firstnum);
//   let secondnum = BigInt([4,6,5].join(''));
//   console.log(secondnum);
//   let thirdnumarr = (firstnum + secondnum).toString().split("");
//   console.log(thirdnumarr);
//   let l3 = null;
//   for (let i = thirdnumarr.length - 1; i >= 0; i--) {
//     if (!l3) {
//       l3 = new ListNode(thirdnumarr[i]);
//     } else {
//       let node = l3;
//       while (node.next) {
//         node = node.next;
//       }
//       node.next = new ListNode(thirdnumarr[i]);
//     }
//   }
//   return l3;
// };

// console.log(addTwoNumbers());

// lengthofLongestSubscting("abcabcbb");
// lengthofLongestSubscting("bbbbb");
// lengthofLongestSubscting("pwwkew");
// lengthofLongestSubscting("b cada");
// lengthofLongestSubscting(" b ");
// lengthofLongestSubscting("abba");

// let bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(7);
// bst.insert(1);
// bst.insert(3);
// bst.insert(6);
// bst.insert(9);

// console.log("After insertion: ");
// bst.traversal();

// bst.invertBST();

// console.log("After inversion: ");
// bst.traversal();

// console.log("After deletion: ");
// bst.delete(1);
// bst.traversal();

// let avl = new AVL();
// avl.insert(5);
// avl.insert(10);
// avl.insert(24);
// avl.insert(2);
// avl.insert(100);
// avl.insert(1);

// console.log("After insertion: ");
// avl.traversal();

// console.log("After deletion: ");
// bst.delete(1);
// bst.traversal();

// console.log(convert("HELLOWORLDHOWAREYOU", 5));
// console.log(convert("PAYPALISHIRING", 4));
// console.log(convert("PAYPALISHIRING", 1));

//console.log(intToRoman(7));
//console.log(romanToInt("IX"));
// console.log(letterCombinations("9345"));

//console.log(swapPairs());

//twoCitySchedCost();
//sol();
//recon();

// let a = 3;

// switch(a){
//     case 3:
//         console.log(a);
//         break;
//     default:
//         console.log("default");
//         break;
// }

//change();

//isSubsequence();
//searchInsert();
//sortColors();
// let rand = new RandomizedSet();
// rand.insert(1);
// rand.insert(2);
// console.log(rand.getRandom());
// rand.remove(2);
// rand.remove(1);
// console.log(rand.getRandom());

//largestDivisibleSubset();
//validateIPAddress();
//surroundedRegions();
//hIndex();
//getPermutation();
//calculateMinimumHP();
//singleNumber();
//sumNumbers();
//numSquares();
//findItinery();
//uniquePaths();
//boundGetX();

//levelOrderBottom();
//heap();
//islandPerimeter();
//threeSum();
//Graph();
//flatten();
//subsets();
//reverseBits();
//kMax();
//findOrder();
//buildTree();
//sortedArr();
//wordBreak();

// function sum(a) {
//   return function (b) {
//     if (!b) return a;
//     return sum(a + b);
//   };
// }

// console.log(sum(2)(3)(7)());
// let trie = new Trie();
// trie.insert("ran");
// trie.insert("rune");

// console.log(trie.search("r.n"));

//verticalTraversal();
orangesRotting();
