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
}
