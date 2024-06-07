"use strict";

/*
Besides being a quick and handy way to store data, arrays also have a set of functions for manipulating that data in very powerful ways. Once you begin to master these functions you will start to see ways to use them all over the place! There are really only a handful of these functions, but as you’ll soon see, the possibilities of what you can do with them are near endless.
*/

/*
As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

1. Take in an array.
2. For every even number, it will triple it.
3. Then it will sum all those even numbers.

Can you try thinking of how you could implement a function like that using pseudocode?

1. We need to perform an operation only on the even numbers.
2. We need to transform those numbers by multiplying them by 3.
3. Finally, we need to add the result up from the previous transformation.

So using that logic, you may end up implementing something like this:
*/

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

/*
In the above code, there are 3 important snippets to consider:

• if (array[i] % 2 === 0): checks if a given number is even.
• array[i] * 3;: multiply this number by three.
• sum += tripleEvenNumber: add that number to the total.

Every single piece solves a crucial problem with our code. But it is possible to make the function more concise and readable by using some built-in array methods. These methods are slightly more complicated than you’ve been used to, so let’s take a moment to understand how to use them.
*/

/*
map is one such function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”.

Let’s say we had a function addOne, which takes in num as an argument and outputs that num increased by 1. And let’s say we had an array of numbers, [1, 2, 3, 4, 5] and we’d like to increment all of these numbers by 1 using our addOne function. Instead of making a for loop and iterating over the above array, we could use our map array method instead, which automatically iterates over an array for us. We don’t need to do any extra work aside from simply passing the function we want to use in:
*/

// function addOne(num) {
//   return num + 1;
// }
// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(addOne);
// console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

/*
map returns a new array and does not change the original array.
*/

// The original array has not been changed!
// console.log(arr); // Outputs [1, 2, 3, 4, 5]

/*
This is a much more elegant approach, what do you think? For simplicity, we could also define an inline function right inside of map like so:
*/

// const mappedArr = arr.map((num) => num + 1);
// console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

/*
filter is somewhat similar to map. It still iterates through the array and applies the callback function on every item. However, instead of transforming the values in the array, it returns the original values of the array, but only IF the callback function returns true. Let’s say we had a function, isOdd that returns either true if a number is odd or false if it isn’t.

The filter method expects the callback to return either true or false. If it returns true, the value is included in the output. Otherwise, it isn’t. Consider the array from our previous example, [1, 2, 3, 4, 5]. If we wanted to remove all even numbers from this array, we could use .filter() like this:
*/

// function isOdd(num) {
//   return num % 2 !== 0;
// }
// const arr = [1, 2, 3, 4, 5];
// const oddNums = arr.filter(isOdd);
// console.log(oddNums); // Outputs [1, 3, 5];
// console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected

/*
• filter will iterate through arr and pass every value into the isOdd callback function, one at a time.
• isOdd will return true when the value is odd, which means this value is included in the output.
• If it’s an even number, isOdd will return false and not include it in the final output.
*/

/*
Finally, let’s say that we wanted to multiply all of the numbers in our arr together like this: 1 * 2 * 3 * 4 * 5. First, we’d have to declare a variable total and initialize it to 1. Then, we’d iterate through the array with a for loop and multiply the total by the current number.

But we don’t actually need to do all of that, we have our reduce method that will do the job for us. Just like .map() and .filter() it expects a callback function. However, there are two key differences with this array method:

• The callback function takes two arguments instead of one. The first argument is the accumulator, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. The second argument for the callback is the current value, which is the item currently being iterated on.
• It also takes in an initialValue as a second argument (after the callback), which helps when we don’t want our initial value to be the first element in the array. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.
*/

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]

/*
In the above function, we:

• Pass in a callback function, which is (total, currentItem) => total * currentItem.
• Initialize total to 1 in the second argument.

So what .reduce() will do, is it will once again go through every element in arr and apply the callback function to it. It then changes total, without actually changing the array itself. After it’s done, it returns total.
*/

/*
Let’s do some quick practice before your assignment! Rewrite the sumOfTripledEvens(array) function using these three methods.
*/

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(arr));
