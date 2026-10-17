

////////////////////////////// 1 HOME ///////////////////
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

/////////////////////// 2 LIST ////////////////////////
function list() {
    this.enter = function() {
        hideAllButtons(); 
        btnBasilisk.visible = true;
        btnCyclops.visible = true;
        btnMapinguari.visible = true;
        btnHelp.visible = true;

        if (bas_snd.isPlaying()) {
        bas_snd.stop();
    }
    }

    this.draw = function() {
        background(list_page);
        
        // help btn
        fill(203,255,172);
        rect(20, 20, 40, 40, 5);
        fill(0);
        textSize(20);
        text("?", 40, 48);

        // push();
        // textSize(40);
        // fill(13,87,45)
        // text("Click A Creature and Learn About it's origins", 500,100);
        // pop();

        // basilisk btn
        push();
            clip(() => { circle(250, 225, 150); });
            image(basilisk_pfp, 175, 150, 150, 150);
        pop();

        // cyclops btn
        push();
            clip(() => { circle(500, 225, 150); });
            image(cyclops_pfp, 425, 150, 150, 150);
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
         if (btnCyclops.isPressed) {
            this.sceneManager.showScene(cyc_creature);
        }
         if (btnMapinguari.isPressed) {
            this.sceneManager.showScene(map_creature);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 3 BASILISK CREATURE /////////////////
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
        text("-Greek mythology, 1st Century(79A.D.)",515,350);
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


////////////////////////////// 4 BASILISK ANIMAL /////////////////
function bas_animal() {
      this.enter = function() {
        hideAllButtons(); 
         btnHelp.visible = true;
         btnBack.visible = true;
         btnCobra_bit.visible = true;
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

        //bitten btn
        fill(198,160,126,170);
        rect(200, 15, 100, 30, 10);
        fill(255);
        textSize(20);
        text("Click me", 250, 38);

        // back btn 
        fill(176, 242, 173);
        rect(width - 120, height - 475, 100, 40, 10);
        fill(0);
        textSize(18);
        text("Back", width - 70, height - 450);
    }
    
      this.mousePressed = function() {
        if (btnBack.isPressed) {
            this.sceneManager.showScene(list); 
        }
        if (btnCobra_bit.isPressed) {
            this.sceneManager.showScene(bas_bit); 
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 5 BASILISK BITTEN /////////////////
function bas_bit() {
     this.enter = function() {
        hideAllButtons(); 
         btnBack_help.visible = true;
        if (!cobra_snd.isPlaying()) {
            cobra_snd.loop();
        }
    }

    this.draw = function() {
        background(cobra_bit,255);

        push();
        fill(102,137,161,100);
        noStroke();
        rect(100,200,800,115,5)
        pop();

        fill(17,46,85);
        textAlign(CENTER);
        textSize(40);
        text("You Died due to Poison", width / 2, 100);
        text("You got too close to the Cobra and it bit you", width / 2, height / 2);
       
        textSize(30);
        text("Egyptian Cobras can kill a human within 15 minutes", 500, 300);

        // back_help
        fill(56,84,121,190);
        rect(width / 2 - 50, height - 80, 100, 40, 10);
        fill(0);
        textSize(18);
        text("Start Over", width / 2, height - 55);
    }

        // Back button (Takes you Home)
        this.mousePressed = function() {
        if (btnBack_help.isPressed) {
        this.sceneManager.showScene(home); // Go back to creature selection
        }
    }
}

////////////////////////////// 6 CYCLOPS CREATURE /////////////////
function cyc_creature() {
     this.enter = function() {
        hideAllButtons(); 
        btnHelp.visible = true;
        btnNext.visible = true;
        btnCyclops_eaten.visible = true;
        if (!cyc_snd.isPlaying()) {
            cyc_snd.loop();
        }
    }


    this.draw = function() {
        background(cyclops_creature,255); // Or use an image like background(basilisk);
        fill(255)

        push();
        textSize(40);
        text("The Cyclops", 500,100);
        pop();
        
        textSize(25);
        
        text("The Odyssey",140,200);
        text("-8th to 7th century B.C.E.",500,350);
        text("-Famous for forging Zeus's thunderbolts",580,388);
        text("-Master builders and smiths",510,425);

        text("Greek depictons", 880, 300);

                    //x,y,w,h
        image(cyclops2, 10, 220, 340, 270);
        image(cyclops, 725, 20, 250, 250);
        

        // help btn
        fill(119,192,219);
        rect(20, 20, 40, 40, 5);
        fill(255);
        textSize(20);
        text("?", 40, 48);

        // eaten btn
        fill(126,198,186,100);
        rect(510, 215, 100, 30, 10);
        fill(255);
        textSize(20);
        text("Explore", 560,238);

        // next btn
        fill(119,192,219);
        rect(btnNext.x, btnNext.y, btnNext.w, btnNext.h, 10);
        fill(240);
        textSize(18);
        text("Next", width - 70, height - 35);
    }

      this.mousePressed = function() {
        if (btnNext.isPressed) {
            this.sceneManager.showScene(cyc_animal);
        }
         if (btnCyclops_eaten.isPressed) {
            this.sceneManager.showScene(cyc_eaten);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 7 CYCLOPS ANIMAL  /////////////////
let boxX = 620; 
let boxY = 135;
let boxW = 390;
let boxH = 140;

function cyc_animal() {
      this.enter = function() {
        hideAllButtons(); 
        btnHelp.visible = true;
        btnBack.visible = true;
    }

    this.draw = function() {
        background(cyclops_animal,255);

        push();
        fill(232,182,133,130);
        noStroke();
        rect(260,40,470,50,5)
        pop();
        
        push();
        textSize(40);
        fill(255)
        text("Palaeoloxodon Falconeri", 500,80);
        pop();

        push();
        textSize(30);
        fill(255)
        text("Pygmy(dwarf) Elephant", 160,150);
        pop();

        push();
        fill(232,182,133,100);
        noStroke();
        rect(10,360,480,115,5)
        pop();

        textSize(25);
        fill(255);
        text("-Extinct, 2.6 million to 200,000 years", 220,390);
        text("-Mediterranean Islands of Sicily and malta", 250,425);
        text("-1 meter(3.3ft), weighing ~100-300kg", 220,460);

        push();
        fill(232,182,133, 100); // The dark green tint you used before
        noStroke();
        rect(boxX, boxY, boxW, boxH, 5); 
        pop();

        // Draw the text INSIDE that same rectangle
        push();
        fill(255);
        textSize(25); // Smaller text fits better in boxes
        textAlign(LEFT, TOP); // Aligns text to the top-left of the box
         
        let cycFacts = "- Geographically lined up with the Odyssey's route\n" +
                    "- The hole where the trunk was, was thought to be an eye socket\n\n";
        
        text(cycFacts, boxX + 10, boxY + 10, boxW -10, boxH - 10);
        pop();

        image(pygmy_ele, 10, 170, 280, 180);
        image(pygmy_ele2, 630, 270, 360, 220);
        
        //help btn
        fill(247,199,150);
        rect(20, 20, 40, 40, 5);
        fill(0);
        textSize(20);
        text("?", 40, 48);

        // back btn 
        fill(247,199,150);
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

////////////////////////////// 8 CYCLOPS EATEN /////////////////
function cyc_eaten() {
     this.enter = function() {
        hideAllButtons(); 
        btnBack_help.visible = true;
    }

    this.draw = function() {
        background(cyclops_eaten,255);

        push();
        fill(64,92,128,150);
        noStroke();
        rect(140,200,720,115,5)
        pop();

        fill(152,14,14);
        textAlign(CENTER);
        textSize(40);
        text("You've Been Eaten", width / 2, 100);
        text("Looks like you found the Cyclops' home", width / 2, height / 2);
        
        textSize(30);
        text("Cyclopses are known to be cannibles", 500, 300);

        // back_help
        fill(149,0,0,150);
        rect(width / 2 - 50, height - 80, 100, 40, 10);
        fill(0);
        textSize(18);
        text("Start Over", width / 2, height - 55);
    }

        // Back button (Takes you Home)
        this.mousePressed = function() {
        if (btnBack_help.isPressed) {
        this.sceneManager.showScene(home); // Go back to creature selection
        }
    }
}

////////////////////////////// 9 MAPINGUARI CREATURE /////////////////
function map_creature() {
     this.enter = function() {
        hideAllButtons(); 
        btnHelp.visible = true;
        btnNext.visible = true;
        
        if (!map_snd.isPlaying()) {
            map_snd.loop();
        }
    }

    this.draw = function() {
        background(mapinguari_creature,255); // Or use an image like background(basilisk);
        fill(255)

        push();
        fill(8,71,29,130);
        noStroke();
        rect(365,80,270,50,5)
        pop();
        
        push();
        textSize(40);
        text("Mapinguari", 500,120);
        pop();
        
        textSize(25);
        push();
        fill(8,71,29,90);
        noStroke();
        rect(300,325,450,150,5)
        pop();
        
        text("-10,000 to 13,000 years ago ",470,350);
        text("-Brazilian & Bolivian, Amazon oral traditions",550,388);
        text("-Possesses 2 mouths, one on the belly",520,425);
        text("-Known to be bullet proof",445,460);

        text("Guardian of The Amazon ", 160,210);
                    //x,y,w,h
        image(mapinguari2, 20, 220, 260, 260);
        image(mapinguari, 725, 20, 250, 250);
        

        // help btn
        fill(211,243,104);
        rect(20, 20, 40, 40, 5);
        fill(10);
        textSize(20);
        text("?", 40, 48);

        // next btn
        fill(211,243,104);
        rect(btnNext.x, btnNext.y, btnNext.w, btnNext.h, 10);
        fill(10);
        textSize(18);
        text("Next", width - 70, height - 35);
    }

      this.mousePressed = function() {
        if (btnNext.isPressed) {
            this.sceneManager.showScene(map_animal);
        }
        if (btnHelp.isPressed) {
            this.sceneManager.showScene(help);
        }
    }
}

////////////////////////////// 0 MAPINGUARI ANIMAL /////////////////
function map_animal() {
      this.enter = function() {
        hideAllButtons(); 
        btnHelp.visible = true;
        btnBack.visible = true;
    }

    this.draw = function() {
        background(mapinguari_animal,255);

        push();
        fill(8,71,29,70);
        noStroke();
        rect(340,40,320,50,5)
        pop();
        
        push();
        textSize(40);
        fill(255)
        text("Megatherium", 500,80);
        pop();

        push();
        textSize(30);
        fill(255)
        text("Giant Ground Sloth", 140,157);
        pop();

        push();
        fill(8,71,29,100);
        noStroke();
        rect(10,360,410,135,5)
        pop();

        textSize(25);
        fill(255);
        text("-Extinct, 5 million to 10-8,000 years", 210,385);
        text("-from North & South America", 180,420);
        text("-20ft long, weighing around 4 tons", 205,455);
        text("-Standing up to 12ft tall", 145,490);

        push();
        fill(8,71,29,90);
        noStroke();
        rect(520,133,490,100,5)
        pop();

        text("-Lived alongside early humans", 820,160);
        text("-Remembered through folklore", 820,190);
        text("-Recognnized for its pelvis as the stomach", 760,220);

        image(megatherium, 20, 170, 290, 180);
        image(megatherium2, 640, 240, 350, 250);
        
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

////////////////////////////// h Help /////////////////
function help() {
     this.enter = function() {
        hideAllButtons(); 
        btnBack_help.visible = true;
    }

    this.draw = function() {
        background(help_page,255);

        push();
        fill(101,220,255,130);
        noStroke();
        rect(125,210,755,50,5)
        pop();

        fill(17,46,85);
        textAlign(CENTER);
        textSize(40);
        text("Need some help? :0", width / 2, 100);
        text("Select one of the creatures to learn more", width / 2, height / 2);

        // back_help
        fill(101,220,255,230);
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
