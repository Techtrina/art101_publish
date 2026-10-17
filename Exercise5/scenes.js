

////////////////////////////// 1:///////////////////
function home() {
    this.enter = function() {
        // Hide everything, then show only what we need for this scene
       hideAllButtons(); 
        btnStart.visible = true;
        btnHelp.visible = true;
    }

    this.draw = function() {
        background(home_page);
        // We don't need checkButtonPress anymore because drawGui() handles it!
        textAlign(CENTER);
        textSize(50);
        fill(255);
        text("Mystical Creatures", width / 2, height / 2 - 20);
        
        // help btn
        fill(69,182,205);
        rect(20, 20, 40, 40, 5);
        fill(255);
        textSize(20);
        text("?", 40, 48);

        // start btn
        fill(0,147,158);
        rect(width / 2 - 60, height - 100, 120, 40, 10);
        fill(255);
        textSize(20);
        text("Start", width / 2, height - 75);
    }

    this.mousePressed = function() {
        if (btnStart.isPressed) {
            this.sceneManager.showScene(list);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

/////////////////////// 2 ////////////////////////
function list() {
    this.enter = function() {
        hideAllButtons(); 
        btnBasilisk.visible = true;
        btnHelp.visible = true;
    }

    this.draw = function() {
        background(list_page);
        
        // help btn
        fill(203,255,172);
        rect(20, 20, 40, 40, 5);
        fill(0);
        textSize(20);
        text("?", 40, 48);

        // basilisk btn
        push();
            clip(() => { circle(250, 225, 150); });
            image(basilisk_pfp, 175, 150, 150, 150);
        pop();

        // bunyip btn
        push();
            clip(() => { circle(500, 225, 150); });
            image(bunyip_pfp, 425, 150, 150, 150);
        pop();

        // mapinguari btn
        push();
            clip(() => { circle(750, 225, 150); });
            image(mapinguari_pfp, 675, 150, 150, 150);
        pop();

    }

    this.mousePressed = function() {
        if (btnBasilisk.isPressed) {
            this.sceneManager.showScene(bas_creature);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 3 /////////////////
function bas_creature() {
    this.enter = function() {
        hideAllButtons(); 
        btnHelp.visible = true;
        btnNext.visible = true;

        if (!bas_snd.isPlaying()) {
            bas_snd.loop();
        }
    }

    this.draw = function() {
        background(basilisk_creature,255); // Or use an image like background(basilisk);
        fill(255)

        push();
        textSize(40);
        text("The Basilisk", 500,120);
        pop();
        
        textSize(25);
        
        text("The King of Serpents",160,200);
        text("-Greek mythology, 1st Century(79AD)",515,350);
        text("-Turns its prey to stone with one look",507,388);
        text("-Can be killed by looking at its own reflection",550,425);

        text("The Cockatrice", 880, 300);

                    //x,y,w,h
        image(serpent, 30, 210, 260, 260);
        image(cockatrice, 725, 20, 250, 250);
        

        // help btn
        fill(135, 187, 255);
        rect(20, 20, 40, 40, 5);
        fill(255);
        textSize(20);
        text("?", 40, 48);

        // next btn
        fill(135, 187, 255);
        rect(btnNext.x, btnNext.y, btnNext.w, btnNext.h, 10);
        fill(240);
        textSize(18);
        text("Next", width - 70, height - 35);
    }

      this.mousePressed = function() {
        if (btnNext.isPressed) {
            this.sceneManager.showScene(bas_animal);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}


////////////////////////////// 4 /////////////////
function bas_animal() {
      this.enter = function() {
        hideAllButtons(); 
         btnHelp.visible = true;
         btnBack.visible = true;
    }

    this.draw = function() {
        background(basilisk_animal,255);
        push();
        textSize(30);
        fill(255)
        text("The Basilisk", 550,450);
        text("Egyptian Cobra", 140,150);
        pop();

        textSize(25);
        fill(255);
        text("-37 million years old", 140,390);
        text("-from North & West Africa", 170,425);
        text("-8.5ft long & highly venomous", 190,460);

        push();
        fill(8,71,29,90);
        noStroke();
        rect(580,133,400,100,5)
        pop();

        text("-48 million years old", 850,160);
        text("-from Cental South America", 808,190);
        text("-can run on water for ~3-20meters", 780,220);



        image(cobra, 20, 170, 280, 180);
        image(basilisk, 640, 250, 320, 220);
        
        //help btn
        fill(176, 242, 173);
        rect(20, 20, 40, 40, 5);
        fill(0);
        textSize(20);
        text("?", 40, 48);

        // back btn 
        fill(176, 242, 173);
        rect(width - 120, height - 475, 100, 40, 10);
        fill(0);
        textSize(18);
        text("Back", width - 70, height - 450);
    }
    
      this.mousePressed = function() {
        if (btnBack.isPressed) {
            this.sceneManager.showScene(list); // Go back to creature selection
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 5 /////////////////
function help() {
     this.enter = function() {
        hideAllButtons(); 
         btnBack_help.visible = true;
    }

    this.draw = function() {
        background(help_page,255);
        fill(17,46,85);
        textAlign(CENTER);
        textSize(30);
        text("Need some help? :0", width / 2, 100);
        text("Select one of the creatures to learn more.", width / 2, height / 2);

        // back_help
        fill(198, 239, 255);
        rect(width / 2 - 50, height - 80, 100, 40, 10);
        fill(0);
        textSize(18);
        text("Back", width / 2, height - 55);
    }

        // Back button (Takes you Home)
        this.mousePressed = function() {
        if (btnBack_help.isPressed) {
        this.sceneManager.showScene(home); // Go back to creature selection
        }
    }
}
