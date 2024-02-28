"use strict";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const color = ["Black", "White", "Red"];
const integer = [1, 2, 3, 4, 5];

function double(i) {
  return i * 2;
}

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

function arrJoin(arr, s) {
  return arr.toString().replace(/,/g, s);
}

function arrConcat(arr1, arr2) {
  for (const element of arr2) {
    arr1.push(element);
  }
  return arr1;
}

// function arrCopyWithin(arr, toIndex, fromIndex, fromLastIndex)

function arrSlice(arr, firstIndex, lastIndex) {
  for (let i = 0; i <= arr.length - (firstIndex + lastIndex); i++){
    arr.pop();
  }
  for (let i = 0; i < firstIndex; i++) {
    arr.shift();
  }
  return arr;
}

function arrMap(arr, func) {
  let newArr = [];
  for (const element of arr) {
    newArr.push(func(element));
  }
  return newArr;
}

// function arrFilter(arr, func)
  
console.log(arrMap(integer, double));
