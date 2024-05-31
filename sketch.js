let curves = []; //create the array curves to store the curve object 


let selectedCurve = null;
let offsetX,offsetY;

let blackPoints = [];
let pinkPoints = [];
let darkRedPoints = [];



//set canvas size
function setup() {
  createCanvas(0.7 * windowHeight, windowHeight);
  generateRandomPoints(windowHeight);
}

function generateRandomPoints(h) {
  for (let i = 0; i < 2 * h; i++) { 
    let x = random(0.7 * h);
    let y = random(h);
    blackPoints.push({ x: x, y: y });
  }
  
  for (let i = 0; i < h; i++) { 
    let x = random(0.7 * h);
    let y = random(h);
    pinkPoints.push({ x: x, y: y });
  }
  
  for (let i = 0; i < 0.5 * h; i++) { 
    let x = random(0.7 * h);
    let y = random(h);
    darkRedPoints.push({ x: x, y: y });
  }
}

function draw() {
  background(255, 200, 34);
  curves = [];

  let L_Scale = windowHeight/700;

  //grass 
  generateCurves(12, windowHeight * 0.7 * 300 / 490, windowHeight * 220 / 700, 144, 62, 91, 45 * L_Scale, 2, 3);
  generateCurves(16, windowHeight * 0.7 * 298 / 490, windowHeight * 217 / 700, 226, 84, 126, 50 * L_Scale, 3, 3);

  // Draw black dots
  fill(0);
  noStroke();
  for (let i = 0; i < blackPoints.length; i++) {
    ellipse(blackPoints[i].x, windowHeight*blackPoints[i].y, 5, 5);
  }
  
  // Draw pink dots
  fill(255, 105, 180); // Pink color
  noStroke();
  for (let i = 0; i < pinkPoints.length; i++) {
    ellipse(pinkPoints[i].x, pinkPoints[i].y, 5, 5); 
  }
  
  // Draw dark red dots
  fill(139, 0, 0); // Dark red color
  noStroke();
  for (let i = 0; i < darkRedPoints.length; i++) {
    ellipse(darkRedPoints[i].x, darkRedPoints[i].y, 5, 5); 
  }
  
  //Draw the curves
  for (let i = 0; i < curves.length; i++) {
    curves[i].display();
  }

}


function windowResized() {
  resizeCanvas(0.7 * windowHeight, windowHeight);
  redraw();
  blackPoints = [];
  pinkPoints = [];
  darkRedPoints = [];
  generateRandomPoints(windowHeight);
}


// Define the Curve object constructor
function Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size, rotate, round) {
  this.startX = startX; // Starting X coordinate of the curve
  this.startY = startY; // Starting Y coordinate of the curve
  this.controlX1 = controlX1; // The coordinates of the first X control point.
  this.controlY1 = controlY1; // The coordinates of the first Y control point.
  this.controlX2 = controlX2; // The coordinates of the second X control point.
  this.controlY2 = controlY2; // The coordinates of the second Y control point.
  this.endX = endX; // Ending X coordinate of the curve
  this.endY = endY; // Ending Y coordinate of the curve
  this.r = r; // Red 
  this.g = g; // Green 
  this.b = b; // Blue 
  this.size = size; // length of the curve
  this.rotate = rotate; // Distortion coefficient of the curve
  this.round = round; // radian 

  // Display method to draw the curve
  this.display = function() {
    stroke(this.r, this.g, this.b); 
    strokeWeight(4.5); 
    noFill(); 
    beginShape(); 
    vertex(this.startX, this.startY); 
    bezierVertex(this.controlX1, this.controlY1, this.controlX2, this.controlY2, this.endX, this.endY); // Draw the bezier curve
    endShape(); 
  };
}

function generateCurves(n, startX, startY, r, g, b, size, rotate, round) {
  let angleStep = round / n;
  for (let i = 0; i < n; i++) {
    let angle1 = angleStep * i;
    let angle2 = angleStep * (i + rotate);
    let controlX1 = startX + cos(angle1) * size;
    let controlY1 = startY + sin(angle1) * size;
    let controlX2 = startX + cos(angle2) * size;
    let controlY2 = startY + sin(angle2) * size;
    let endX = startX + cos(angle2) * size * 2;
    let endY = startY + sin(angle2) * size * 2;
    curves.push(new Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size, rotate, round));
  }
}


function displayCurves(curveArray) {
  for (let i = 0; i < curveArray.length; i++) {
    curveArray[i].display();
  }
}
