"use strict";

let list = {
  value: 5,
  tail: {
    value: 3,
    tail: {
      value: 7
    }
  }
}

let newList = structuredClone(list);

console.log(newList);