const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 380, 800, 40);

  b1 = new Box(150,200,200,50);
  b2 = new Box(150,200,200,50);

  b3 = new Box(400,200,200,50);
  b4 = new Box(400,200,200,50);

  b5 = new Box(650,200,200,50);
  b6 = new Box(650,200,200,50);
 
  b7 = new Box(150,50,200,50);
  b8 = new Box(150,50,200,50);

  b9 = new Box(400,50,200,50);
  b10 = new Box(400,50,200,50);

  b11 = new Box(650,50,200,50);
  b12 = new Box(650,50,200,50);
 
  b13 = new Box(400,100,800,50);
  b14 = new Box(400,0,800,50);
  
}

function draw() {
  background(255,255,0); 
  Engine.update(engine);

  ground.display();
  
  b1.display(255,0,0);
  b2.display(255,0,0);

  b3.display(0,0,255);
  b4.display(0,0,255);

  b5.display(0,255,0);
  b6.display(0,255,0);

  b7.display(255,0,0);
  b8.display(255,0,0);

  b9.display(0,0,255);
  b10.display(0,0,255);

  b11.display(0,255,0);
  b12.display(0,255,0);
  
  b13.display(255,0,255);
  b14.display(255,0,255);

  

  drawSprites();
}