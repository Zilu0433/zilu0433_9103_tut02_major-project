let curves = []; //create the array curves to store the curve object 
let blackPoints = [];
let pinkPoints = [];
let darkRedPoints = [];

function setup() {
  //createCanvas(490,700);
  createCanvas(0.7*windowHeight, windowHeight);
  generateRandomPoints(windowHeight);
}

// use the variable h to make sure the point scale with the window
function generateRandomPoints(h) {
  // Generate fixed black points
  for (let i = 0; i < 2*h; i++) { // Adjust the number of dots as needed
    let x = random(0.7*h);
    let y = random(h);
    blackPoints.push({ x: x, y: y });
  }
  
  // Generate fixed pink points
  for (let i = 0; i < h; i++) { // Adjust the number of dots as needed
    let x = random(0.7*h);
    let y = random(h);
    pinkPoints.push({ x: x, y: y });
  }
  
  // Generate fixed dark red points
  for (let i = 0; i < 0.5*h; i++) { // Adjust the number of dots as needed
    let x = random(0.7*h);
    let y = random(h);
    darkRedPoints.push({ x: x, y: y });
  }
}

function draw() {
  background(255, 200, 34);
  // reset the curves array each time we run
  curves = [];
  //ensure that the length of the grasses scale with the window size correctly
  let L_Scale = windowHeight/700;

  //generateCurves(the number of curves,x coordinate,y coordinate,r,g,b,length of the curves,Distortion coefficient,radian);
  //use the generate function to generate curves
  // ensure that the coordinate of the grasses scale with the window size correctly
  //darker colour curves--first laywer
  generateCurves(12,windowHeight*0.7*300/490,windowHeight*220/700,144,62,91,45*L_Scale,2,3); 
  //lighter colour curves--second laywer
  generateCurves(16,windowHeight*0.7*298/490,windowHeight*217/700,226,84,126,50*L_Scale,3,3); 

  generateCurves(15,windowHeight*0.7*437/490,windowHeight*37/700,144,62,91,34*L_Scale,-17,-5); 
  generateCurves(12,windowHeight*0.7*441/490,windowHeight*37/700,226,84,126,34*L_Scale,-8,-5); 

  generateCurves(23,windowHeight*0.7*323/490,windowHeight*588/700,144,62,91,87*L_Scale,10,-5); 
  generateCurves(25,windowHeight*0.7*319/490,windowHeight*591/700,226,84,126,83*L_Scale,18,-5); 

  generateCurves(12,windowHeight*0.7*18/490,windowHeight*548/700,144,62,91,46*L_Scale,-6,-3); 
  generateCurves(13,windowHeight*0.7*19/490,windowHeight*543/700,226,84,126,50*L_Scale,-12,-3); 

  generateCurves(14,windowHeight*0.7*54/490,windowHeight*125/700,144,62,91,40*L_Scale,18,3); 
  generateCurves(13,windowHeight*0.7*56/490,windowHeight*132/700,226,84,126,43*L_Scale,19,3); 

  generateCurves(17,windowHeight*0.7*80/490,windowHeight*314/700,144,62,91,42*L_Scale,18,-5)
  generateCurves(18,windowHeight*0.7*82/490,windowHeight*320/700,226,84,126,47*L_Scale,10,-5)

  generateCurves(11,windowHeight*0.7*358/490,windowHeight*125/700,144,62,91,97*L_Scale,-12,3)
  generateCurves(14,windowHeight*0.7*357/490,windowHeight*125/700,226,84,126,106*L_Scale,-3,3)

  generateCurves(7,windowHeight*0.7*144/490,windowHeight*25/700,144,62,91,43*L_Scale,-20,4)
  generateCurves(10,windowHeight*0.7*146/490,windowHeight*20/700,226,84,126,40*L_Scale,-15,4)

  generateCurves(9,windowHeight*0.7*393/490,windowHeight*292/700,144,62,91,64*L_Scale,-4,2)
  generateCurves(10,windowHeight*0.7*389/490,windowHeight*290/700,226,84,126,65*L_Scale,2,2)

  generateCurves(15,windowHeight*0.7*214/490,windowHeight*381/700,144,62,91,50*L_Scale,-3,5)
  generateCurves(16,windowHeight*0.7*214/490,windowHeight*379/700,226,84,126,55*L_Scale,-5,5)

  generateCurves(11,windowHeight*0.7*403/490,windowHeight*236/700,144,62,91,5*L_Scale,7,-2)
  generateCurves(10,windowHeight*0.7*402/490,windowHeight*239/700,226,84,126,14*L_Scale,-1,-2)

  generateCurves(13,windowHeight*0.7*238/490,windowHeight*140/700,144,62,91,26*L_Scale,-2,-4)
  generateCurves(17,windowHeight*0.7*241/490,windowHeight*139/700,226,84,126,22*L_Scale,-11,-4)

  generateCurves(6,windowHeight*0.7*85/490,windowHeight*651/700,144,62,91,28*L_Scale,0,5)
  generateCurves(9,windowHeight*0.7*86/490,windowHeight*647/700,226,84,126,25*L_Scale,-9,5)

  generateCurves(13,windowHeight*0.7*35/490,windowHeight*207/700,144,62,91,13*L_Scale,-10,5)
  generateCurves(14,windowHeight*0.7*32/490,windowHeight*207/700,226,84,126,11*L_Scale,-12,5)

  generateCurves(8,windowHeight*0.7*195/490,windowHeight*306/700,144,62,91,10*L_Scale,13,3)
  generateCurves(10,windowHeight*0.7*195/490,windowHeight*301/700,226,84,126,14*L_Scale,6,3)


  // Draw fixed black dots
  fill(0);
  noStroke();
  for (let i = 0; i < blackPoints.length; i++) {
    ellipse(blackPoints[i].x, windowHeight*blackPoints[i].y, 5, 5); // Adjust the size of the dots as needed
  }
  
  // Draw fixed pink dots
  fill(255, 105, 180); // Pink color
  noStroke();
  for (let i = 0; i < pinkPoints.length; i++) {
    ellipse(pinkPoints[i].x, pinkPoints[i].y, 5, 5); // Adjust the size of the dots as needed
  }
  
  // Draw fixed dark red dots
  fill(139, 0, 0); // Dark red color
  noStroke();
  for (let i = 0; i < darkRedPoints.length; i++) {
    ellipse(darkRedPoints[i].x, darkRedPoints[i].y, 5, 5); // Adjust the size of the dots as needed
  }
  
  //Draw the curves
  for (let i = 0; i < curves.length; i++) {
    curves[i].display();
  }

}


function windowResized() {
  resizeCanvas(0.7*windowHeight, windowHeight);
  redraw(); // Redraw the canvas after resizing
  //reset the blackPoints, pinkPoints, darkRedPoints every time we run
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

// Function to generate curves
function generateCurves(n, start_x, start_y, color_r, color_g, color_b, s, rotate_ratio, rr) {
  let size = s; // the length of the curves
  let angleStep = rr / n; // Calculate the angle step based on the total number of curves and the radian of the circle
  // Loop to generate each curve
  for (let i = 0; i < n; i++) {
    let startX = start_x; // Set the starting X coordinate
    let startY = start_y; // Set the starting Y coordinate
    let angle1 = angleStep * i; // Calculate the first angle based on the current iteration
    let angle2 = angleStep * (i + rotate_ratio); // Calculate the second angle based on the current iteration and rotation ratio
    // Calculate the control points and end points of the Bezier curve
    let controlX1 = startX + cos(angle1) * size; 
    let controlY1 = startY + sin(angle1) * size; 
    let controlX2 = startX + cos(angle2) * size; 
    let controlY2 = startY + sin(angle2) * size; 
    let endX = startX + cos(angle2) * size * 2; 
    let endY = startY + sin(angle2) * size * 2; 
    // Assign the color values to the curve
    let r = color_r; 
    let g = color_g; 
    let b = color_b; 
    // Store the rotation Distortion coefficient and Radian value for the curve
    let rotate = rotate_ratio; 
    let round = rr; 
    // Create a new Curve object and push it to the curves array
    let curve = new Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size, rotate, round);
    curves.push(curve);
  }

}
