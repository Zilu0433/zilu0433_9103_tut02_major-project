let grasses = [];


let selectedGrass = null;
let offsetX, offsetY;

let blackPoints = [];
let pinkPoints = [];
let darkRedPoints = [];

function setup() {
  createCanvas(0.7 * windowHeight, windowHeight);
  generateRandomPoints(windowHeight);

  //Generate two grasses using generateGrass, then combine them into one grass object using
  //combineGrasses and add it to the grasses array.
  let L_Scale = windowHeight / 700;
  let grass1 = generateGrass(12, windowHeight * 0.7 * 300 / 490, windowHeight * 220 / 700, 144, 62, 91, 45 * L_Scale, 2, 3);
  let grass2 = generateGrass(16, windowHeight * 0.7 * 298 / 490, windowHeight * 217 / 700, 226, 84, 126, 50 * L_Scale, 3, 3);
  let combinedGrass = combineGrasses(grass1, grass2);
  grasses.push(combinedGrass);
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

  for (let i = 0.5 * h; i > 0; i--) {
    let x = random(0.7 * h);
    let y = random(h);
    darkRedPoints.push({ x: x, y: y });
  }
}







function draw() {
  background(255, 200, 34);

  drawPoints(blackPoints, 0);

  drawPoints(pinkPoints, color(255, 105, 180));

  drawPoints(darkRedPoints, color(139, 0, 0));

  displayGrasses(grasses);
}



function windowResized() {
  resizeCanvas(0.7 * windowHeight, windowHeight);
  redraw();
  blackPoints = [];
  pinkPoints = [];
  darkRedPoints = [];
  generateRandomPoints(windowHeight);
}



function Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size, rotate, round) {
  this.startX = startX;
  this.startY = startY;
  this.controlX1 = controlX1;
  this.controlY1 = controlY1;
  this.controlX2 = controlX2;
  this.controlY2 = controlY2;
  this.endX = endX;
  this.endY = endY;
  this.r = r;
  this.g = g;
  this.b = b;
  this.size = size;
  this.rotate = rotate;
  this.round = round;

  this.display = function () {
    stroke(this.r, this.g, this.b);
    strokeWeight(4.5);
    noFill();
    beginShape();
    vertex(this.startX, this.startY);
    bezierVertex(this.controlX1, this.controlY1, this.controlX2, this.controlY2, this.endX, this.endY);
    endShape();
  };

  this.contains = function (mx, my) {
    let d = dist(mx, my, this.startX, this.startY);
    return d < 80;
  };

  this.update = function (dx, dy) {
    this.startX += dx;
    this.startY += dy;
    this.controlX1 += dx;
    this.controlY1 += dy;
    this.controlX2 += dx;
    this.controlY2 += dy;
    this.endX += dx;
    this.endY += dy;
  };

  this.copy = function () {
    return new Curve(this.startX, this.startY, this.controlX1, this.controlY1, this.controlX2, this.controlY2, this.endX, this.endY, this.r, this.g, this.b, this.size, this.rotate, this.round);
  };
}







function Grass(curves) {
  this.curves = curves;

  this.display = function () {
    for (let i = 0; i < this.curves.length; i++) {
      this.curves[i].display();
    }
  };

  this.contains = function (mx, my) {
    for (let i = 0; i < this.curves.length; i++) {
      if (this.curves[i].contains(mx, my)) {
        return true;
      }
    }
    return false;
  };

  this.update = function (dx, dy) {
    for (let i = 0; i < this.curves.length; i++) {
      this.curves[i].update(dx, dy);
    }
  };

  this.copy = function () {
    let newCurves = [];
    for (let i = 0; i < this.curves.length; i++) {
      newCurves.push(this.curves[i].copy());
    }
    return new Grass(newCurves);
  };
}






function generateGrass(n, startX, startY, r, g, b, size, rotate, round) {
  let angleStep = round / n;
  let curves = [];
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
  return new Grass(curves);
}

function combineGrasses(grass1, grass2) {
  let combinedCurves = grass1.curves.concat(grass2.curves);
  return new Grass(combinedCurves);
}

function drawPoints(points, fillColor) {
  fill(fillColor);
  noStroke();
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x, points[i].y, 5, 5);
  }
}

function displayGrasses(grassArray) {
  for (let i = 0; i < grassArray.length; i++) {
    grassArray[i].display();
  }
}





//The mousePressed function checks if the mouse is clicking on a grass object
//when the mouse is pressed. If so, a copy of the grass object is created and added to the grasses array,
//selectedGrass is set to the new copy, and the mouse position is recorded.
function mousePressed() {
  for (let i = 0; i < grasses.length; i++) {
    if (grasses[i].contains(mouseX, mouseY)) {
      let newGrass = grasses[i].copy(); 
      grasses.push(newGrass); 
      selectedGrass = newGrass;
      offsetX = mouseX;
      offsetY = mouseY;
      break;
    }
  }
}

//The mouseDragged function updates the position 
//of selectedGrass while the mouse is being dragged.

function mouseDragged() {
  if (selectedGrass != null) {
    let dx = mouseX - offsetX;
    let dy = mouseY - offsetY;
    selectedGrass.update(dx, dy);
    offsetX = mouseX;
    offsetY = mouseY;
  }
}


//The mouseReleased function deselects selectedGrass when the mouse is released.
function mouseReleased() {
  selectedGrass = null;
}
