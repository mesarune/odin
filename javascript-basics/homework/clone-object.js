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

// Existing function
let newList = structuredClone(list);

// JSON
let newObj = JSON.parse(JSON.stringify(list));

// Recursive
function deepCopy(obj) {
  return Object.keys(obj).reduce((v, d) => Object.assign(v, {
    [d]: (obj[d].constructor === Object) ? deepCopy(obj[d]) : obj[d]
  }), {});
}

console.log(newObj);