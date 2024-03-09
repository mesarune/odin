"use strict";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const color = ["Black", "White", "Red"];
const integer = [1, 2, 3, 4, 5, 6];

function double(i) {
  return i * 2;
}

// Array.prototype.at()
function arrAt(arr, index) {
  if (index === -1) {
    return arr.pop();
  }
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      return arr.shift();
    }
    arr.shift();
  }
}

// Array.prototype.join()
function arrJoin(arr, s) {
  return arr.toString().replace(/,/g, s);
}

function arrConcat(arr1, arr2) {
  for (const element of arr2) {
    arr1.push(element);
  }
  return arr1;
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
  
console.log(arrSlice(integer, 5, 3));