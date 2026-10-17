
let catX = 180;
let catY = 250;
let catSpeedX = 2;
let catSpeedY = -1.5;

let bounceX = 350;
let bounceY = 400;
let bounceSpeedX = 3;
let bounceSpeedY = 2;

let counter = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(230);

  // Logic for the first cat (Wrap around screen)
  catX += catSpeedX;
  catY += catSpeedY;
  if (catX < -60) catX = width + 60;
  if (catX > width + 60) catX = -60;
  if (catY < -60) catY = height + 60;
  if (catY > height + 60) catY = -60;

  // Logic for the second cat (Bounce off walls)
  bounceX += bounceSpeedX;
  bounceY += bounceSpeedY;
  if (bounceX < 50 || bounceX > width - 50) bounceSpeedX *= -1;
  if (bounceY < 50 || bounceY > height - 50) bounceSpeedY *= -1;

  
  // Regular Cat
  cat("#ff88f9", 250, 0, 0.75);
  // Static/Wrapping Cat
  mainCat("#2a1901", catX, catY, 0, 0.75);
  
  // Bouncing and Spinning Cat
  bounceCat("#1cbfdc", bounceX, bounceY, counter, 0.75);

  counter += 2; // Increase rotation for the spinning cat
}

// PARENT FUNCTIONS 
function cat(c, lx, ly, rot, sc){
  push();
  translate(lx, 230);
  rotate(rot);
  scale(2);
  
  catBody(c);
  catFace(c);
  pop();
}

function mainCat(c, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  
  catBody(c);
  catFace(c);
  pop();
}

function bounceCat(c, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  
  catBody(c);
  catFace(c);
  pop();
}

// CHILD FUNCTIONS 
function catBody(c) {
  noStroke();
  fill(c);
  // Tail
  rect(35, 45, 50, 20, 20);
  // Body
  rect(-50, 10, 100, 85, 50, 50, 25, 25);
  // Head
  rect(-60, -50, 120, 80, 40);
  // Tufts
  triangle(-55, -10, -65, 0, -55, 10);
  triangle(55, -10, 65, 0, 55, 10);
  // Ears
  triangle(-50, -37, -55, -80, -20, -50);
  triangle(50, -37, 55, -80, 20, -50);
}

function catFace(c) {
  // Eyes
  fill(255);
  circle(-25, -15, 10);
  circle(25, -15, 10);

  // Mouth
  noFill();
  stroke(255);
  strokeWeight(3);
  strokeCap(ROUND);
  arc(-8, 0, 16, 15, 0, 180); 
  arc(8, 0, 16, 15, 0, 180);
}