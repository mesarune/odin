"use strict";

/* switch statements take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea: */

/* switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
} */

/* The keyword switch, followed by a set of parentheses.
An expression or value inside the parentheses.
The keyword case, followed by a choice that the expression/value could be, followed by a colon.
Some code to run if the choice matches the expression.
A break statement, followed by a semicolon. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.
As many other cases (bullets 3–5) as you like.
The keyword default, followed by exactly the same code pattern as one of the cases (bullets 3–5), except that default does not have a choice after it, and you don't need the break statement as there is nothing to run after this in the block anyway. This is the default option that runs if none of the choices match. */

/* Note: You don't have to include the default section — you can safely omit it if there is no chance that the expression could end up equaling an unknown value. If there is a chance of this, however, you need to include it to handle unknown cases. */

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}



console.log();