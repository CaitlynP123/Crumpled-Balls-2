const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

var paperBall

var dustbin, dustbinImg, dustbinWall1, dustbinWall2, dustbinWall3 

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,625,800,20)

	paperBall = new Paper(25,610)

	dustbinWall1 = new Dustbin(600, 550, 20, 130)
	dustbinWall2 = new Dustbin(700, 550, 20, 130)
	dustbinWall3 = new Dustbin(650, 605, 120, 20)

	dustbin = createSprite(650,535)
	dustbin.addImage("dustbin", dustbinImg)
	dustbin.scale = 0.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkgrey");
  
  ground.display()

  paperBall.display()

  dustbinWall1.display()
  dustbinWall2.display()
  dustbinWall3.display()

  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(paperBall.paper, paperBall.paper.position, {x:37.5, y:-37.5})
	}
}
