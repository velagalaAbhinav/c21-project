 var sun;
 var mercury;
 var venus; 
 var earth;
 var mars;
 var jupiter;
 var saturn;
 var uranus;
 var neptune;
 var sunimg;
 var mercuryimg;
 var venusimg;

function preload(){
 sunimg = loadImage("sun.jpeg");
 mercuryimg = loadImage("mercury.jpg");
 venusimg = loadImage("venus.jpg");


}

 function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  var sun = createSprite(800,400,100,100);
  sun.addImage("sunimage",sunimg);
  var mercury = createSprite(900,400,30,30);
  mercury.addImage("mercuryimage",mercuryimg);
  var venus = createSprite(650,400,40,40);
  venus.addImage("venusimage",venusimg);
  var earth = createSprite(700,250,50,50);
  var mars = createSprite(700,650,60,60);
  var jupiter = createSprite(1100,400,80,80);
  var uranus = createSprite(250,400,70,70);
  var neptune = createSprite(700,100,60,60)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //mercury.scale = 0.5;
}