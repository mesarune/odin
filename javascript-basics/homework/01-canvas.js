"use strict"

/* The <canvas> element defines a bitmapped area in an HTML page.

The Canvas API allows JavaScript to draw graphics on the canvas.

The Canvas API can draw shapes, lines, curves, boxes, text, and images, with colors, rotations, transparencies, and other pixel manipulations. */

/* You can add a canvas element anywhere in an HTML page with the <canvas> tag: */

// <canvas id="myCanvas" width="300" height="150"></canvas>

/* You can access a <canvas> element with the HTML DOM method getElementById().

To draw in the canvas you need to create a 2D context object: */

// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

/* The HTML <canvas> element itself has no drawing abilities.

You must use JavaScript to draw any graphics.

The getContext() method returns an object with tools (methods) for drawing. */

/* After you have created a 2D context, you can draw on the canvas.

The fillRect() method draws a black rectangle with a top-left corner at position 20,20. The rectangle is 150 pixel wide and 100 pixels high. */

// ctx.fillRect(20, 20, 150, 100);

/* The fillStyle property sets the fill color of the drawing object: */

// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);

/* You can also create a new <canvas> element with the document.createElement() method, and add the element to an existing HTML page: */

// const myCanvas = document.createElement("canvas");
// document.body.appendChild(myCanvas);
// const ctx = myCanvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);

/* The common way to draw on the canvas is to:

 1.Begin a Path - beginPath()
 2.Move to a Point - moveTo()
 3.Draw in the Path - lineTo()
 4.Draw the Path - stroke()

*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();
