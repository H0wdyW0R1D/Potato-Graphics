function setup() {}
function draw() {}

var pressedKeys = {};
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }

class Potato {
    constructor() {
      // initialize the canvas
      this.canvas = document.createElement("canvas");
      this.canvas.id = "canvas";
      this.canvas.width = "400";
      this.canvas.height = "400";
      document.getElementsByTagName("body")[0].appendChild(this.canvas);
      // initialize the 2D Context object
      this.ctx = canvas.getContext("2d");
      
      // initalize some variables to be used in other functions
      this.doFill = true;
      this.doStroke = false;
      this.textSize = 10;
      this.font = "sans-serif";
      
      // set initial start time to be used in the millis() function
      this.s = (new Date()).getTime();

      // last frame time, used to calculate deltaTime
      this.lastFrame = this.s;

      this.deltaTime = 0;

      // used for frames per second
      // set to 30fps by default, but I recommend 60fps if your computer can handle it
      this.timeStep = 1000/30;

      // run setup() and draw() functions
      window.addEventListener("load", (event) => {
        setup();
      });;
      this.interval = setInterval(() => {
        this.update();
      }, this.timeStep);
    }
    
    update() {
        // get deltaTime and update lastFrame
        // call draw
        this.deltaTime = (new Date()).getTime() - this.lastFrame;
        draw();
        this.lastFrame = (new Date()).getTime();
    }

    resizeCanvas(w,h) {
        // specify a new canvas size
        this.canvas.width = "" + w;
        this.canvas.height = "" + h;
    }

    noFill() {
      // stops filling paths
      this.doFill = false;
    }
    
    noStroke() {
      // stopes using stroke on paths
      this.doStroke = false;
    }
    
    fill(color) {
      // assign a fill color
      this.ctx.fillStyle = color;
      this.doFill = true;
    }
    
    stroke(color) {
      // assign a stroke color
      this.ctx.strokeStyle = color;
      this.doStroke = true;
    }
    
    strokeWeight(w) {
      this.ctx.lineWidth = w;
    }
    
    drawPath() {
      // draws the path using fill and/or stroke
      if (this.doFill) {
        this.ctx.fill();
      }
      if (this.doStroke) {
        this.ctx.stroke();
      }
    }
    
    rect(x,y,w,h) {
      // draw a rectangle
      this.ctx.beginPath();
      this.ctx.rect(x,y,w,h);
      this.drawPath();
    }
    
    circle(x,y,r) {
      // draw a circle
      this.ctx.beginPath();
      this.ctx.arc(x,y,r,0, 2 * Math.PI);
      this.drawPath();
    }

    arc(x,y,r,start,end) {
      // draw an arc
      this.ctx.beginPath();
      this.ctx.arc(x,y,r,start, end);
      this.drawPath();
    }
    
    font(font) {
      // set the font to use
      this.ctx.font = "" + this.textSize + "px " + font;
      this.font = font;
    }
    
    fontSize(s) {
      // set the text size
      this.ctx.font = "" + s + "px " + this.font;
      this.textSize = s;
    }
    
    text(text,x,y) {
      // draw text
      this.ctx.fillText(text,x,y);
    }
    
    vector(x,y,z) {
      // a 2d or 3d vector
      return {x: x, y: y, z: z || undefined};
    }

    triangle(x1,y1,x2,y2,x3,y3) {
      // render a triangle to the screen
      this.ctx.beginPath();
      this.ctx.moveTo(x1,y1);
      this.ctx.lineTo(x2,y2);
      this.ctx.lineTo(x3,y3);
      this.drawPath();
    }
    
    shape(vertices) {
      // create a shape from an array of vertices
      this.ctx.beginPath();
      this.ctx.moveTo(vertices[0].x,vertices[0].y);
      for (let i = 1; i < vertices.length; i++) {
        this.ctx.lineTo(vertices[i].x,vertices[i].y);
      }
      this.ctx.closePath();
      this.drawPath();
    }
    
    line(x1,y1,x2,y2) {
      // draw a line
      this.ctx.beginPath();
      this.ctx.moveTo(x1,y1);
      this.ctx.lineTo(x2,y2);
      this.ctx.stroke();
    }

    genImageFromSrc(src) {
        let img = document.createElement('img');
        img.src = src;
        return img;
    }

    image(img,x,y,w,h) {
        this.ctx.drawImage(img,x,y,w,h);
    }

    millis() {
      return (new Date()).getTime() - this.s;
    }

    framesPerSecond(fps) {
      clearInterval(this.interval);
      this.timeStep = 1000/fps;
      this.interval = setInterval(() => {
        this.update();
      }, this.timeStep);
    }

    keyIsDown(keyCode) {
      let key = pressedKeys["" + keyCode];
      if (key === undefined) {
        return false;
      } else {
        return key;
      }
    }
}