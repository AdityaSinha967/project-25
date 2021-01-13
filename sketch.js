
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var log1;
var log2;
var log3;
var bgImg;
function preload()
{
	
}

function setup() {
	createCanvas(3000, 3000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
    paper= Bodies.circle(200,100,20,options);
	World.add(world, paper);
  
	var optu={
		isStatic:true
	}
	ground= Bodies.rectangle(800,600,2100,20,optu);
	World.add(world, ground);

	log1= Bodies.rectangle(800,580,200,10,optu);
	World.add(world, log1);

	log2= Bodies.rectangle(900,530,10,100,optu);
	World.add(world, log2);

	log3= Bodies.rectangle(700,530,10,100,optu);
	World.add(world, log3);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y, 20, 20);
 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,2200,10)

  rectMode(CENTER);
  rect(log1.position.x, log1.position.y,200,10)

  rectMode(CENTER);
  rect(log2.position.x, log2.position.y,10,100)

  rectMode(CENTER);
  rect(log3.position.x, log3.position.y,10,100)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper, paper.position, {x:55,y:-85})
	}
}


