
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var holder,ball1,ball2,ball3,ball4,thread,thread2;

var BobDiameter=62
//var BobDiameter=50;
function preload()
{
	
}

function setup() {
	 createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;
	  
	  holder= new Roof(500,100,400,20);
	
	  ball1    = new Bob(500,400,50,50);

	  thread   = new chain(ball1.body,holder.body,-BobDiameter*2,0)
	
	  ball2    = new Bob(400,300,50,50)
	 
	  thread2  = new chain(ball2.body,holder.body,-BobDiameter*2,0);
    
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(" lightgrey ");

  holder.display();

  ball1.display  ();

  thread.display ();

  ball2.display  ();

  thread2.display();
  

 
}



