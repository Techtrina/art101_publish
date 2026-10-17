
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let btn_snd, bas_snd;
let gui;
let btnStart, btnHelp, btnNext, btnBack, btnBack_help;
let btnBasilisk;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.

function preload() {
   // Sound
   btn_snd = loadSound("assets/button_snd.mp3");
   bas_snd = loadSound("assets/basilisk_snd.mp3");

   //Pages background img
   home_page = loadImage("assets/home_page.png");
   list_page = loadImage("assets/list_page.png");
   help_page = loadImage("assets/help_page.png");

   //Basilisk imgs
   basilisk_pfp = loadImage("assets/basilisk_pfp.png");
   basilisk_creature = loadImage("assets/basilisk_creature.png");
   serpent = loadImage("assets/serpent.png");
   cockatrice = loadImage("assets/cockatrice.png");
   basilisk_animal = loadImage("assets/basilisk_animal.png");
   basilisk = loadImage("assets/basilisk.png");
   cobra = loadImage("assets/cobra.png");

   bunyip_pfp = loadImage("assets/bunyip_pfp.png");
   mapinguari_pfp = loadImage("assets/mapinguari_pfp.png");
}

function setup() {
    createCanvas(1000, 500);
    // textAlign(CENTER);
    // background("home_page");
    mgr = new SceneManager();  
    
    btn_snd.setVolume(0.35);

    gui = createGui();
    btnStart = createButton("Start", width / 2 - 60, height - 100, 120, 40);
    styleInvisible(btnStart); // Helper function to make it clear
    // help btn
    btnHelp = createButton("?", 20, 20, 40, 40);
    styleInvisible(btnHelp);
    // basilisk pfp btn
    btnBasilisk = createButton("", 175, 150, 150, 150);
    styleInvisible(btnBasilisk);
    // next btn
    btnNext = createButton("Next", width - 120, height - 60, 100, 40);
    styleInvisible(btnNext);
    // back btn
    btnBack = createButton("Back", width - 120, height - 475, 100, 40,);
    styleInvisible(btnBack);
    // back_help btn
    btnBack_help = createButton("Back", width/2 - 50, height - 80, 100, 40, 10);
    styleInvisible(btnBack_help);

    mgr.addScene (home);
    mgr.addScene (list);

    mgr.addScene (bas_creature);
    mgr.addScene (bas_animal);
    
    mgr.addScene (help);

    mgr.showNextScene();
    
}

function draw(){
     mgr.draw();
     drawGui();
}

function styleInvisible(btn) {
    btn.visible = false; // Hidden by default
    btn.setStyle({
        fillBg: color(0, 0),
        fillBgHover: color(0, 0),
        fillBgActive: color(0, 0),
        strokeBg: color(0, 0),
        strokeBgHover: color(0, 0),
        strokeBgActive: color(0, 0),
        fillLabel: color(0, 0), // Makes the text invisible too
        fillLabelHover: color(0, 0),
        fillLabelActive: color(0, 0)
    });
}

function mousePressed() {
    if (btnStart.isPressed || btnNext.isPressed || btnBack.isPressed || btnBack_help.isPressed|| btnHelp.isPressed) {
        btn_snd.play();
    }
    mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( home );
            break;
        case '2':
            mgr.showScene( list );
            break;
        case '3':
            mgr.showScene( bas_creature );
            break;
        case '4':
            mgr.showScene( bas_animal );
            break;
        case '5':
            mgr.showScene( help );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

function hideAllButtons() {
    if (bas_snd.isPlaying()) {
        bas_snd.stop();
    }

    btnStart.visible = false;
    btnHelp.visible = false;
    btnBasilisk.visible = false;
    btnNext.visible = false;
    btnBack.visible = false;
    btnBack_help.visible = false;

}
