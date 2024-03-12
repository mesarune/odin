"use strict";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const color = ["Black", "White", "Red"];
const integer = [1, 2, 3, 4, 5];

function double(i) {
  return i * 2;
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
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length -1) {
      result += arr[i];
    } else {
      result += arr[i] + s;
    }
  }
  return result;
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
// function arrCopyWithin(arr, toIndex, fromIndex, fromLastIndex)

// Array.prototype.slice()
function arrSlice(arr, firstIndex, lastIndex) {
  let length = arr.length;
  for (let i = 0; i < length - lastIndex; i++){
    arr.pop();
  }
  for (let i = 0; i < firstIndex; i++) {
    arr.shift();
  }
  return arr;
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
// function arrFilter(arr, func)
  
console.log(arrConcat(fruits, color));