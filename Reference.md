# Reference
This is a simple reference for the Potato-Graphics which will explain how to use the library and list the various functions and properties of the library.

## Import the lirary
1. Begin by copying the library into your code and referencing it in your HTML file with `<script src="potato.js"></script>`
2. In your main js file, you must create an instance of the Potato class with `let potato = new Potato();`
3. After referencing the js file in your html, write the keyword `defer`. This will cause the file to run after the DOM tree has loaded. E.g. `<script src="sketch.js" defer></script>`
4. That's it :)

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
### `triangle(x1,y1,x2,y2,x3,y3)`:
Renders a triangle to the screen
- x1: The x cordinqte of the first point
- y1: The y cordinqte of the first point
- x2: The x cordinqte of the second point
- y2: The y cordinqte of the second point
- x3: The x cordinqte of the third point
- y3: The y cordinqte of the third point
### `text(string,x,y)`:
Draws text to the screen
- string: string to write to the screen
- x: The x cordinate to render the text at
- y: The y cordinate to render the text at
### `textSize(s)`:
Updates the text size
- s: The new text size to use (in px)
### `font(f)`:
Update the font
- f: The new font to use. Use one of the following:
### Serif fonts:
1. Times New Roman
2. Georgia
3. Garamond
### Sans-serif fonts:
5. Arial
6. Verdana
7. Helvetica
### Monospace fonts:
8. Courier New
9. Lucida Console
### Cursive fonts:
10. Monaco
11. Brush Script MT
12. Lucida Handwriting
### Fantasy fonts:
13. Copperplate
14. Papyrus
### `vector(x,y,z)`:
Returns a 2d or 3d vector.
- x: The x position of the vector
- y: The y position of the vector
- z: (optional) The z position of the vector
### `shape(vertices)`:
Renders a 2d shape to the screen
- vertices: An array of vectors specifying the vertices of the shape
### `line(x1,y1,x2,y2)`:
Renders a line to the screen
- x1: The x position of the first point
- y1: The y position of the first point
- x2: The x position of the second point
- y2: The y position of the second point
