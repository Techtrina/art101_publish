
let clowder = []; // A group of cats
let zoomies = ['MEOOOOW!!','ZoOOmies AcTIvaTed!', 'CAtNiPP'];
let sophisticated = [];
let catLogic = [true, false];

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // start clowder
  for (let i = 0; i < 15; i++) {
    clowder[i] = new CatFigure(random(width), random(height), random(360), random(0.2, 0.8), color(random(255), random(100, 225), random(100, 225)));
  }
}

function draw() {
  background(20); 
  
  // Stars
  stroke(255);
  point(random(width), random(height)); 
  
  for (let i = 0; i < clowder.length; i++) {
    clowder[i].display();
    clowder[i].move();
    clowder[i].panic(); 
    clowder[i].mushtxt(); 
  }
}

function mousePressed() {
  let strayCat = new CatFigure(
    mouseX, 
    mouseY, 
    random(360), 
    random(0.2, 0.8), 
    color(random(255), random(250), random(255)) 
  );
  
  clowder.push(strayCat);
}

function keyPressed() {
  // Reset all cats
  if (key == 'c' || key == 'C' || key == " ") {
    for (let i = 0; i < clowder.length; i++) {
      clowder[i].reset();
    }
  }

  if (key == 'x' || key == 'X') {
    clowder = []; // Wipe the array clean
    for (let i = 0; i < 15; i++) {
      clowder[i] = new CatFigure(
        random(width), 
        random(height), 
        random(360), 
        random(0.2, 0.8), 
        color(random(100, 225), random(100, 225), random(100, 225))
      );
    }
  }

  if (key == 'z' || key == 'Z') {
    for (let i = 0; i < clowder.length; i++) {
      clowder[i].showText = !clowder[i].showText; 
    }
  }
}

// Class 
class CatFigure {
  constructor(tx, ty, tr, ts, tc) {
    this.x = tx;
    this.y = ty;
    this.r = tr;
    this.s = ts;
    this.c = tc;
    this.mustacheOn = false;
    this.showText = false;
    
    // Movement speeds
    this.spx = random(-2, 2);
    this.spy = random(-2, 2);
    
    // Choose random dialogue from our themed arrays
    this.panicSpeech = random(zoomies);
    this.fancySpeech = random(sophisticated);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    scale(this.s);
    this.drawCatBody(this.c);
    this.drawCatFace();
    
    if (this.mustacheOn) {
      this.drawMustache(0, -5, color(50), 0, 1);
    }
    pop();
  }

  drawCatBody(c) {
    noStroke();
    fill(c);
    rect(35, 45, 50, 20, 20); // Tail
    rect(-50, 10, 100, 85, 50, 50, 25, 25); // Body
    rect(-60, -50, 120, 80, 40); // Head
    triangle(-55, -10, -65, 0, -55, 10); // Tufts
    triangle(55, -10, 65, 0, 55, 10);
    triangle(-50, -37, -55, -80, -20, -50); // Ears
    triangle(50, -37, 55, -80, 20, -50);
  }

  drawCatFace() {
    fill(255);
    circle(-25, -15, 10);
    circle(25, -15, 10);
    noFill();
    stroke(255);
    strokeWeight(3);
    arc(-8, 0, 16, 15, 0, 180);
    arc(8, 0, 16, 15, 0, 180);
  }

  move() {
    this.x += this.spx;
    this.y += this.spy;
    
    if (this.x < 0 || this.x > width) this.spx *= -1;
    if (this.y < 0 || this.y > height) this.spy *= -1;
  }

  panic() {
    if (this.showText) {
      fill(255);
      noStroke();
      textAlign(CENTER);
      text(this.panicSpeech, this.x, this.y - 60);
      this.r += 10; // Extra fast zoomie spin
    }
  }

  mushtxt() {
    if (this.mustacheOn && !this.showText) {
      fill(255);
      noStroke();
      textAlign(CENTER);
      text(this.fancySpeech, this.x, this.y - 60);
    }
  }

  reset() {
    this.c = color(random(255), random(255), random(255));
    this.showText = false;
    this.mustacheOn = false;
  }
}