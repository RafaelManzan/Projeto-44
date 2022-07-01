var life1,life2,life3,life = 3;
var life1Img,life2Img,life3Img;
var balaEsq,balaDir,nave, naveImg;
var ets, et2Img, et1Img;

function createETs(){
  if(frameCount%100 === 0){
    var ranET = Math.round(random(1,2));
    var et = createSprite(random(20,windowWidth),50);
    et.velocityY = 2.2;
    et.addImage(et1Img);
    et.lifetime = windowHeight+25;
    switch(ranET){
      case 1: et.addImage(et1Img)
      et.scale = 1.5;
      break
      case 2: et.addImage(et2Img)
      break  
      default:
      break
    }
    ets.add(et);
  }
}

function preload() {
  naveImg = /*loadAnimation*/loadImage("/assets/Nave.png"/*,"/assets/Nave2.png","/assets/Nave3.png"*/);
  et1Img = loadImage("/assets/ET.png");
  et2Img = loadImage("/assets/ETnave.png");
  life1Img = loadImage("/assets/heart_1.png");
  life2Img = loadImage("/assets/heart_2.png");
  life3Img = loadImage("/assets/heart_3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ets = new Group();

  nave = createSprite(windowWidth/2,windowHeight - windowHeight/7.15);
  nave./*addAnimation*/addImage(naveImg);
  nave.scale = 0.4;

  life1 = createSprite(windowWidth/10-80,windowHeight/10);
  life1.addImage(life1Img);
  life1.scale = 0.5;
  life1.visible = true;

  life2 = createSprite(windowWidth/10-30,windowHeight/10);
  life2.addImage(life2Img);
  life2.scale = 0.5;
  life2.visible = true;

  life3 = createSprite(windowWidth/10+20,windowHeight/10);
  life3.addImage(life3Img);
  life3.scale = 0.5;
  life3.visible = true;
}

function draw() {
  background('black');

  if(mousePressedOver(nave)){
    balaEsq = createSprite(nave.x-62,nave.y-55,10,10);
    balaEsq.velocityY = -3;
    balaEsq.lifetime = windowHeight+50;
    balaDir = createSprite(nave.x+62,nave.y-55,10,10);
    balaDir.velocityY = -3;
    balaDir.lifetime = windowHeight+50;
  }

  if(life === 3){
    life3.visible = true;
    life2.visible = false;
    life1.visible = false;
  }else if(life === 2){
    life3.visible = false;
    life2.visible = true;
    life1.visible = true;
  }else if(life === 1){
    life3.visible = false;
    life2.visible = false;
    life1.visible = true;
  }else if(life === 0){
    life3.visible = false;
    life2.visible = false;
    life1.visible = false;
  }

  nave.x = mouseX;
  createETs();
  drawSprites();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}