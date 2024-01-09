"use strict";

let name = "Ilya";

let quote = `hello ${1}`;
quote = `hello ${"name"}`;
quote = `hello ${name}`;

console.log(quote);
