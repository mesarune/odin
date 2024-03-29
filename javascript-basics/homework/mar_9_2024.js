"use strict";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const color = ["Black", "White", "Red"];
const integer = [1, 2, 3, 4, 5];

function double(i) {
  return i * 2;
}

function isOverThree(i) {
  if (i >= 3) {
    return true;
  } else {
    return false;
  }
}

// Array.prototype.at()
function arrAt(arr, index) {
  if (index < 0) {
    return arr[arr.length - Math.trunc(-index)];
    // Math.trunc() : 小数点以下切り捨て
  } else if (index >= 0) {
    return arr[Math.trunc(index)];
  } else {
    return arr[0];
  }
}

// Array.prototype.join()
function arrJoin(arr, s) {
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length -1) {
      newString += arr[i];
    } else {
      newString += arr[i] + s;
    }
  }
  return newString;
}

// Array.prototype.concat()
function arrConcat(arr1, arr2) {
  let newArr = [];
  for (const element of arr1) {
    newArr.push(element);
  }
  for (const element of arr2) {
    newArr.push(element);
  }
  return newArr;
}

// Array.prototype.copyWithin()
function arrCopyWithin(arr, toIndex, fromIndex, fromLastIndex) {
  let tmpArr = [];
  if (fromLastIndex == undefined) {
    fromLastIndex = arr.length - 1;
  }
  for (let i = 0; i < toIndex; i++) {
    tmpArr.push(arr[i]);
  }
  for (let i = fromIndex; i < fromLastIndex && tmpArr.length < arr.length; i++) {
    tmpArr.push(arr[i]);
  }
  while (tmpArr.length < arr.length) {
    tmpArr.push(arr[tmpArr.length]);
  }
  for (let i = 0; i < tmpArr.length; i++) {
    arr[i] = tmpArr[i];
  }
  return arr;
}

// Array.prototype.slice()
// ver.1.0
// function arrSlice(arr, firstIndex, lastIndex) {
//   let length = arr.length;
//   for (let i = 0; i < length - lastIndex; i++){
//     arr.pop();
//   }
//   for (let i = 0; i < firstIndex; i++) {
//     arr.shift();
//   }
//   return arr;
// }
// ver.1.5
function arrSlice(arr, firstIndex, lastIndex) {
  let newArr = [];
  if (lastIndex === undefined) {
    lastIndex = arr.length;
  }
  for (let i = firstIndex; i < lastIndex; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Array.prototype.map()
function arrMap(arr, func) {
  let newArr = [];
  for (const element of arr) {
    newArr.push(func(element));
  }
  return newArr;
}

// Array.prototype.filter()
function arrFilter(arr, func) {
  let newArr = [];
  for (const element of arr) {
    if (func(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}
  
console.log(arrCopyWithin(integer, 1, 2, 3));