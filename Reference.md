# Reference
This is a simple reference for the Potato-Graphics which will explain how to use the library and list the various functions and properties of the library.

## Import the lirary
1. Begin by copying the library into your code and referencing it in your HTML file with `<script src="potato.js"></script>`
2. In your main file, you must create an instance of the Potato class with `let potato = new Potato();`
3. That's it :)

## Basic programming
Whenever you want to use a function in Potato, you must begin it by referencing the potato variable that you initialized earlier. Begin by typing `potato.[insert function here]`

Initializing the library will create a 400px by 400px canvas where the top-left is the cordniate point (0,0) and the bottom-right is the point (400,400).
In order to render a shape, you must define a fill color by using `potato.fill([color]);`, replacing color with a HEX code for a color.

Here is a simple example which will create a white background with a black circle with a black fill:
```
let potato = new Potato();

potato.fill("white");
potato.rect(0,0,400,400);
potato.fill("black");
potato.circle(200,200,100);
```

## List of functions:

### `fill(color)`:
Sets the fill color and enables fill
### `stroke(color)`:
Sets the stroke color and enables the stroke
- color: the new stroke color. This can be a hex code, or one of the following strings:
1. "black"
2. "white"
3. "gray"
4. "silver"
5. "maroon"
6. "red"
7. "purple"
8. "fushsia"
9. "green"
10. "lime"
11. "olive"
12. "yellow"
13. "navy"
14. "blue"
15. "teal"
16. "aqua"
- Depending on the browser, you may be able to use more colors than these specified ones.
### `noFill()`:
Disables fill
### `noStroke()`:
Disables stroke
### `strokeWeight(weight)`:
Sets the stroke weight
- weight: The new stroke weight
### `rect(x,y,w,h)`:
Renders a rectangle to the screen
- x: The x cordnate to render the rectangle at
- y: The y cordinate to render the rectangle at
- w: The width of the rectangle
- h: The height of the rectangle
### `circle(x,y,r)`:
Renders a circle to the screen
- x: The x cordnate to render the circle at
- y: The y cordinate to render the circle at
- r: The radius of the circle
### `text(string,x,y)`:
Draws text to the screen
- string: string to write to the screen
- x: The x cordinate to render the text at
- y: The y cordinate to render the text at
