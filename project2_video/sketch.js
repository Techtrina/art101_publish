

let can;  // create a canvas reference
let s1,s2,s3,s4,s5,s6; 
let rectMode = false;
let particles = [];
let act4Started = false;

function setup() {
    can = createCanvas(1920, 1080);
    colorMode(RGB, 255)
    background(20);
    // fill(255);
    frameRate(10); // slow down the framerate so everything can be drawn. no hurry.
    //noLoop();
    // 30 frames   times 10
    console.log(frameCount);
    
    // waves 
    s1 = new sdSine(10, 0.0, 75, 200, color(0, 255, 255)); // Cyan
    s2 = new sdSine(10, 2.0, 200, 75, color(255,20,147)); // pink
    s3 = new sdSine(10, 4.0, 75, 200, color(127,255,0)); // Lime
    s4 = new sdSine(10, 10, 400, 300, color(255, 0, 0)); // Red
    s5 = new sdSine(10, 2.0, 75, 200, color(255,215,0));  // gold
    s6 = new sdSine(10, 2.0, 75, 200, color(138,80,255)); // purple

    // particles
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    // Semi-transparent background for that "ghosting" trail effect
    background(0, 10);

    // --- ACT LADDER ---
   if (frameCount < 130) {
        act1();
    } else if (frameCount < 205) {
        act2();
    } else if (frameCount < 340) {
        act3();
    } else if (frameCount < 440) {
        act4(); 
    } else if (frameCount < 550){
        act5();
    }

    // Call recording function
    // recordit();
}

  function manageParticles(isAct4) {
    // Default blue color for standard acts
    let standardColor = color(44, 150, 216, 150); 
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(standardColor);
        
        if (isAct4) {
            particles[i].x += particles[i].xSpeed * 2; 
            particles[i].y += particles[i].ySpeed * 2;
        }
        
        particles[i].moveParticle();
        
        let connectionDist = isAct4 ? 150 : 80; 
        particles[i].joinParticles(particles.slice(i), connectionDist, isAct4);
    }
}

function act1() {
    console.log("the first act");
    // background(200,0,0,0);
    fill(0,255,200);
    ellipse(width / 2, height / 2, 80, 80);

    push();
    translate(width / 2, height / 4);
    rotate(radians(frameCount * 2));
    // scale(0.5 + (frameCount * 0.05)); 

    s1.calcWave();
    s1.renderWave();
    s2.calcWave();
    s2.renderWave();
    s1.setAmp(75+ sin(frameCount * 0.1) * 25); // Using your class method name
    s2.setAmp(-100);
    pop();

    push();
    translate(width / 6, height / 2);
    rotate(radians(frameCount * -2));

    s1.calcWave();
    s1.renderWave();
    s5.calcWave();
    s5.renderWave();
    s1.setAmp(100+ sin(frameCount * 0.1) * 25); // Using your class method name
    s5.setAmp(200);
    pop();
}

function act2() {
    manageParticles(false);
    console.log("the second act");

    fill(127,255,0);
    ellipse(width / 2, height / 6, 80, 80);

    push();
    // Moving the whole scene horizontally
    translate(width/2, height/2);
    
    s6.calcWave();
    s6.renderWave();
    s3.calcWave();
    s3.renderWave();
    pop();

    fill(130,45,255);
    ellipse(width / 2, height / 3, 80, 80);

    push();
    translate(width/2, height/2);
    
    // Using s4 for the finale
    s4.calcWave();
    s4.setAmp(sin(frameCount * 0.1) * 200); // Pulsing amplitude
    s4.renderWave();
    pop();
}


function act3() {
    manageParticles(false);
    console.log("the third act");
    

    push();
    let xMove = map(frameCount, 190, 450, 0, width);
    translate(xMove, height / 2); 
    rotate(radians(frameCount * 0.5 ));

    s3.setAmp(sin(frameCount * 0.05) * 400);
    s3.calcWave();
    s3.renderWave();
    pop();

     push();
    translate(width/2,height/2);
    s6.calcWave();
    s6.setAmp(sin(frameCount * 0.05) * 200); // Pulsing amplitude
    s6.renderWave();

    s1.calcWave();
    s1.setAmp(sin(frameCount * 0.05) * 200); // Pulsing amplitude
    s1.renderWave();
    pop();
}

function act4() {
    console.log("the fourth act");
    push();
    colorMode(HSB, 360, 100, 255, 1);

    scale(3);
    speedx = random(1);
    speedy = random(1);
    noStroke();
    manageParticles(true);
    pop();

}

function act5() {
    console.log("the fifth act");
    
    push();
    colorMode(RGB, 255, 0, 180);

    scale(3);
    speedx = random(1);
    speedy = random(1);
    noStroke();
    manageParticles(true);
    pop();

    push();
    translate(width / 2, height / 4);
    rotate(radians(frameCount * 1));
    // scale(0.5 + (frameCount * 0.05)); 

    s3.calcWave();
    s3.renderWave();
    s6.calcWave();
    s6.renderWave();
    s3.setAmp(100+ sin(frameCount * 0.3) * 25); // Using your class method name
    s6.setAmp(-200);
    pop();

    push();
    translate(width / 4, height / 2);
    rotate(radians(frameCount * -1));

    s1.calcWave();
    s1.renderWave();
    s4.calcWave();
    s4.renderWave();
    s1.setAmp(100+ sin(frameCount * 0.3) * 25); // Using your class method name
    s4.setAmp(-200);
    pop();
}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == 'p'|| k == 'P') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}
/////////////////////////////record

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);  // 0001
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}

   
//////////////////////////////class

class sdSine {
    constructor(xs,t,a,p,c) {
        this.xspacing = xs; this.theta = t; this.amplitude = a; this.period = p; this.k = c;
        this.w = width;
        this.dx = (TWO_PI / this.period) * this.xspacing;
        this.yvalues = new Array(floor(this.w / this.xspacing));
    }
    calcWave() {
        this.theta += 0.05;
        let x = this.theta;
        for (let i = 0; i < this.yvalues.length; i++) {
            this.yvalues[i] = sin(x) * this.amplitude;
            x += this.dx;
        }
    }
    renderWave() {
        noStroke();
        fill(this.k);
        for (let x = 0; x < this.yvalues.length; x++) {
            // Draw relative to the translation point
            ellipse(x * this.xspacing - (width/2), this.yvalues[x], 12, 12);
        }
    }
    setAmp(a) { this.amplitude = a; }
}

///////////////////////////////particles

class Particle {
    constructor(isChaos = false) {
        this.x = random(0, width);
        this.y = random(0, height);
        this.r = isChaos ? random(2, 12) : random(1, 8);
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-1, 1.5);
        
        // Pick a type: 0 = Circle, 1 = Square, 2 = Triangle
        this.type = isChaos ? floor(random(3)) : 0; 
        this.isChaos = isChaos;
    }

    createParticle(col) {
        push();
        fill(col);
        noStroke();
        translate(this.x, this.y);
        
        if (this.type === 0) {
            circle(0, 0, this.r);
        } else if (this.type === 1) {
            rectMode(CENTER);
            rect(0, 0, this.r, this.r);
        } else {
            // Triangle/Glitch shape
            triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
        }
        pop();
    }

    moveParticle() {
        // Chaos particles move jittery
        if (this.isChaos) {
            this.x += this.xSpeed * 2 + random(-3, 3);
            this.y += this.ySpeed * 2 + random(-3, 3);
        } else {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        // Wrap around screen instead of bouncing for a "full canvas" feel
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    joinParticles(particlesArray, disLimit, isAct4) {
        particlesArray.forEach(element => {
            let dis = dist(this.x, this.y, element.x, element.y);
            if (dis < disLimit) {
                // In chaos mode, lines flicker in brightness
                let alpha = isAct4 ? random(50, 150) : 30;
                stroke(255, 255, 255, alpha);
                strokeWeight(isAct4 ? 2 : 1);
                line(this.x, this.y, element.x, element.y);
            }
        });
    }
}