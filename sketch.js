
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,paper1,ground1,world;



function setup() {
	createCanvas(1600, 720);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	dustbin1= new Dustbin(600,670,100,20); 
	

	dustbin2=new Dustbin(650,670,15,60);
	dustbin3=new Dustbin(550,670,15,60);
	

    paper1=new Paper(100,680,50);
    

	ground1=new Ground(width/2,690,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
	dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}



