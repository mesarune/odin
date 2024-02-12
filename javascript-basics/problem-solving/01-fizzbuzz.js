"use strict";

/* To gain clarity and understanding of the problem, write it down on paper, reword it in plain English until it makes sense to you, and draw diagrams if that helps. When you can explain the problem to someone else in plain English, you understand it. */

/* Now that you know what you’re aiming to solve, don’t jump into coding just yet. It’s time to plan out how you’re going to solve it first. Some of the questions you should answer at this stage of the process:

1.Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
2.What inputs will your program have? Will the user enter data or will you get input from somewhere else?
3.What’s the desired output?
4.Given your inputs, what are the steps necessary to return the desired output?

The last question is where you will write out an algorithm to solve the problem. You can think of an algorithm as a recipe for solving a particular problem. It defines the steps that need to be taken by the computer to solve a problem in pseudocode. */

/* Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down and think through the steps your program will have to go through to solve the problem.

Here’s an example of what the pseudocode for a program that prints all numbers up to an inputted number might look like: */

/*
When the user inputs a number
Initialize a counter variable and set its value to zero
While counter is smaller than user inputted number increment the counter by one
Print the value of the counter variable
*/

/* Many beginners try to solve the big problem in one go. Don’t do this. If the problem is sufficiently complex, you’ll get yourself tied in knots and make life a lot harder for yourself. Decomposing problems into smaller and easier to solve subproblems is a much better approach. Decomposition is the main way to deal with complexity, making problems easier and more approachable to solve and understand. */

/* To demonstrate this workflow in action, let’s solve a common programming exercise: Fizz Buzz */

/* 1.Understanding the problem
Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz. */

/* 2.Planning
Does your program have an interface? What will it look like? Our FizzBuzz solution will be a browser console program, so we don’t need an interface. The only user interaction will be allowing users to enter a number.

What inputs will your program have? Will the user enter data or will you get input from somewhere else? The user will enter a number from a prompt (popup box).

What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. But each number that is divisible by 3 will output Fizz, each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz. */

/* 3.Writing the pseudocode
What are the steps necessary to return the desired output? Here is an algorithm in pseudocode for this problem: */

/*
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
*/

/* 4.Dividing and conquering
As we can see from the algorithm we developed, the first subproblem we can solve is getting input from the user. So let’s start there and verify it works by printing the entered number.

With JavaScript, we’ll use the “prompt” method. */

/*
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
*/

/* The above code should create a little popup box that asks the user for a number. The input we get back will be stored in our variable answer. */

/* We wrapped the prompt call in a parseInt function so that a number is returned from the user’s input. */

/* With that done, let’s move on to the next subproblem: “Loop from 1 to the entered number”. There are many ways to do this in JavaScript. One of the common ways - that you actually see in many other languages like Java, C++, and Ruby - is with the for loop: */

/*
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  console.log(i);
}
*/

/* If you haven’t seen this before and it looks strange, it’s actually straightforward. We declare a variable i and assign it 1: the initial value of the variable i in our loop. The second clause, i <= answer is our condition. We want to loop until i is greater than answer. The third clause, i++, tells our loop to increment i by 1 every iteration. As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console. */

/* Most of the time, programmers find themselves looping from 0. Due to the needs of our program, we’re starting from 1 */

/* With that working, let’s move on to the next problem: If the current number is divisible by 3, then print Fizz. */

/*
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
*/

/* We are using the modulus operator (%) here to divide the current number by three. If you recall from a previous lesson, the modulus operator returns the remainder of a division. So if a remainder of 0 is returned from the division, it means the current number is divisible by 3.

After this change the program will now output this when you run it and the user inputs 10: */

/*
1
2
Fizz
4
5
Fizz
7
8
Fizz
10
*/

/* The program is starting to take shape. The final few subproblems should be easy to solve as the basic structure is in place and they are just different variations of the condition we’ve already got in place. Let’s tackle the next one: If the current number is divisible by 5 then print Buzz. */

/*
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

/* When you run the program now, you should see this output if the user inputs 10: */

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
*/

/* We have one more subproblem to solve to complete the program: If the current number is divisible by 3 and 5 then print FizzBuzz. */

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* We’ve had to move the conditionals around a little to get it to work. The first condition now checks if i is divisible by 3 and 5 instead of checking if i is just divisible by 3. We’ve had to do this because if we kept it the way it was, it would run the first condition if (i % 3 === 0), so that if i was divisible by 3, it would print Fizz and then move on to the next number in the iteration, even if i was divisible by 5 as well.

With the condition if (i % 3 === 0 && i % 5 === 0) coming first, we check that i is divisible by both 3 and 5 before moving on to check if it is divisible by 3 or 5 individually in the else if conditions.

The program is now complete! If you run it now you should get this output when the user inputs 20: */

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/
