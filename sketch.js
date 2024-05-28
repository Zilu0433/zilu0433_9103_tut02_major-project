let curves = []; 

let number_array = [];
let x_array = [];
let y_array = [];
let length_array = [];
let rotate_array = [];
let PI_array = [];

let number_offset_array = [];
let x_offset_array = [];
let y_offset_array = [];
let length_offset_array = [];
let rotate_offset_array = [];



function setup() {
  createCanvas(windowWidth, windowHeight);

  //generateCurves(number,x,y,r,g,b,length,rotate ratio,PI);
  generateCurves(12,300,220,144,62,91,45,2,PI); 
  generateCurves(16,298,217,226,84,126,50,3,PI); 

  generateCurves(15,437,37,144,62,91,34,-17,-5); 
  generateCurves(12,441,37,226,84,126,34,-8,-5); 

  generateCurves(23,323,588,144,62,91,87,10,-5); 
  generateCurves(25,319,591,226,84,126,83,18,-5); 

  generateCurves(12,18,548,144,62,91,46,-6,-3); 
  generateCurves(13,19,543,226,84,126,50,-12,-3); 

  generateCurves(14,54,125,144,62,91,40,18,3); 
  generateCurves(13,56,132,226,84,126,43,19,3); 

  generateCurves(10,472,612,144,62,91,95,2,0)
  generateCurves(11,472,609,226,84,126,102,-7,0)

  generateCurves(17,80,314,144,62,91,42,18,-5)
  generateCurves(18,82,320,226,84,126,47,10,-5)

  generateCurves(11,358,125,144,62,91,97,-12,3)
  generateCurves(14,357,125,226,84,126,106,-3,3)

  generateCurves(7,144,25,144,62,91,43,-20,4)
  generateCurves(10,146,20,226,84,126,40,-15,4)

  generateCurves(9,393,292,144,62,91,64,-4,2)
  generateCurves(10,389,290,226,84,126,65,2,2)

  generateCurves(15,214,381,144,62,91,50,-3,5)
  generateCurves(16,214,379,226,84,126,55,-5,5)



  // for(let i = 0; i < 10; i++) {
  //   let random_number = int(random(5, 30)); 
  //   number_array.push(random_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let x_number = int(random(0, 490)); 
  //   x_array.push(x_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let y_number = int(random(0, 700)); 
  //   y_array.push(y_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let length_number = int(random(30, 150)); 
  //   length_array.push(length_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let rotate_number = int(random(-20, 20)); 
  //   rotate_array.push(rotate_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let PI_number = int(random(-2*PI, 2*PI)); 
  //   PI_array.push(PI_number); 
  // }


  // for(let i = 0; i < 10; i++) {
  //   let random_offset_number = int(random(-5, 5)); 
  //   number_offset_array.push(random_offset_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let x_offset_number = int(random(-5, 5)); 
  //   x_offset_array.push(x_offset_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let y_offset_number = int(random(-10, 10)); 
  //   y_offset_array.push(y_offset_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let length_offset_number = int(random(-10, 10)); 
  //   length_offset_array.push(length_offset_number); 
  // }
  // for(let i = 0; i < 10; i++) {
  //   let rotate_offset_number = int(random(-10, 10)); 
  //   rotate_offset_array.push(rotate_offset_number); 
  // }
  
  // for(let i = 0; i < 1; i++) {
  //   generateCurves(number_array[i] + number_offset_array[i],x_array[i] + x_offset_array[i],y_array[i] + y_offset_array[i],144,62,91,length_array[i] + length_offset_array[i],rotate_array[i] + rotate_offset_array[i],PI_array[i]); 
  //   generateCurves(number_array[i],x_array[i],y_array[i],226,84,126,length_array[i],rotate_array[i],PI_array[i]);
    
  //   print("generateCurves("+(number_array[i] + number_offset_array[i])+","+(x_array[i] + x_offset_array[i])+","+(y_array[i] + y_offset_array[i])+",144,62,91," +(length_array[i]+length_offset_array[i])+","+(rotate_array[i]+ rotate_offset_array[i])+","+ PI_array[i]+")");

  

  //   print("generateCurves("+(number_array[i])+","+(x_array[i])+","+(y_array[i])+",226,84,126," +(length_array[i])+","+(rotate_array[i])+","+ PI_array[i]+")");
    
    
  // }


}

function draw() {
  background(255,200,34);
  
 
  for (let i = 0; i < curves.length; i++) {
    curves[i].display();
  }
}

function Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size,rotate, round) {
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
  
  this.display = function() {
    stroke(this.r, this.g, this.b);
    //226,84,126
    //144,62,91
    strokeWeight(4.5); 
    noFill();
    beginShape();
    vertex(this.startX, this.startY);
    bezierVertex(this.controlX1, this.controlY1, this.controlX2, this.controlY2, this.endX, this.endY);
    endShape();
  };
}


function generateCurves(n,start_x,start_y,color_r, color_g, color_b, s, rotate_ratio, rr) {
  let size = s;
  let angleStep =  rr/ n;
  for (let i = 0; i < n; i++) {
    let startX = start_x;
    let startY = start_y;
    let angle1 = angleStep * i;
    let angle2 = angleStep * (i + rotate_ratio);
    let controlDist = size / 2;
    let controlX1 = startX + cos(angle1) * size;
    let controlY1 = startY + sin(angle1) * size;
    let controlX2 = startX + cos(angle2) * size;
    let controlY2 = startY + sin(angle2) * size;
    let endX = startX + cos(angle2) * size * 2;
    let endY = startY + sin(angle2) * size * 2;

    let r = color_r;
    let g = color_g;
    let b = color_b;
    let rotate = rotate_ratio;
    let round = rr;
    
    let curve = new Curve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, r, g, b, size, rotate, round);
    curves.push(curve);
  }
}
