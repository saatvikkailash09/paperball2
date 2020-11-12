



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobject;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
dustbinobject=new dustbin(1200,650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobject.display;
  drawSprites();
 
}



