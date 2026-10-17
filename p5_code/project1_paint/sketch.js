
lx = 500;
ly = 300;

let bgc;
let gkcount;
let waves = 50;

let d =5;

function setup() {
    createCanvas(1000, 600);
    background(255);
    smooth();

    bgc = color(255);
    gkcount = 20;
    console.log("click on B");
}

function draw() {
    if( keyIsPressed) {
      clear_print();
    }
    if(mouseIsPressed) {
     drawChoice();
    }
}

function drawChoice() {
  let currentkey = key;

switch(currentkey) {
  // r, g, b
case '1':
  console.log("1");  // midnight marker
  drawline(color(25,25,112), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '2':
  console.log("2");  // fat teal line
  drawline(color(50,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '3':
    console.log("3"); //shading brush
    shading(gkcount, mouseX, mouseY, pmouseX, pmouseY);
    if (gkcount > 30 ) {
        gkcount = 0;
    } else {
        gkcount+= 1;
    }
    break;

 case '4':
      console.log("4"); //Halftone
      halftone(color(0), mouseX, mouseY);
      break;

 case '5': //Ocean
      console.log("5");
      ocean(random(20,50), mouseX,mouseY,pmouseX,pmouseY);
    break;

case '6': //Bubbles 
    console.log("6"); 
    bubbles(random(0,255,175), mouseX, mouseY);
 break;

case '7': //Eraser
  console.log("7");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
  break;
}
}

function drawline( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function shading(kcount, lx, ly,  px, py) {
  strokeWeight(kcount);
  stroke(255,230,0); 
  line(lx, ly, px, py);
}

function halftone(dotc,lx, ly) {
  fill(dotc)
  strokeWeight(1)
  stroke(3)
  circle(lx + 10, ly + 10, d);
  circle(lx - 10, ly - 10, d);
  circle(lx + 7, ly - 10, d);
  circle(lx - 7, ly + 10, d);
  // circle(lx, oy, d);
}

function ocean(r,lx,ly,px,py) {
  strokeWeight(r);
  stroke(waves,255,230);
  line(lx,ly,px,py);

  waves += 2;
  if (waves > 255) {
    waves = 50;
  }
}

function bubbles(r, lx, ly) {
noStroke(0)
  fill(r,150,2560,75);
  ellipse(lx,ly, r, r);

  for(let i =0; i<10; i++){
    let r2=random(-20,20)
    fill(r,300,180,20);
    ellipse(lx + r2, ly + r2, r/2,r/3);
  }
}


function eraser( k, lx, ly, sz) {
  fill(k);
  strokeWeight(5);
  stroke(k);
  line(lx, ly, sz,sz);
}

function clear_print() {
//resetting and saving
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 's' || key == 'S') {
    saveFrames('image-0', 'png', 1, 1);
    key = ''; 
  }

}

