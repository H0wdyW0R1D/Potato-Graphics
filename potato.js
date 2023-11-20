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
  
  text(text,x,y) {
    // draw text
    this.ctx.strokeText(text,x,y);
  }
}
