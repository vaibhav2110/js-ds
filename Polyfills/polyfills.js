"use strict";

function myFilter(fn, thisArg) {
  if (!((typeof fn === "Function" || typeof fn === "function") && this)) {
    throw new TypeError();
  }
  let len = this.length;
  let index = 0;
  let res = [];
  if (thisArg) {
    while (index < len) {
      if (index in this) {
        if (fn.call(thisArg, this[index], index, this)) {
          res.push(this[index]);
        }
      }
      index++;
    }
  } else {
    while (index < len) {
      if (index in this) {
        if (fn(this[index], index, this)) {
          res.push(this[index]);
        }
        index++;
      }
    }
  }
  return res;
}

function myMap(fn, thisArg) {
  if (!((typeof fn === "Function" || typeof fn === "function") && this)) {
    throw new TypeError();
  }
  let index = 0;
  let len = this.length;
  let res = [];
  if (thisArg) {
    while (index < len) {
      if (index in this) {
        res.push(fn.call(thisArg, this[index], index, this));
      }
      index++;
    }
  } else {
    while (index < len) {
      if (index in this) {
        res.push(fn(this[index], index, this));
      }
      index++;
    }
  }
  return res;
}

// function myReduce(fn, initialValue = null) {
//   if (!((typeof fn === "Function" || typeof fn === "function") && this)) {
//     throw new TypeError();
//   }
//   let len = this.length;
//   if (len === 0 && !initialValue) {
//     throw new TypeError("Reduce of empty array with no initial value");
//   }
//   if (len === 0 && initialValue) {
//     return initialValue;
//   }
//   let k = 0;
//   let value = initialValue;
//   while (k < len) {
//     if (k in this) {
//       value = fn(value, this[k], k, this);
//     }
//     k++;
//   }
//   return value;
// }

Function.prototype.bind = function () {
  var slice = Array.prototype.slice;
  var thatFunc = this,
    thisToBind = arguments[0];
  var args = slice.call(arguments, 1);
  if (typeof thisToBind !== "function") {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      "Function.prototype.bind - " +
        "what is trying to be bound is not callable"
    );
  }
  return function () {
    var funcArgs = args.concat(slice.call(arguments));
    return thatFunc.apply(thisToBind, funcArgs);
  };
};

function myMap(fn, thisArg) {
  if (
    !(typeof fn === "function" || typeof fn === "Function") &&
    !Array.isArray(this)
  ) {
    throw new TypeError();
  }
  let len = this.length;
  let index = 0;
  let result = [];
  while (index < len) {
    if (index in this) {
      thisArg
        ? result.push(fn.call(thisArg, this[index], index, this))
        : result.push(fn(this[index], index, this));
    }
    index++;
  }
  return result;
}

function myFilter(fn, thisArg) {
  if (
    !(typeof fn === "function" || typeof fn === "Function") &&
    !Array.isArray(this)
  ) {
    throw new TypeError();
  }
  let len = this.length;
  let index = 0;
  let result = [];
  while (index < len) {
    if (index in this) {
      if (thisArg && fn.call(thisArg, this[index], index, this)) {
        result.push(this[index]);
      } else if (!thisArg && fn(this[index], index, this)) {
        result.push(this[index]);
      }
    }
    index++;
  }
  return result;
}

// function myMap(fn, thisArg) {
//   if (
//     typeof fn !== "function" &&
//     typeof fn !== "Function" &&
//     !Array.isArray(this)
//   ) {
//     return new TypeError();
//   }
//   let len = this.length;
//   let i = 0;
//   let output = [];
//   while (i < len) {
//     if (i in this) {
//       if (thisArg) {
//         output.push(fn.call(thisArg, this[i], i, this));
//       } else {
//         output.push(fn(this[i], i, this));
//       }
//     }
//     i++;
//   }
//   return output;
// }

function myBind() {
  let slice = Array.prototype.slice;
  let thisToBind = arguments[0];
  let args = slice(arguments, 1);
  let thatFunc = this;
  if (typeof thisToBind !== "function") {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      "Function.prototype.bind - " +
        "what is trying to be bound is not callable"
    );
  }
  return function () {
    let funcArgs = args.concat(arguments);
    return thatFunc.apply(thisToBind, funcArgs);
  };
}

const debounce = (func, delay) => {
  let timerId;
  return function () {
    let context = this;
    let args = arguments;
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(func.apply(context, args), delay);
  };
};

const functionToDebounce = (name) => {
  console.log(name);
};

// debounce(functionToDebounce, 5000)("vaibhav");
// // Array.prototype.filter = myFilter;
// // Array.prototype.map = myMap;
// //Array.prototype.reduce = myReduce;

// let arr = [1, 2, 3, 4, 5];
// arr[6000] = 10;
// let value = arr.reduce((acc, cur) => acc + cur);
// console.log(value);

// let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
//   accumulator,
//   currentValue
// ) {
//   return accumulator + currentValue.x;
// },
// 0);
// console.log(sum);

// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce(function (accumulator, currentValue) {
//   return accumulator.concat(currentValue);
// }, []);

// console.log(flattened);

// let people = [
//   { name: "Alice", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Jane", age: 20 },
// ];

// function groupBy(objectArray, property) {
//   return objectArray.reduce(function (acc, obj) {
//     let key = obj[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// let groupedPeople = groupBy(people, "age");
// console.log(groupedPeople);

// let friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and Juliet"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     books: ["The Lord of the Rings", "The Shining"],
//     age: 18,
//   },
// ];

// // allbooks - list which will contain all friends' books +
// // additional list contained in initialValue
// let allbooks = friends.reduce(
//   function (accumulator, currentValue) {
//     return [...accumulator, ...currentValue.books];
//   },
//   ["Alphabet"]
// );

// console.log(allbooks);
// // let filteredArr = arr.filter((i) => i % 2 !== 0);
// // let mappedArr = arr.map((i, index) => {
// //   return i * 2;
// // }, this);

// // const mymodule = {
// //   x: 42,
// //   getX: function (s) {
// //     return this.x + "" + s;
// //   },
// // };

// // const unboundGetX = mymodule.getX;
// // const boundGetX = unboundGetX.bind(mymodule, 2);

// // console.log(boundGetX(4));
// // console.log(filteredArr);
// // console.log(mappedArr);

// module.exports = () => console.log(val);
