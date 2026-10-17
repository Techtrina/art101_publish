

//background
let bgOn = false; 
let bgcounter = 0;
let counter = 0;
let bg = 0;

//img
let kpro;
let plant;

//text
let tVal = 0;
let f = 0;

//controls
let plantOn = true;
let catOn = true;

function preload() {
   f = loadFont('assets/space_age.otf');
   kpro = loadImage("assets/Kproject.jpg"); 
   plant = loadImage("assets/plant.png"); 
}

function setup() {
  createCanvas(600,500);
  image(kpro, 0, 0, 600, 500);
} 

function draw() {  
//////////////////background movement
if (bgOn == true) { 
  noStroke(); 
  frameRate(8); 
  fill(0,255,240,170); 
  rect(0, counter, 400 - random(10), 10); 
  fill(100,0,100,300); 
  rect(counter, 0, 10, 350 - random(10)); 
  
  console.log("bgcounter = " + bgcounter + " counter = " + counter ); 
  
  if (counter > height) { 
  image(kpro, 0, 0, 600, 500); 
  background(bgcounter, bg); 
  bgcounter+=10; bg += 0; 
  counter = 0; 
} else { 
  counter+=20; 
  bg += 0; 
} 
}

//////////////////place plant
if (mouseIsPressed && plantOn) {
  console.log("plant is placed")
  image(plant, mouseX -50, mouseY- 50, 100, 100);
}


///////////////// random cat
if (mouseIsPressed && catOn) { 
  colorMode(RGB)
  frameRate(8);
  console.log("cat is moving");
  let randomCol = color(random(255), random(255), random(255));
  let randomX = random(width);
  let randomY = random(height);
        
  catFace(randomX, randomY, randomCol);
    
}

//////////////////text
rectMode()
noStroke();
fill(100,0,255);
textFont(f);
text("K for Key", 30, 45);

fill(100, 0,255,tVal);
// text("Press K to toggle text", 30, 80);
text("Press B for background movement", 30, 80);
text("Press P for plant", 30, 100);
text("Press C for cat", 30, 120);
text("Press X to reset", 30, 140);

fill(255);
  let modeName = "NONE (Press C or P)";
  if (catOn) modeName = "CAT";
  if (plantOn) modeName = "PLANT";
  // text("Current Mode: " + modeName, 30, 180);

if (catOn){
catFace(250,200);
}
}
//////////////////////////////////////////////////////

function keyPressed() {
console.log(key);

//////////// plant on
if (key == 'p' || key == 'P') {
    plantOn = true;
    catOn = false;
    bgOn = false;
    console.log("Mode: Plant");
    }
    
/////////// cat on
if (key == 'c' || key == 'C') {
    catOn = true;
    plantOn = false;
    bgOn = false;
    console.log("Mode: Cat");
    }

/////////// Background movement ON
 if (key == 'b' || key == 'B') {
    bgOn = true;
    plantOn = false;
    catOn = false; 
    console.log("value is " + value + " bgOn is On");
 }

////////////Off
 if ((key == 'x' || key == 'X' || key == " ")) {
    image(kpro, 0, 0, 600, 500);
    bgOn = false;
    plantOn = true;
    catOn = truef;  
  }

 //////////Key
 if (key == 'k' || key == 'K') {
    if (tVal == 0) {
      tVal = 255;
    } else {
      image(kpro, 0, 0, 600, 500);
      tVal = 0;
    }
 }
}

//////////////////////////////////////////////////////

  function catFace(lxo, lyo){
  stroke(0)
  colorMode(RGB)
  // strokeWeight(2);  
  //ears
  fill(200);
  triangle(-90 + lxo, -60 + lyo, 10 +  lxo, -18 + lyo, -60 + lxo, 60 + lyo  );
  triangle(158 + lxo, 60 + lyo, 80 +  lxo, -18 + lyo, 180 + lxo, -60 + lyo  );
  ellipse(49 + lxo,75 + lyo,220,200);
  
  //eyes
  fill(0, 150, 190);
  ellipse(10 +lxo, 50 +lyo, 55, 50);
  ellipse(85  +lxo, 50 +lyo, 55, 50);

  //pupils
  fill(0);
  ellipse(10 + lxo,50 + lyo, 33, 40);
  ellipse(85 + lxo,50 + lyo, 33, 40);

  //nose
  // x1,y1,x2,y2,x3,y3
  fill(120, 0, 80, 100);
  triangle(48+ lxo, 120 + lyo, 32 +  lxo,90 + lyo, 65 + lxo,90 + lyo );

  //mouth
  fill(0);
  ellipse(48 +lxo, 140 +lyo, 40,20);
  }

  ////////////////////////////////////////



 


