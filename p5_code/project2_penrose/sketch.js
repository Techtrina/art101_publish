
///////////////////////////////prenrose
let ds;

function setup() {
  createCanvas(710, 400);
  // Using HSB makes rainbow cycling much easier! 
  // 360 = Max Hue, 100 = Max Saturation/Brightness
  colorMode(HSB, 360, 100, 100, 1);
  ds = new PenroseLSystem();
  ds.simulate(5);
}

function draw() {
  background(0);
  ds.render();
}

function PenroseLSystem() {
  this.steps = 0;
  this.repeats = 1; // Initialized this to prevent errors

  this.axiom = "[X]++[X]++[X]++[X]++[X]";
  this.ruleW = "YF++ZF-+--XF[-YF--+-WF]++";
  this.ruleX = "+YF--ZF[---WF--XF]+";
  this.ruleY = "-WF++XF[+++YF++ZF]-";
  this.ruleZ = "--YF-+++WF[+ZF++++XF]--XF";

  this.startLength = 460.0;
  this.theta = TWO_PI / 10.0; 
  this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate();
  }
}

PenroseLSystem.prototype.reset = function () {
  this.production = this.axiom;
  this.drawLength = this.startLength;
  this.generations = 0.8;
}

PenroseLSystem.prototype.getAge = function () {
  return this.generations;
}

PenroseLSystem.prototype.iterate = function() {
  let newProduction = "";
  for(let i=0; i < this.production.length; ++i) {
    let step = this.production.charAt(i);
    if (step == 'W') {
      newProduction += this.ruleW;
    } else if (step == 'X') {
      newProduction += this.ruleX;
    } else if (step == 'Y') {
      newProduction += this.ruleY;
    } else if (step == 'Z') {
      newProduction += this.ruleZ;
    } else if (step != 'F') {
      newProduction += step;
    }
  }
  this.drawLength *= 0.3;
  this.generations++;
  this.production = newProduction;
}

PenroseLSystem.prototype.render = function () {
  translate(width / 2, height / 2);

  // Speed of drawing: 20 characters per frame
  this.steps +=10;
  if(this.steps > this.production.length) {
    this.steps = this.production.length;
  }

  for(let i=0; i < this.steps; ++i) {
    let step = this.production.charAt(i);

    if(step == 'F') {
      // --- RAINBOW LOGIC ---
      // We map the current index 'i' to a hue between 0-360.
      // We add frameCount to make the colors "flow" along the lines.
      let hue = (i * 0.1 + frameCount * 0.5) % 360;
      stroke(hue, 80, 100); 
      
      for(let j=0; j < this.repeats; j++) {
        line(5, 35, 30, -this.drawLength);
        rect(20, 20, 30, -this.drawLength);
        rect(10,10,10, -this.drawLength)
        translate(-10, -this.drawLength);
      }
      this.repeats = 1;
    }
    else if (step == '+') rotate(this.theta);
    else if (step == '-') rotate(-this.theta);
    else if (step == '+') push();
    else if (step == '-') pop();
  }
}

///////////////////////////////////////////////particles



// // this class describes the properties of a single particle.
// class Particle {
// // setting the co-ordinates, radius and the
// // speed of a particle in both the co-ordinates axes.
//   constructor(){
//     this.x = random(0,width);
//     this.y = random(0,height);
//     this.r = random(1,8);
//     this.xSpeed = random(-2,2);
//     this.ySpeed = random(-1,1.5);
//   }

// // creation of a particle.
//   createParticle() {
//     noStroke();
//     fill('rgba(44, 150, 216, 0.9)');
//     circle(this.x,this.y,this.r);
//   }

// // setting the particle in motion.
//   moveParticle() {
//     if(this.x < 0 || this.x > width)
//       this.xSpeed*=-1;
//     if(this.y < 0 || this.y > height)
//       this.ySpeed*=-1;
//     this.x+=this.xSpeed;
//     this.y+=this.ySpeed;
//   }

// // this function creates the connections(lines)
// // between particles which are less than a certain distance apart
//   joinParticles(particles) {
//     particles.forEach(element =>{
//       let dis = dist(this.x,this.y,element.x,element.y);
//       if(dis<80) {
//         stroke('rgba(255,255,255,5)');
//         line(this.x,this.y,element.x,element.y);
//       }
//     });
//   }
// }

// // an array to add multiple particles
// let particles = [];

// function setup() {
//   createCanvas(720, 400);
//   for(let i = 0;i<width/6;i++){
//     particles.push(new Particle());
//   }
// }

// function draw() {
//   background('#0f0f0f');
//   for(let i = 0;i<particles.length;i++) {
//     particles[i].createParticle();
//     particles[i].moveParticle();
//     particles[i].joinParticles(particles.slice(i));
//   }
// }
