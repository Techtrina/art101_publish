

let lxo = 200;
let lyo = 200;

function setup() {
  createCanvas(500,600);
  noStroke();
  background(10, 0, 180, 200);
}

function draw() {
  background(90, 0, 160, 180);
  fill(200);
  // anchor graphic

/////////////////////////////////////// lights
  //console.log(i);
  //rec(i,i,10,10);

  for (let i = 0; i < 600; i += 20) {
    for (let j = 0; j < 600; j += 20) {
      rand = random(95);
      fill(rand);
      circle( i+5, j+5, 12, 12 );
      console.log("this has a greyscale value of" + rand);
    }
  }

  

  //////////////////////////////////// face

  // x1,y1,x2,y2,x3,y3
  // x, y, w, h, L
  //head
  fill(200);
  triangle(-90 + lxo, -60 + lyo, 10 +  lxo, -18 + lyo, -60 + lxo, 60 + lyo  );
  triangle(158 + lxo, 60 + lyo, 80 +  lxo, -18 + lyo, 180 + lxo, -60 + lyo  );
  ellipse(49 + lxo,75 + lyo,220,200);
  

  
//////////////////////////////////////// movement
  let r = random(30);
  let m = mouseX;
  console.log(m + r);
  if (m < width/2)  {
    (m);
    circle(m, height/1.3, r * 4, r * 6);
  } else {
    (width -m );
    circle(m, height/1.3, r * 4, r * 6);
  }
  
  
//////////////

  ///////////////////////////////////////
  //eyes
  // r, g, b, v
  fill(0, 150, 190);
  ellipse(10 +lxo, 50 +lyo, 55, 50);
  ellipse(85  +lxo, 50 +lyo, 55, 50);

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
  
  /////////////////////////////////// 
   



  // console.log(counter);
  // counter++;

}
