

let can;  // create a canvas reference
let s1,s2,s3,s4,s5,s6; 
let ds;
let rectMode = false;

function setup() {
    can = createCanvas(1920, 1080);
    colorMode(RGB, 255)
    background(20);
    // fill(255);
    frameRate(10); // slow down the framerate so everything can be drawn. no hurry.
    //noLoop();
    // 30 frames   times 10
    console.log(frameCount);
    

    s1 = new sdSine(10, 0.0, 75, 200, color(0, 255, 255)); // Cyan
    s2 = new sdSine(10, 2.0, 75, 200, color(255,20,147)); // pink
    s3 = new sdSine(10, 4.0, 75, 200, color(127,255,0)); // Lime
    s4 = new sdSine(8, 6.0, 200, 200, color(255, 0, 0)); // Red
    s5 = new sdSine(10, 2.0, 75, 200, color(255,215,0));  // gold
    s6 = new sdSine(10, 2.0, 75, 200, color(138,80,255)); // purple

    ds = new PenroseLSystem();
    ds.simulate(5);
}

function draw() {
    // Semi-transparent background for that "ghosting" trail effect
    background(0, 10);

    // --- ACT LADDER ---
   if (frameCount < 130) {
        act1();
    } else if (frameCount < 190) {
        act2();
    } else if (frameCount < 300) {
        act3();
    } else if (frameCount < 400) {
        act4(); 
    }
    
    // Call recording function
    // recordit();

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
    console.log("the third act");
    
    //penrose
    push();
    colorMode(HSB, 360, 100, 100, 1);
    translate(width/2, height/2);
    ds.render(); 
    pop();

    push();
    let xMove = map(frameCount, 190, 400, 0, width);
    translate(xMove, height / 2); 
    rotate(radians(frameCount * 0.5 ));

    s3.setAmp(sin(frameCount * 0.005) * 300);
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
    //  fill(0,255,200);
    // ellipse(width / 2, height / 2, 80, 80);
    
    //penrose
    // push();
    // colorMode(HSB, 360, 100, 100, 1);
    // translate(width/2, height/2);
    // ds.render(); 
    // pop();

    push();
    translate(width / 2, height / 4);
    rotate(radians(frameCount * 1));
    // scale(0.5 + (frameCount * 0.05)); 

    s3.calcWave();
    s3.renderWave();
    s6.calcWave();
    s6.renderWave();
    s3.setAmp(75+ sin(frameCount * 0.3) * 25); // Using your class method name
    s6.setAmp(100);
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

        if (k == 'p' || k == 'P') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

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


////////////////////////////penrose
function PenroseLSystem() {
    this.steps = 0;
    this.repeats = 1;
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";
    this.startLength = 900.0; 
    this.theta = TWO_PI / 10.0; 
    this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
    while (this.getAge() < gen) { this.iterate(); }
}

PenroseLSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
}

PenroseLSystem.prototype.getAge = function () { return this.generations; }

PenroseLSystem.prototype.iterate = function() {
    let newProduction = "";
    for(let i=0; i < this.production.length; ++i) {
        let step = this.production.charAt(i);
        if (step == 'W') newProduction += this.ruleW;
        else if (step == 'X') newProduction += this.ruleX;
        else if (step == 'Y') newProduction += this.ruleY;
        else if (step == 'Z') newProduction += this.ruleZ;
        else if (step != 'F') newProduction += step;
    }
    // Scaling factor: 0.5 can be small, 0.6 fills more of the 1080p height
    this.drawLength *= 0.58; 
    this.generations++;
    this.production = newProduction;
}

PenroseLSystem.prototype.render = function () {
    // translate(width / 2, height / 2);
    this.steps += 30; // Drawing speed
    if(this.steps > this.production.length) this.steps = this.production.length;

    for(let i=0; i < this.steps; ++i) {
        let step = this.production.charAt(i);
        if(step == 'F') {
            let hue = (i * 0.1 + frameCount * 1) % 360;
            stroke(hue, 80, 100); 
            strokeWeight(2);
            line(0, 0, 0, -this.drawLength);
            translate(0, -this.drawLength);
        }
        else if (step == '+') rotate(this.theta);
        else if (step == '-') rotate(-this.theta);
        else if (step == '[') push();
        else if (step == ']') pop();
    }
}
   
