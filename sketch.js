//Rocket Game


var MENU = 2;
var SETTINGS = 3;
var PLAY = 1;
var START = 4;
var END = 0;
var DYING = -1;
var gameState = MENU;
var gameStatus = 1;
var setState = 1;
var rocketCol = 1.4;
var countDown = 3;
var timerFrame = 0;
var timerSec = 0;
var timerMin = 0;
var timerHour = 0;
var timerStart = false;


var clicker;
var customFont;


var backgroundMenu, backgroundMenuImg;
var earthMenu, earthMenuImg, moonMenu, moonMenuImg;

var rocket;
var rocket_red,rocket_orange,rocket_yellow,rocket_lime,rocket_green;
var rocket_cyan, rocket_blue, rocket_purple, rocket_violet, rocket_pink;
var rocket_white, rocket_grey, rocket_black;
var flame, flameImg;
var rocketLivesImg, rocketLife1, rocketLife2, rocketLife3;
var plane, planeImg, planesLGroup, planesRGroup;
var bird, birdImg, birdsLGroup, birdsRGroup;
var helicopter, heliImg, helicoptersLGroup, helicoptersRGroup;
var balloon, balloonImg, balloonsLGroup, balloonsRGroup;
var satellite, satelliteImg, satellitesLGroup, satellitesRGroup;
var meteor, meteorImg, meteorsLGroup, meteorsRGroup;
var asteroid, asteroidsLGroup, asteroidsRGroup;
var asteroidImg1, asteroidImg2, asteroidImg3, asteroidImg4, asteroidImg5, asteroidImg6, asteroidImg7, asteroidImg8, asteroidImg9; 
var shuttle, shuttleImg, shuttlesLGroup, shuttlesRGroup;


var cloud,cloudsGroup,cloudImg1,cloudImg2,cloudImg3,cloudImg4,cloudImg5;
var star, starsGroup, starImg;
var explode, explodeImg;

var boundrybot, boundrylef, boundryrig, boundrytop;

var fuelMonitor, fuelMonitorImg, fuelArrow, fuelArrowImg, fuelCan, fuelCanImg; 
var elevationDisplay, elevationDisplayImg;


var threeText, threeTextImg, twoText, twoTextImg, oneText, oneTextImg, goText, goTextImg;
var groundDirt, groundDirtImg, grassHills, grassHillsImg, treePic, treePicImg, launchPad, launchPadImg;

var i = 1;
var gravity = true;
var Xspeed = 2;
var Yspeed = 2;

var Dscore = 0
var Fscore = 0;
var Lscore = 0;
var timePlay = 0;

var life = 3;
var score = 100;
var fuel = 270;
var gameOverImg,restartImg

var musicPlaying = true;
var soundPlaying = false;
var musicSlider, soundSlider;
var musicSliderVal, soundSliderVal;



//menu

var rocketHeader, rocketHeaderImg;
var textStart, textStartImg, textSettings, textSettingsImg, textHowtoPlay, textHowtoPlayImg;
var Settingsbutton, SettingsbuttonImg, closeButton,closeButtonImg, backButton, backButtonImg;
var statsButton, statsButtonImg, musicButton, musicButtonImg;
var howToButton, howToButtonImg, editButto0n, editButtonImg;
var onOffButton, onButtonImg, OffButtonImg;
var sideButton1,sideButton2,sideButtonImg;
var settingsBack, settingsBackImg, transGrey, transGreyImg;
var modelRocket, modelBack, modelBackImg;


//sounds
var backgroundMusic;
var lobbyMusic;
var tapSound;
var explosionSound;



//______________________________________________________
//______________________________________________________



function preload() {
  customFont = loadFont("Assets/batmfa__.ttf");

  rocket_red = loadAnimation("Images/Rocket/rocket_01.png");
  rocket_orange = loadAnimation("Images/Rocket/rocket_02.png");
  rocket_yellow = loadAnimation("Images/Rocket/rocket_03.png");
  rocket_lime = loadAnimation("Images/Rocket/rocket_04.png");
  rocket_green = loadAnimation("Images/Rocket/rocket_05.png");
  rocket_cyan = loadAnimation("Images/Rocket/rocket_06.png");
  rocket_blue = loadAnimation("Images/Rocket/rocket_07.png");
  rocket_purple = loadAnimation("Images/Rocket/rocket_08.png");
  rocket_violet = loadAnimation("Images/Rocket/rocket_09.png");
  rocket_pink = loadAnimation("Images/Rocket/rocket_10.png");
  rocket_white = loadAnimation("Images/Rocket/rocket_11.png");
  rocket_grey = loadAnimation("Images/Rocket/rocket_12.png");
  rocket_black = loadAnimation("Images/Rocket/rocket_13.png");

  rocketLivesImg = loadImage("Images/GUI/mini_rocket.png");

  birdImg = loadAnimation("Images/Obstacles/bird_1athing.png","Images/Obstacles/bird_2bstuff.png");
  heliImg = loadAnimation("Images/Obstacles/heli_1.png","Images/Obstacles/heli_2.png","Images/Obstacles/heli_3.png");
  balloonImg = loadAnimation("Images/Obstacles/balloon_03.png");
  planeImg = loadAnimation("Images/Obstacles/plane_flipnorm.png");
  satelliteImg = loadAnimation("Images/Obstacles/satellite_01.gif");
  meteorImg = loadAnimation("Images/Obstacles/meteor_frame_1a.png","Images/Obstacles/meteor_2b_frame.png","Images/Obstacles/3c_meteor_frame.png");
  shuttleImg = loadAnimation("Images/Obstacles/space_shuttle_oneA.png","Images/Obstacles/space_shuttle_twoB.png");

  asteroidImg1 = loadAnimation("Images/Obstacles/Asteroids/asteroid_oneA.png");
  asteroidImg2 = loadAnimation("Images/Obstacles/Asteroids/asteroid_twoB.png");
  asteroidImg3 = loadAnimation("Images/Obstacles/Asteroids/asteroid_threeC.png");
  asteroidImg4 = loadAnimation("Images/Obstacles/Asteroids/asteroid_fourD.png");
  asteroidImg5 = loadAnimation("Images/Obstacles/Asteroids/asteroid_fiveE.png");
  asteroidImg6 = loadAnimation("Images/Obstacles/Asteroids/asteroid_sixF.png");
  asteroidImg7 = loadAnimation("Images/Obstacles/Asteroids/asteroid_sevenG.png");
  asteroidImg8 = loadAnimation("Images/Obstacles/Asteroids/asteroid_eightH.png");
  asteroidImg9 = loadAnimation("Images/Obstacles/Asteroids/asteroid_nineI.png");

  flameImg = loadAnimation("Images/Rocket/flame_1a.png","Images/Rocket/flame_2b.png","Images/Rocket/flame_3c.png","Images/Rocket/flame_4d.png","Images/Rocket/flame_5e.png");
  explodeImg = loadAnimation("Images/Decorative/explode_1a.png","Images/Decorative/explode_2b.png","Images/Decorative/explode_3c.png");

  fuelMonitorImg = loadImage("Images/GUI/fuel_gauge.png");
  fuelArrowImg = loadImage("Images/GUI/fuel_gauge_arrow.png");
  fuelCanImg = loadImage("Images/Obstacles/gas_can.png");

  elevationDisplayImg = loadImage("Images/GUI/rocket_elevate_display.png");

  cloudImg1 = loadImage("Images/Decorative/Clouds/Cloud_01.png");
  cloudImg2 = loadImage("Images/Decorative/Clouds/Cloud_long.png");
  cloudImg3 = loadImage("Images/Decorative/Clouds/Cloud_puffy.png");
  cloudImg4 = loadImage("Images/Decorative/Clouds/Cloud_round.png");
  cloudImg5 = loadImage("Images/Decorative/Clouds/Cloud_small.png");

  earthMenuImg = loadImage("Images/Decorative/earth_01.png");
  moonMenuImg = loadImage("Images/Decorative/moon_01.png");
  backgroundMenuImg = loadAnimation("Images/Decorative/glowing_stars.gif");

  gameoverImg = loadImage("Images/GUI/textGameOver_01.png");


  threeTextImg = loadImage("Images/GUI/3.png");
  twoTextImg = loadImage("Images/GUI/2.png");
  oneTextImg = loadImage("Images/GUI/1.png");
  goTextImg = loadImage("Images/GUI/4_GO.png");

  groundDirtImg = loadImage("Images/Decorative/ground_backdrop.png");
  treePicImg = loadImage("Images/Decorative/clipart-tree.png");
  grassHillsImg = loadImage("Images/Decorative/clipart-grass-field.png");
  launchPadImg = loadImage("Images/Decorative/background_launchpad.png");




  rocketHeaderImg = loadImage("Images/GUI/rocket_headLine.png");
  textStartImg = loadImage("Images/GUI/textStart.png");
  SettingsbuttonImg = loadImage("Images/GUI/settings_button.png");
  textHowtoPlayImg = loadImage("Images/GUI/textHowtoPlay.png");

  closeButtonImg = loadImage("Images/GUI/close_button.png");
  backButtonImg = loadImage("Images/GUI/back_arrow.png");
  statsButtonImg = loadImage("Images/GUI/stats_button.png");
  musicButtonImg = loadImage("Images/GUI/music_button.png");
  howToButtonImg = loadImage("Images/GUI/textHowtoPlay.png");
  editButtonImg = loadImage("Images/GUI/edit_button.png");

  onButtonImg = loadImage("Images/GUI/on_button.png");
  offButtonImg = loadImage("Images/GUI/off_button.png");

  sideButtonImg = loadImage("Images/GUI/side_arrow.png");

  modelBackImg = loadImage("Images/GUI/model_backdrop.png");
  settingsBackImg = loadImage("Images/GUI/settings_backdrop.png");
  transGreyImg = loadImage("Images/GUI/trans_back_grey.png");

  //sounds
  backgroundMusic = loadSound("Sounds/rocket_music_01.mp3");
  lobbyMusic = loadSound("Sounds/rocket_lobby_music.mp3");
  tapSound = loadSound("Sounds/light_tap.wav");
  explosionSound = loadSound("Sounds/explosion_01.wav");

}



//______________________________________________________
//______________________________________________________



function setup() {
 createCanvas(450,600);

 

    clicker = createSprite(mouseX, mouseY, 5, 5);
    clicker.visible = false;
    clicker.debug = false;
    clicker.setCollider("circle",0,0,3);

    rocket = createSprite(190,410,50,50);
    rocket.scale = 0.03;
    rocket.addAnimation("rocket", rocket_red);
    rocket.debug = false;
    rocket.setCollider("circle",0,0,800);
    rocket.visible = false;

    rocketLife1 = createSprite(15,20);
    rocketLife1.addImage("life", rocketLivesImg);
    rocketLife1.scale = 0.06;
    rocketLife1.rotation = -90;
    rocketLife1.visible = false;

    rocketLife2 = createSprite(37,20);
    rocketLife2.addImage("life", rocketLivesImg);
    rocketLife2.scale = 0.06;
    rocketLife2.rotation = -90;
    rocketLife2.visible = false;

    rocketLife3 = createSprite(59,20);
    rocketLife3.addImage("life", rocketLivesImg);
    rocketLife3.scale = 0.06;
    rocketLife3.rotation = -90;
    rocketLife3.visible = false;

    flame = createSprite(rocket.x, rocket.y+45, 10,10);
    flame.addAnimation("fire_flaming", flameImg);
    flame.scale = 0.25;
    flame.depth = rocket.depth -1;
    flame.visible = false;
    
    explode = createSprite(200,200,10,10);
    explode.addAnimation("exploding", explodeImg);
    explode.scale = 2;
    explode.depth = rocket.depth + 2;
    explode.visible = false;

    gameover = createSprite(200,250);
    gameover.addImage("ending", gameoverImg);
    gameover.depth = explode.depth + 1;
    gameover.scale = 0.9;
    gameover.visible = false;

    fuelMonitor = createSprite(350,550);
    fuelMonitor.addImage("fueling", fuelMonitorImg);
    fuelMonitor.scale = 0.15;
    fuelMonitor.depth = rocket.depth + 1;
    fuelMonitor.visible = false;

    fuelArrow = createSprite(350,550);
    fuelArrow.addImage("fuelingarrow", fuelArrowImg);
    fuelArrow.scale = 0.1;
    fuelArrow.depth = fuelMonitor.depth + 1;
    fuelArrow.visible = false;

    elevationDisplay = createSprite(450,300);
    elevationDisplay.addImage("elevationing", elevationDisplayImg);
    elevationDisplay.scale = 0.1;
    elevationDisplay.depth = rocket.depth + 3;
    elevationDisplay.visible = false;

    rocketElevate = createSprite(428,583);
    rocketElevate.addImage("indicator", rocketLivesImg);
    rocketElevate.scale = 0.05
    rocketElevate.depth = rocket.depth + 4;
    rocketElevate.rotation = -90;
    rocketElevate.visible = false;
 
    boundrybot = createSprite(-10,700,1500,40);
    boundrybot.visible = false;
    boundrylef = createSprite(-20,-10,10,1500);
    boundrylef.visible = false;
    boundryrig = createSprite(420,-10,10,1500);
    boundryrig.visible = false;
    boundrytop = createSprite(-10,-20,1500,10);
    boundrytop.visible = false;

    cloudsGroup = createGroup();
    birdsLGroup = createGroup();
    birdsRGroup = createGroup();
    helicoptersLGroup = createGroup();
    helicoptersRGroup = createGroup();
    balloonsLGroup = createGroup();
    balloonsRGroup = createGroup();
    planesLGroup = createGroup();
    planesRGroup = createGroup();
    shuttlesLGroup = createGroup();
    shuttlesRGroup = createGroup();
    meteorsLGroup = createGroup();
    meteorsRGroup = createGroup();
    satellitesLGroup = createGroup();
    satellitesRGroup = createGroup();
    asteroidsLGroup = createGroup();
    asteroidsRGroup = createGroup();
    fuelCansGroup = createGroup();

  //menu

    backgroundMenu = createSprite(200,300);
    backgroundMenu.addAnimation("twinkle_stars", backgroundMenuImg);
    backgroundMenu.scale = 2;
    backgroundMenu.rotation = 90;
    backgroundMenu.depth = rocket.depth - 3;

    earthMenu = createSprite(200,820);
    earthMenu.addAnimation("earth", earthMenuImg);
    earthMenu.scale = 1.5;
    earthMenu.rotation = 90;
    earthMenu.depth = rocket.depth - 2;

    moonMenu = createSprite(120,100);
    moonMenu.addAnimation("moon", moonMenuImg);
    moonMenu.scale = 0.7;
    moonMenu.rotation = 0;
    moonMenu.depth = rocket.depth - 2;

    rocketHeader = createSprite(225,200);
    rocketHeader.addImage("header", rocketHeaderImg);
    rocketHeader.scale = 0.7;
    rocketHeader.depth = rocket.depth;

    textStart = createSprite(225,280);
    textStart.addImage("text_start", textStartImg);
    textStart.scale = 0.2;
    textStart.depth = rocketHeader.depth;
    textStart.setCollider("rectangle",0,-20,420,160);

    Settingsbutton = createSprite(430,20);
    Settingsbutton.addImage("settings_button", SettingsbuttonImg);
    Settingsbutton.scale = 0.2;
    Settingsbutton.depth = rocket.depth + 5;
    Settingsbutton.setCollider("circle",0,0,80);
    //Settingsbutton.debug = true;

    modelRocket = createSprite(100,240);
    modelRocket.addAnimation("modeling", rocket_red);
    modelRocket.scale = 0.08;
    modelRocket.visible = false;

    modelBack = createSprite(100,240);
    modelBack.addImage("model_back", modelBackImg);
    modelBack.depth = modelRocket.depth -1;
    //modelBack.scale = 0.45;
    modelBack.scale = 0;
    modelBack.visible = false;

    statsButton = createSprite(270,185);
    statsButton.addImage("statistics", statsButtonImg);
    statsButton.scale = 0.42;
    statsButton.visible = false;
    statsButton.setCollider("rectangle",0,-20,420,160);

    musicButton = createSprite(270,265);
    musicButton.addImage("musics", musicButtonImg);
    musicButton.scale = 0.42;
    musicButton.visible = false;
    musicButton.setCollider("rectangle",0,-20,420,160);

    howToButton = createSprite(270,345);
    howToButton.addImage("text_howtoplay", textHowtoPlayImg);
    howToButton.scale = 0.42;
    howToButton.visible = false;
    howToButton.setCollider("rectangle",0,-20,420,160);

    editButton = createSprite(90,370);
    editButton.addImage("editing_rocket", editButtonImg);
    editButton.scale = 0.3;
    editButton.visible = false;
    editButton.setCollider("rectangle",30,-35,330,80);

    closeButton = createSprite(365,85);
    closeButton.addImage("close_button", closeButtonImg);
    closeButton.scale = 0.02;
    closeButton.depth = rocket.depth + 5;
    closeButton.visible = false;

    backButton = createSprite(40,85);
    backButton.addImage("backArrow_button", backButtonImg);
    backButton.scale = 0.05;
    backButton.depth = rocket.depth + 5;
    backButton.visible = false;

    //other buttons

    onOffButton = createSprite(200,265);
    onOffButton.addImage("on_off", offButtonImg);
    onOffButton.addImage("on_off", onButtonImg);
    onOffButton.scale = 0.32;
    onOffButton.visible = false;
    onOffButton.setCollider("rectangle",0,-40,500,220);



    //change rocket col
    sideButton1 = createSprite(280,250);
    sideButton1.addImage("side_arrow", sideButtonImg);
    sideButton1.addImage("side_arrow", sideButtonImg);
    sideButton1.scale = 0.03;
    sideButton1.visible = false;
    sideButton1.setCollider("circle",0,0,300);

    sideButton2 = createSprite(120,250);
    sideButton2.addImage("side_arrow", sideButtonImg);
    sideButton2.addImage("side_arrow", sideButtonImg);
    sideButton2.scale = 0.03;
    sideButton2.mirrorX(-1);
    sideButton2.visible = false;
    sideButton2.setCollider("circle",0,0,300);

    //backdrops
    
    settingsBack = createSprite(200,250);
    settingsBack.addImage("settings_backdrop", settingsBackImg);
    settingsBack.scale = 0.5;
    settingsBack.depth = rocket.depth + 4;
    settingsBack.visible = false;

    transGrey = createSprite(200,200);
    transGrey.addImage("transparentgrey", transGreyImg);
    transGrey.scale = 2;
    transGrey.depth = rocket.depth + 3;
    transGrey.visible = false;

    //starting stuff

    threeText = createSprite(200,200);
    threeText.addImage("3", threeTextImg);
    threeText.scale = 0.01;
    threeText.depth = rocket.depth + 1;
    threeText.visible = false;

    twoText = createSprite(200,200);
    twoText.addImage("2", twoTextImg);
    twoText.scale = 0.01;
    twoText.depth = rocket.depth + 1;
    twoText.visible = false;

    oneText = createSprite(200,200);
    oneText.addImage("1", oneTextImg);
    oneText.scale = 0.01;
    oneText.depth = rocket.depth + 1;
    oneText.visible = false;

    goText = createSprite(200,200);
    goText.addImage("go", goTextImg);
    goText.scale = 0.01;
    goText.depth = rocket.depth + 1;
    goText.visible = false;

    groundDirt = createSprite(200,600);
    groundDirt.addImage("ground_dirt", groundDirtImg);
    groundDirt.scale = 0.5;
    groundDirt.depth = rocket.depth;
    groundDirt.visible = false;

    grassHills = createSprite(200,450);
    grassHills.addImage("grass_hills", grassHillsImg);
    grassHills.scale = 0.4;
    grassHills.depth = rocket.depth - 2;
    grassHills.visible = false;

    treePic = createSprite(60,420);
    treePic.addImage("tree_pic", treePicImg);
    treePic.scale = 0.15;
    treePic.depth = rocket.depth - 2;
    treePic.visible = false;

    launchPad = createSprite(260,380);
    launchPad.addImage("launchpad_img", launchPadImg);
    launchPad.scale = 0.2;
    launchPad.depth = rocket.depth - 1;
    launchPad.visible = false;


  





//other

  musicSlider = createSlider();
  musicSlider.position(-200, 200);
  musicSlider.style('200px', '100px');
  musicSlider.size(200,10);

  soundSlider = createSlider();
  soundSlider.position(-200, 200);
  soundSlider.style('200px', '100px');
  soundSlider.size(200,10);







    camera.on();
}//end of setup

function draw() {

  
textFont(customFont);


clicker.x = World.mouseX;
clicker.y = World.mouseY;

if(timerStart){
if(gameState == PLAY){
  timerFrame = timerFrame + 1;
}
      if(timerFrame == 30){
        timerFrame = 0;
        timerSec = timerSec + 1;
      }
      if(timerSec == 60){
        timerSec = 0;
        timerMin = timerMin + 1;
      }
      if(timerMin == 60){
        timerMin = 0;
        timerHour = timerHour + 1;
}
}

//_______________________________________________________






//start of Gamestates

if(gameState == MENU){
  background(0);
  if(!lobbyMusic.isPlaying()){
    lobbyMusic.play();
  }

  rocket.visible = true;
  flame.visible = true;
  rocket.scale = 0.02;
  flame.scale = 0.15;
  flame.rotation = -20;
  rocket.rotation = -20;
  rocket.x = 190;
  rocket.y = 410;
  flame.x = rocket.x + 9;
  flame.y = rocket.y + 25;

  //rocket.x = rocket.x - 1;
  //rocket.y = rocket.y - 1.3;

  if(clicker.isTouching(Settingsbutton)){
    Settingsbutton.scale = 0.21;
  } else {
    Settingsbutton.scale = 0.2;
  }

  if(clicker.isTouching(textStart)){
    textStart.scale = 0.21;
  } else {
    textStart.scale = 0.2;
  }

  if(mousePressedOver(textStart)){
    gameState = START;
    gameStatus = 2;
    lobbyMusic.stop();
  }
  if(mousePressedOver(Settingsbutton) | keyDown("p")){
    gameState = SETTINGS;
    lobbyMusic.stop();
    //pausing function
    pause();
  }

  drawSprites();




}//menu end






//_______________________________________________________








if(gameState == SETTINGS){
if(!lobbyMusic.isPlaying()){
    lobbyMusic.play();
}
backgroundMusic.stop();

//all around things
if(gameStatus == 1){
background(0);
}
if(gameStatus == 2){
background(0,200,255);
}
if(clicker.isTouching(closeButton)){
    closeButton.scale = 0.025;
} else {
    closeButton.scale = 0.02;
}
if(mousePressedOver(closeButton) | keyDown("r")){
  resume();
  if(gameStatus == 1){
    resumeMenu();
  }
  if(gameStatus == 2){
    resumePlay();
  }
}


//set states ---------------


if(setState == 1){


modelRocket.x = 100;
modelRocket.y = 240;
modelRocket.scale = 0.08;
//buttons

//stats
if(clicker.isTouching(statsButton)){
  statsButton.scale = 0.43;
} else {
  statsButton.scale = 0.42;
}
if(mousePressedOver(statsButton)){
  setState = 2;
}

//music
if(clicker.isTouching(musicButton)){
  musicButton.scale = 0.43;
} else {
  musicButton.scale = 0.42;
}
if(mousePressedOver(musicButton)){
  setState = 3;
  musicSlider.position(100,200);
  soundSlider.position(100,300);
}

//how to play
if(clicker.isTouching(howToButton)){
  howToButton.scale = 0.43;
} else {
  howToButton.scale = 0.42;
}
if(mousePressedOver(howToButton)){
  setState = 4;
}

//edit
if(clicker.isTouching(editButton)){
  editButton.scale = 0.31;
} else {
  editButton.scale = 0.3;
}
if(mousePressedOver(editButton)){
  setState = 5;
}


}// end of setstate 1

//stats
if(setState == 2){
  statsButton.visible = false;
  modelRocket.visible = false;
  musicButton.visible = false;
  howToButton.visible = false;
  editButton.visible = false;
  modelBack.visible = false;
}

//music
if(setState == 3){
  statsButton.visible = false;
  modelRocket.visible = false;
  musicButton.visible = false;
  howToButton.visible = false;
  editButton.visible = false;
  modelBack.visible = false;
  onOffButton.visible = false;


}else{
  musicSlider.position(-200, 300);
  soundSlider.position(-200, 300);
}

//how to play
if(setState == 4){
  statsButton.visible = false;
  modelRocket.visible = false;
  musicButton.visible = false;
  howToButton.visible = false;
  editButton.visible = false;
  modelBack.visible = false;
}

//edit
if(setState == 5){
  statsButton.visible = false;
  musicButton.visible = false;
  howToButton.visible = false;
  editButton.visible = false;
  modelBack.visible = false;

  modelRocket.x = 200;
  modelRocket.y = 240;
  sideButton1.visible = true;
  sideButton2.visible = true;


  //arrow click system
  if(clicker.isTouching(sideButton1)){
    sideButton1.scale = 0.035;
  } else {
    sideButton1.scale = 0.03;
  }
  if(clicker.isTouching(sideButton2)){
    sideButton2.scale = 0.035;
  } else {
    sideButton2.scale = 0.03;
  }

  if(mousePressedOver(sideButton2)){
    if(rocketCol > 1){
    rocketCol = rocketCol - 0.2;
    } else {
      rocketCol = 14;
    }
  }
  if(mousePressedOver(sideButton1)){
    if(rocketCol < 14){
      rocketCol = rocketCol + 0.2;
      } else {
        rocketCol = 1.2;
    }
  }

  //change colors
  if(rocketCol > 1 && rocketCol < 2){
    rocket.addAnimation("rocket", rocket_red);
    rocket.changeAnimation("rocket", rocket_red);
    modelRocket.addAnimation("modeling", rocket_red);
    modelRocket.changeAnimation("modeling", rocket_red);
  }
  if(rocketCol > 2 && rocketCol < 3){
    rocket.addAnimation("rocket", rocket_orange);
    rocket.changeAnimation("rocket", rocket_orange);
    modelRocket.addAnimation("modeling", rocket_orange);
    modelRocket.changeAnimation("modeling", rocket_orange);
  }
  if(rocketCol > 3 && rocketCol < 4){
    rocket.addAnimation("rocket", rocket_yellow);
    rocket.changeAnimation("rocket", rocket_yellow);
    modelRocket.addAnimation("modeling", rocket_yellow);
    modelRocket.changeAnimation("modeling", rocket_yellow);
  }
  if(rocketCol > 4 && rocketCol < 5){
    rocket.addAnimation("rocket", rocket_lime);
    rocket.changeAnimation("rocket", rocket_lime);
    modelRocket.addAnimation("modeling", rocket_lime);
    modelRocket.changeAnimation("modeling", rocket_lime);
  }
  if(rocketCol > 5 && rocketCol < 6){
    rocket.addAnimation("rocket", rocket_green);
    rocket.changeAnimation("rocket", rocket_green);
    modelRocket.addAnimation("modeling", rocket_green);
    modelRocket.changeAnimation("modeling", rocket_green);
  }
  if(rocketCol > 6 && rocketCol < 7){
    rocket.addAnimation("rocket", rocket_cyan);
    rocket.changeAnimation("rocket", rocket_cyan);
    modelRocket.addAnimation("modeling", rocket_cyan);
    modelRocket.changeAnimation("modeling", rocket_cyan);
  }
  if(rocketCol > 7 && rocketCol < 8){
    rocket.addAnimation("rocket", rocket_blue);
    rocket.changeAnimation("rocket", rocket_blue);
    modelRocket.addAnimation("modeling", rocket_blue);
    modelRocket.changeAnimation("modeling", rocket_blue);
  }
  if(rocketCol > 8 && rocketCol < 9){
    rocket.addAnimation("rocket", rocket_purple);
    rocket.changeAnimation("rocket", rocket_purple);
    modelRocket.addAnimation("modeling", rocket_purple);
    modelRocket.changeAnimation("modeling", rocket_purple);
  }
  if(rocketCol > 9 && rocketCol < 10){
    rocket.addAnimation("rocket", rocket_violet);
    rocket.changeAnimation("rocket", rocket_violet);
    modelRocket.addAnimation("modeling", rocket_violet);
    modelRocket.changeAnimation("modeling", rocket_violet);
  }
  if(rocketCol > 10 && rocketCol < 11){
    rocket.addAnimation("rocket", rocket_pink);
    rocket.changeAnimation("rocket", rocket_pink);
    modelRocket.addAnimation("modeling", rocket_pink);
    modelRocket.changeAnimation("modeling", rocket_pink);
  }
  if(rocketCol > 11 && rocketCol < 12){
    rocket.addAnimation("rocket", rocket_white);
    rocket.changeAnimation("rocket", rocket_white);
    modelRocket.addAnimation("modeling", rocket_white);
    modelRocket.changeAnimation("modeling", rocket_white);
  }
  if(rocketCol > 12 && rocketCol < 13){
    rocket.addAnimation("rocket", rocket_grey);
    rocket.changeAnimation("rocket", rocket_grey);
    modelRocket.addAnimation("modeling", rocket_grey);
    modelRocket.changeAnimation("modeling", rocket_grey);
  }
  if(rocketCol > 13 && rocketCol < 14){
    rocket.addAnimation("rocket", rocket_black);
    rocket.changeAnimation("rocket", rocket_black);
    modelRocket.addAnimation("modeling", rocket_black);
    modelRocket.changeAnimation("modeling", rocket_black);
  }

  
}

//other

if(setState > 1){
  backButton.visible = true;
  if(clicker.isTouching(backButton)){
    backButton.scale = 0.058;
  } else {
    backButton.scale = 0.05;
  }
  if(mousePressedOver(backButton)){
    setState = 1;
    backButton.visible = false;
  modelRocket.visible = true;
  statsButton.visible = true;
  musicButton.visible = true;
  howToButton.visible = true;
  editButton.visible = true;
  modelBack.visible = true;
  sideButton1.visible = false;
  sideButton2.visible = false;
  onOffButton.visible = false;
  
  }

}

drawSprites();

if(setState == 2){
textAlign(LEFT,CENTER);
fill(0);
textSize(60);
text("Stats", 80,140);
textSize(20);
text("Fuel Powerups: "+Fscore,40,200);
text("Live Powerups: "+Lscore,40,225);
textSize(30);
text("Deaths: "+Dscore,40,257);
text("Elevation: "+score,40,295);
textSize(40);
text("Time Played: ",40,340);
textAlign(CENTER,CENTER);
text(timerHour + ":"+timerMin + ":" + timerSec, 200,390);

}
if(setState == 3){
  musicSliderVal = musicSlider.value();
  soundSliderVal = soundSlider.value();

  fill("red");
  text(musicSliderVal,150,200);
  fill("green");
  text(soundSliderVal,200,200);

  backgroundMusic.setVolume(musicSliderVal*0.01);

}

if(gameStatus == 2){
textSize(12);
if(fuel > 170){
  fill(0,255,0);
}
if(fuel >= 100 && fuel <= 170){
  fill("yellow");
}
if(fuel < 100){
  fill("red");
}
textAlign(CENTER,CENTER);
text(Math.round((fuel/270)*100)+"%",355,580);
}


}//settings end






//_______________________________________________________



if(gameState == START){
  background(0,220,255);
  gameSetup();
  groundDirt.visible = true;
  grassHills.visible = true;
  treePic.visible = true;
  launchPad.visible = true;

  
//countdown
//setTimeout(() => {


//3
  if(countDown == 3){
  setTimeout(() => {
  threeText.visible = true;
  threeText.scale = threeText.scale + 0.02;
  countDown = 2;
  }, 1000);
}
//2
  if(countDown == 2){
setTimeout(() => {
  threeText.visible = false;
  twoText.visible = true;
  twoText.scale = twoText.scale + 0.02;
  countDown = 1;
  }, 1000);
}
//1
  if(countDown == 1){
setTimeout(() => {
  twoText.visible = false;
  oneText.visible = true;
  oneText.scale = oneText.scale + 0.02;
  countDown = 0;
}, 1000);
}
//go
if(countDown == 0){
setTimeout(() => {
  oneText.visible = false;
  goText.visible = true;
  goText.scale = goText.scale + 0.01;
  countDown = -1;
}, 1000);
}
if(countDown == -1){
setTimeout(() => {
  goText.visible = false;
  countDown = -2;
  //gameState = PLAY;
}, 2000);
}
if(countDown == -2){
  if(keyDown("Space")){
    rocketControl();
    gameState = PLAY;
    groundDirt.velocityY = 2;
    grassHills.velocityY = 2;
    treePic.velocityY = 2;
    launchPad.velocityY = 2;
    fuelMonitor.visible = true;
    fuelArrow.visible = true;
    rocketLife1.visible = true;
    rocketLife2.visible = true;
    rocketLife3.visible = true;
    gravity = true;
  }


}

//}, 2000);


  /*
  setTimeout(() => {
    gameState = PLAY;
  }, 2000);
  */
  drawSprites();
}



//________________________________________________________________




if(gameState == PLAY){
  background(0,220,255);
  timerStart = true;
  if(!backgroundMusic.isPlaying()&&musicPlaying){
  backgroundMusic.play();
  }
  if(lobbyMusic.isPlaying()){
    lobbyMusic.stop();
  }

  //rocket setup function
  //gameSetup();

//button stuff
  if(clicker.isTouching(Settingsbutton)){
    Settingsbutton.scale = 0.21;
  } else {
    Settingsbutton.scale = 0.2;
  }

  if(mousePressedOver(Settingsbutton) | keyDown("p")){
    gameState = SETTINGS;
    
    //pausing function
    pause();
    pausePlay();
  }


//end of button stuff

  //camera.x = rocket.x;
  //camera.y = rocket.y;

  /*
  if(keyDown("z")){
    camera.zoom = camera.zoom + 0.01;
  } else {
    if(camera.zoom > 1){
      camera.zoom = camera.zoom - 0.08;
    }
  }
  */
  
    //Declaring Functions

    spawnClouds();   
    spawnBirds();
    spawnHelicopter();
    spawnBalloons();
    spawnPlanes();
    spawnShuttles();
    spawnMeteors();
    spawnSatellites();
    spawnFuelCan();
    

    livesFunction();


    if(keyDown("f")){
        fuel = fuel + 1;
    }

  

  if(gravity == true){
  rocket.velocityY = rocket.velocityY + 0.6;
  }

  if(rocket.velocityY >= 0){
      score = score - 1;
  }
  if(rocket.velocityY <= 0){
      score = score + 2;
  }
  if(rocket.velocityY == 0){
      score = score + 1;
  }

//ending code

  if(birdsLGroup.isTouching(rocket) | birdsRGroup.isTouching(rocket) |
   helicoptersLGroup.isTouching(rocket) | helicoptersRGroup.isTouching(rocket) |
   balloonsLGroup.isTouching(rocket) | balloonsRGroup.isTouching(rocket) |
   planesLGroup.isTouching(rocket) | planesRGroup.isTouching(rocket) |
   rocket.y > 650){
  
    if(life <= 0){
      gameState = END;
  }
  if(life >= 1){
    gameState = DYING;
  }


}//end of ending

//Powerups
if(fuelCansGroup.isTouching(rocket)){
    fuelCansGroup.destroyEach();
    fuel = fuel + 90;
    if(fuel > 270){
      fuel = 270;
    }
}




//Fuel Arrow Stuff

fuelArrow.rotation = fuel - 135;


rocketControl();

    drawSprites();

    if(keyDown("i") && i == 1){
      gravity = false;
      rocket.velocityY = 0;
      rocket.debug = true;
      fill(200,0,0);
      textSize(20);
      fill(0);
      text("Elevation: "+score+" ft",10,585);
      text("Fuel: "+fuel, 10,565);
      text("Lives: "+life,10,545);
      textSize(20);
      fill(0,255,0);
      text("X: "+mouseX,10,505);
      fill(200,0,0);
      text("Y: "+mouseY,10,525);
    } else {
      gravity = true;
      rocket.debug = false;
    }

    fill(0);
    textSize(20);
    //text("Elevation: "+score+" ft",10,580);
    textSize(12);
    if(fuel > 170){
      fill(0,255,0);
    }
    if(fuel >= 100 && fuel <= 170){
      fill("yellow");
    }
    if(fuel < 100){
      fill("red");
    }
    textAlign(CENTER,CENTER);
    text(Math.round((fuel/270)*100)+"%",355,580);
   // text("Fuel: "+fuel,10,540);
  //text("life:"+life,10,60);




}//end of play






//_______________________________________________________







if(gameState == DYING){
  dieFunction();
  if(frameCount % 30 === 0){
    reset();
  }
  
  drawSprites();




}//end of losing life





//_______________________________________________________






if(gameState == END){
  background(0,200,255)

  explode.x = rocket.x;
  explode.y = rocket.y;
  explode.visible = true;

  gameover.visible = true;



  rocket.velocityY = 0;
  cloudsGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityXEach(0);
  birdsRGroup.setVelocityYEach(0);
  birdsRGroup.setVelocityXEach(0);
  helicoptersLGroup.setVelocityYEach(0);
  helicoptersLGroup.setVelocityXEach(0);
  helicoptersRGroup.setVelocityYEach(0);
  helicoptersRGroup.setVelocityXEach(0);
  balloonsRGroup.setVelocityYEach(0);
  balloonsRGroup.setVelocityXEach(0);
  balloonsLGroup.setVelocityYEach(0);
  balloonsLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityYEach(0);
  planesRGroup.setVelocityXEach(0);
  planesRGroup.setVelocityYEach(0);
  fuelCansGroup.setVelocityYEach(0);

  cloudsGroup.setLifetimeEach(-1);
  birdsLGroup.setLifetimeEach(-1);
  birdsRGroup.setLifetimeEach(-1);
  helicoptersLGroup.setLifetimeEach(-1);
  helicoptersRGroup.setLifetimeEach(-1);
  balloonsLGroup.setLifetimeEach(-1);
  balloonsRGroup.setLifetimeEach(-1);
  planesLGroup.setLifetimeEach(-1);
  planesRGroup.setLifetimeEach(-1);
  fuelCansGroup.setLifetimeEach(-1);


  if(keyDown("space")){
    restart();
  }

  drawSprites();
  fill(0);
  textSize(20);
  text("Elevation: "+score+" ft",10,20);
  textSize(12);
  if(fuel > 170){
    fill(0,255,0);
  }
  if(fuel >= 100 && fuel <= 170){
    fill("yellow");
  }
  if(fuel < 100){
    fill("red");
  }
  textAlign(CENTER,CENTER);
  text(Math.round((fuel/270)*100)+"%",355,580);
  fill(100);
  textSize(20);
  text("Press space to play again!",90,300);

}// end of end

    
}// end of draw




//_______________________________________________________
//_______________________________________________________





//Functions

function livesFunction(){

  if(life == 3){
    rocketLife3.visible = true;
    rocketLife2.visible = true;
    rocketLife1.visible = true;
  
  }
  if(life <= 2){
    rocketLife3.scale = rocketLife3.scale-0.003;
    rocketLife3.rotation = rocketLife3.rotation + 1;
    if(rocketLife3.scale <= 0.008){
    rocketLife3.visible = false;
  }
  }
  if(life <= 1){
    rocketLife2.scale = rocketLife2.scale-0.003;
    rocketLife2.rotation = rocketLife2.rotation + 1;
    if(rocketLife2.scale <= 0.008){
    rocketLife2.visible = false;
  } 
  }
  if(life <= 0){
    rocketLife1.scale = rocketLife1.scale-0.003;
    rocketLife1.rotation = rocketLife1.rotation + 1;
    if(rocketLife1.scale <= 0.008){
    rocketLife1.visible = false;
  }
  }

}

function dieFunction(){
  rocket.velocityY = 0;
  if(!explosionSound.isPlaying()){
  explosionSound.play();
  explosionSound.setVolume(5);
  }
  explode.x = rocket.x;
  explode.y = rocket.y;
  explode.visible = true;
  rocket.velocityY = 0;
  cloudsGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityXEach(0);
  birdsRGroup.setVelocityYEach(0);
  birdsRGroup.setVelocityXEach(0);
  helicoptersLGroup.setVelocityYEach(0);
  helicoptersLGroup.setVelocityXEach(0);
  helicoptersRGroup.setVelocityYEach(0);
  helicoptersRGroup.setVelocityXEach(0);
  balloonsRGroup.setVelocityYEach(0);
  balloonsRGroup.setVelocityXEach(0);
  balloonsLGroup.setVelocityYEach(0);
  balloonsLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityYEach(0);
  planesRGroup.setVelocityXEach(0);
  planesRGroup.setVelocityYEach(0);
  fuelCansGroup.setVelocityYEach(0);

  cloudsGroup.setLifetimeEach(-1);
  birdsLGroup.setLifetimeEach(-1);
  birdsRGroup.setLifetimeEach(-1);
  helicoptersLGroup.setLifetimeEach(-1);
  helicoptersRGroup.setLifetimeEach(-1);
  balloonsLGroup.setLifetimeEach(-1);
  balloonsRGroup.setLifetimeEach(-1);
  planesLGroup.setLifetimeEach(-1);
  planesRGroup.setLifetimeEach(-1);
  fuelCansGroup.setLifetimeEach(-1);
}

function pause(){
  closeButton.visible = true;
  settingsBack.visible = true;
  transGrey.visible = true;
  modelRocket.visible = true;
  statsButton.visible = true;
  musicButton.visible = true;
  howToButton.visible = true;
  editButton.visible = true;
  modelBack.visible = true;
}


function pausePlay(){
  rocket.velocityY = 0;
  gravity = false;
  cloudsGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityYEach(0);
  birdsLGroup.setVelocityXEach(0);
  birdsRGroup.setVelocityYEach(0);
  birdsRGroup.setVelocityXEach(0);
  helicoptersLGroup.setVelocityYEach(0);
  helicoptersLGroup.setVelocityXEach(0);
  helicoptersRGroup.setVelocityYEach(0);
  helicoptersRGroup.setVelocityXEach(0);
  balloonsRGroup.setVelocityYEach(0);
  balloonsRGroup.setVelocityXEach(0);
  balloonsLGroup.setVelocityYEach(0);
  balloonsLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityXEach(0);
  planesLGroup.setVelocityYEach(0);
  planesRGroup.setVelocityXEach(0);
  planesRGroup.setVelocityYEach(0);
  fuelCansGroup.setVelocityYEach(0);



  cloudsGroup.setLifetimeEach(-1);
  birdsLGroup.setLifetimeEach(-1);
  birdsRGroup.setLifetimeEach(-1);
  helicoptersLGroup.setLifetimeEach(-1);
  helicoptersRGroup.setLifetimeEach(-1);
  balloonsLGroup.setLifetimeEach(-1);
  balloonsRGroup.setLifetimeEach(-1);
  planesLGroup.setLifetimeEach(-1);
  planesRGroup.setLifetimeEach(-1);
  fuelCansGroup.setLifetimeEach(-1);


}


function resumeMenu(){
  gameState = MENU;
  


}


function resume(){
  setState = 1;
  settingsBack.visible = false;
  closeButton.visible = false;
  transGrey.visible = false;
  modelRocket.visible = false;
  statsButton.visible = false;
  musicButton.visible = false;
  howToButton.visible = false;
  editButton.visible = false;
  modelBack.visible = false;
  backButton.visible = false;
  onOffButton.visible = false;
  sideButton1.visible = false;
  sideButton2.visible = false;
}


function resumePlay(){
  
  gameState = PLAY;
  gravity = true;

  //clouds
  cloudsGroup.setVelocityYEach(Yspeed-0.2);
  cloudsGroup.setLifetimeEach(400);
  //bird
  birdsLGroup.setVelocityYEach(Yspeed-0.2);
  birdsRGroup.setVelocityYEach(Yspeed-0.2);
  birdsLGroup.setVelocityXEach(2);
  birdsRGroup.setVelocityXEach(-2);
  birdsLGroup.setLifetimeEach(400);
  birdsRGroup.setLifetimeEach(400);
  //heli
  helicoptersLGroup.setVelocityYEach(Yspeed);
  helicoptersRGroup.setVelocityYEach(Yspeed);
  helicoptersLGroup.setVelocityXEach(3);
  helicoptersRGroup.setVelocityXEach(-3);
  helicoptersLGroup.setLifetimeEach(400);
  helicoptersRGroup.setLifetimeEach(400);
  //balloons
  balloonsLGroup.setVelocityYEach(Yspeed);
  balloonsRGroup.setVelocityYEach(Yspeed);
  balloonsLGroup.setVelocityXEach(1);
  balloonsRGroup.setVelocityXEach(-1);
  balloonsLGroup.setLifetimeEach(400);
  balloonsRGroup.setLifetimeEach(400);
  //airplane
  planesLGroup.setVelocityYEach(Yspeed);
  planesRGroup.setVelocityYEach(Yspeed);
  planesLGroup.setVelocityXEach(4);
  planesRGroup.setVelocityXEach(-4);
  planesLGroup.setLifetimeEach(400);
  planesRGroup.setLifetimeEach(400);
  //fuel can
  fuelCansGroup.setVelocityYEach(Yspeed);
  fuelCansGroup.setLifetimeEach(400);


}



function reset(){
  gameState = PLAY;
  explode.visible = false;
  rocket.x = 200;
  rocket.y = 200;
  cloudsGroup.setVelocityYEach(Yspeed-0.2);
  cloudsGroup.setLifetimeEach(400);
  birdsLGroup.destroyEach();
  birdsRGroup.destroyEach();
  helicoptersLGroup.destroyEach();
  helicoptersRGroup.destroyEach();
  balloonsLGroup.destroyEach();
  balloonsRGroup.destroyEach();
  planesLGroup.destroyEach();
  planesRGroup.destroyEach();
  fuelCansGroup.destroyEach();
  life = life - 1;
}

function restart(){
  gameState = START;
  //score reset
  score = 100;
  fuel = 270;
  gameover.visible = false;
  explode.visible = false;
  //center rocket
  rocket.x = 200;
  rocket.y = 200;
  //destroy groups
  cloudsGroup.setVelocityYEach(1.8);
  cloudsGroup.setLifetimeEach(400);
  birdsLGroup.destroyEach();
  birdsRGroup.destroyEach();
  helicoptersLGroup.destroyEach();
  helicoptersRGroup.destroyEach();
  balloonsLGroup.destroyEach();
  balloonsRGroup.destroyEach();
  planesLGroup.destroyEach();
  planesRGroup.destroyEach();
  fuelCansGroup.destroyEach();
  //lives
  life = 3;
  rocketLife3.rotation = -90;
  rocketLife2.rotation = -90;
  rocketLife1.rotation = -90;
  rocketLife3.visible = true;
  rocketLife2.visible = true;
  rocketLife1.visible = true;
  rocketLife3.scale = 0.06;
  rocketLife2.scale = 0.06;
  rocketLife1.scale = 0.06;

}

function gameSetup(){
  rocketHeader.visible = false;
  textStart.visible = false;
  howToButton.visible = false;
  backgroundMenu.visible = false;
  earthMenu.visible = false;
  moonMenu.visible = false;

  elevationDisplay.visible = true;
  rocketElevate.visible = true;
  rocket.visible = true;
  
  
  score = 100;
  fuel = 270;
  rocket.scale = 0.03;
  rocket.rotation = 0;
  rocket.x = 230;
  rocket.y = 404;
  flame.visible = false;
  flame.scale = 0.25;
  flame.rotation = 0;
  flame.x = rocket.x;
  flame.y = rocket.y + 40;
  life = 3;


  rocketLife3.rotation = -90;
  rocketLife2.rotation = -90;
  rocketLife1.rotation = -90;
  rocketLife3.scale = 0.06;
  rocketLife2.scale = 0.06;
  rocketLife1.scale = 0.06;

  
}


function rocketControl(){
  rocket.collide(boundrybot);
  rocket.collide(boundrylef);
  rocket.collide(boundryrig);
  rocket.collide(boundrytop);

    flame.x = rocket.x;
    flame.y = rocket.y +45;


    rocketElevate.y = 588-score*0.05;

    //emergency debugging
    if(rocket.y < -5){
      rocket.y = 200;
      rocket.x = 200;
    }
    
    if(keyDown("left") || keyDown("right")){
      //nothing here :)
    } else {
      rocket.rotation = 0;
      flame.rotation = 0;
    }
    if(keyDown("left")){
      rocket.x = rocket.x - 3;
      flame.x = rocket.x + 17;
      rocket.rotation = -20;
      flame.rotation = -20;
   
  }
  if(keyDown("right")){

      rocket.x = rocket.x + 3;
      flame.x = rocket.x - 17;
      rocket.rotation = 20;
      flame.rotation = 20;
   
  }
  if(keyDown("space") && fuel > 0){

       rocket.velocityY = -8;
       flame.visible = true;

       fuel = fuel - 1;
    
  } else {
      flame.visible = false;
  }
  
}



function spawnBirds(){//Spawn Birds
    if (frameCount % 120 === 0){

       var somethingthouhere = Math.round(random(1,3));
       switch(somethingthouhere) {
         case 1:   
    var bird = createSprite(-60,Math.round(random(-250,250)),10,40);
    bird.addAnimation("birds_flapping", birdImg);
    bird.mirrorX(-1);
    bird.velocityX = 2;
    bird.velocityY = Yspeed;
    bird.scale = 0.2;
    bird.depth = rocket.depth;
    bird.lifetime = 600;
    bird.setCollider("rectangle",0,0,bird.width,bird.height);
    birdsLGroup.add(bird);
                 break;
         case 2:   
    var bird = createSprite(460,Math.round(random(-250,250)),10,40);
    bird.addAnimation("birds_flapping", birdImg);
    bird.velocityX = -2;
    bird.velocityY = Yspeed;
    bird.scale = 0.2;
    bird.depth = rocket.depth;
    bird.lifetime = 600;
    bird.setCollider("rectangle",0,0,bird.width,bird.height);
    birdsRGroup.add(bird);
                 break;
       }         


    }
   }//end of spawn birds



function spawnHelicopter(){//Spawn Helicopter
    if (frameCount % 240 === 0){

       var MarleyistheBest = Math.round(random(1,4));
       switch(MarleyistheBest) {
         case 1:   
    var helicopter = createSprite(-60,Math.round(random(-150,250)),10,40);
    helicopter.addAnimation("helicopter", heliImg);
    helicopter.mirrorX(-1);
    helicopter.velocityX = 3;
    helicopter.velocityY = Yspeed;
    helicopter.scale = 0.25;
    helicopter.depth = rocket.depth;
    helicopter.lifetime = 800;
    helicopter.setCollider("rectangle",-50,0,500,200);
    helicoptersLGroup.add(helicopter);
                 break;
         case 2:   
    var helicopter = createSprite(460,Math.round(random(-150,250)),10,40);
    helicopter.addAnimation("helicopter", heliImg);
    helicopter.velocityX = -3;
    helicopter.velocityY = Yspeed;
    helicopter.scale = 0.25;
    helicopter.depth = rocket.depth;
    helicopter.lifetime = 800;
    helicopter.setCollider("rectangle",50,0,500,200);
    helicoptersRGroup.add(helicopter);
                 break;
       }         


    }
}//end of spawn helicopters


function spawnBalloons(){//Spawn Balloons
    if (frameCount % 280 === 0){

       var potato = Math.round(random(1,4));
       switch(potato) {
         case 1:   
    var balloon = createSprite(-60,Math.round(random(-150,250)),10,40);
    balloon.addAnimation("balloon_soar", balloonImg);
    balloon.velocityX = 1;
    balloon.velocityY = Yspeed;
    balloon.scale = 0.06;
    balloon.depth = rocket.depth;
    balloon.lifetime = 600;
    balloon.setCollider("rectangle",0,0,balloon.width,balloon.height);
    balloonsLGroup.add(balloon);
                 break;
         case 2:   
    var balloon = createSprite(460,Math.round(random(-150,250)),10,40);
    balloon.addAnimation("balloon_soar", balloonImg);
    balloon.velocityX = -1;
    balloon.velocityY = Yspeed;
    balloon.scale = 0.06;
    balloon.depth = rocket.depth;
    balloon.lifetime = 600;
    balloon.setCollider("rectangle",0,0,balloon.width,balloon.height);
    balloonsRGroup.add(balloon);
                 break;
       }         


    }
   }//end of spawn balloons

   function spawnPlanes(){//Spawn Plane
    if (frameCount % 280 === 0){

       var cookieWookie = Math.round(random(1,4));
       switch(cookieWookie) {
         case 1:   
    var plane = createSprite(-60,Math.round(random(-150,250)),10,40);
    plane.addAnimation("plane", planeImg);
    plane.velocityX = 4;
    plane.velocityY = Yspeed;
    plane.scale = 0.5;
    plane.depth = rocket.depth;
    plane.lifetime = 800;
    plane.setCollider("rectangle",0,0,350,90);
    planesLGroup.add(plane);
                 break;
         case 2:   
    var plane = createSprite(460,Math.round(random(-150,250)),10,40);
    plane.addAnimation("plane", planeImg);
    plane.mirrorX(-1);
    plane.velocityX = -3;
    plane.velocityY = Yspeed;
    plane.scale = 0.5;
    plane.depth = rocket.depth;
    plane.lifetime = 800;
    plane.setCollider("rectangle",0,0,350,90);
    planesRGroup.add(plane);
                 break;
       }         


    }
}//end of spawn plane

function spawnShuttles(){//Spawn shuttle
  if (frameCount % 100 === 0){

     var this_is_a_very_incredibly_long_variable_that_serves_little_purpose_also_why_are_you_looking_at_my_code = Math.round(random(1,4));
     switch(this_is_a_very_incredibly_long_variable_that_serves_little_purpose_also_why_are_you_looking_at_my_code) {
       case 1:   
  var shuttle = createSprite(-60,Math.round(random(150,750)),10,40);
  shuttle.addAnimation("shuttle", shuttleImg);
  shuttle.rotation = 20;
  shuttle.velocityX = 2;
  shuttle.velocityY = -Yspeed*2;
  shuttle.scale = 0.1;
  shuttle.depth = rocket.depth;
  shuttle.lifetime = 800;
  shuttle.setCollider("rectangle",0,0,100,350);
  shuttlesLGroup.add(shuttle);
               break;
       case 2:   
  var shuttle = createSprite(460,Math.round(random(150,750)),10,40);
  shuttle.addAnimation("shuttle", shuttleImg);
  shuttle.rotation = -20;
  shuttle.mirrorX(-1);
  shuttle.velocityX = -2;
  shuttle.velocityY = -Yspeed*2;
  shuttle.scale = 0.1;
  shuttle.depth = rocket.depth;
  shuttle.lifetime = 800;
  shuttle.setCollider("rectangle",0,0,100,350);
  shuttlesRGroup.add(shuttle);
               break;
     }         


  }
}//end of spawn shuttle


function spawnMeteors(){//Spawn meteor
  if (frameCount % 80 === 0){
    var meteorRandomSize = random(0.4,0.02)
     var randomthingy = Math.round(random(1,4));
     switch(randomthingy) {
       case 1:   
  var meteor = createSprite(-20,Math.round(random(-100,200)),10,40);
  meteor.addAnimation("meteor", meteorImg);
  meteor.rotation = 20;
  meteor.velocityX = 3;
  meteor.velocityY = Yspeed*4;
  meteor.scale = 0.2+meteorRandomSize
  meteor.depth = rocket.depth;
  meteor.lifetime = 800;
  meteor.setCollider("circle",0,0,200);
  meteorsLGroup.add(meteor);
               break;
       case 2:   
  var meteor = createSprite(420,Math.round(random(-100,200)),10,40);
  meteor.addAnimation("meteor", meteorImg);
  meteor.rotation = -20;
  meteor.mirrorX(-1);
  meteor.velocityX = -3;
  meteor.velocityY = Yspeed*4;
  meteor.scale = 0.2+meteorRandomSize;
  meteor.depth = rocket.depth;
  meteor.lifetime = 800;
  meteor.setCollider("circle",0,0,200);
  meteorsLGroup.add(meteor);
               break;
     }         


  }
}//end of spawn meteor

function spawnSatellites(){//Spawn satellite
  if (frameCount % 80 === 0){
     var randomstuff = Math.round(random(1,3));
     switch(randomstuff) {
       case 1:   
  var satellite = createSprite(-40,Math.round(random(-100,250)),10,40);
  satellite.addAnimation("satellite", satelliteImg);
  satellite.velocityX = 1;
  satellite.velocityY = Yspeed*1.5;
  satellite.scale = 0.2;
  satellite.depth = rocket.depth;
  satellite.lifetime = 800;
  satellite.setCollider("circle",0,0,200);
  satellitesLGroup.add(satellite);
               break;
       case 2:   
  var satellite = createSprite(440,Math.round(random(-100,250)),10,40);
  satellite.addAnimation("satellite", satelliteImg);
  satellite.velocityX = -1;
  satellite.velocityY = Yspeed*1.5;
  satellite.scale = 0.2;
  satellite.depth = rocket.depth;
  satellite.lifetime = 800;
  satellite.setCollider("circle",0,0,200);
  satellitesLGroup.add(satellite);
               break;
  }
}
}//end of spawn satellite


function spawnClouds() {//Spawn Clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(Math.round(random(0,400)),-20,40,10);
      var thingywhatamievendoing = Math.round(random(1,5));
      switch(thingywhatamievendoing) {
        case 1: cloud.addImage(cloudImg1);
                break;
        case 2: cloud.addImage(cloudImg2);
                break;
        case 3: cloud.addImage(cloudImg3);
                break;
        case 4: cloud.addImage(cloudImg4);
                break;
        case 5: cloud.addImage(cloudImg5);
                break;
        default: break;
      }

      cloud.scale = 0.7;
      cloud.velocityY = Yspeed-0.2;
      cloud.lifetime = 600;
      cloud.depth = rocket.depth - 2;
      cloudsGroup.add(cloud);
    }
  
  }

function spawnFuelCan() {//Spawn Fuel
    if (frameCount % 120 === 0) {
      var tellMeifyoureadthishahaMarleyisawesome = Math.round(random(1,2));
      if(tellMeifyoureadthishahaMarleyisawesome == 1){
      var fuelCan = createSprite(Math.round(random(0,400)),-40);
      fuelCan.addImage("fueling",fuelCanImg);
      fuelCan.scale = 0.1;
      fuelCan.velocityY = Yspeed;
      fuelCan.lifetime = 800;
      fuelCan.depth = rocket.depth - 1;
      fuelCansGroup.add(fuelCan);
    }
  
  }
}






















function mouseClicked(){
  tapSound.play();


}



