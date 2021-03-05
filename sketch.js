
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var tree,dground,treeimg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world;
var boy,boyimg;

function preload(){
	boy=loadImage("images/boy.png");
	treeimg=loadImage("tree.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(600,290,34);
    mango3=new mango(855,325,35);
	mango4=new mango(670,260,35);
	mango5=new mango(730,200,35);
	mango6=new mango(710,320,36);
	mango7=new mango(780,250,35);
	mango8=new mango(825,260,35);
    mango9=new mango(880,260,35);
	mango10=new mango(980,305,35);

    attach=new Throw(stone.body,{x:100,y:465});

    tree=createSprite(775,368);
    tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprites(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);
  
    drawSprites();
	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();                                                               
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	stones.display();
	dground.display();

}
  
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
	attach.fly();
}
 
function detectCollision(lstones,lmango){

     if(lstones.body.position.x- lmango.body.position.x<lmango.diametre + lstones.diametre
		&& lmango.body.position.x- lstones.body.position.x < imango.diameter + istones.diametre
		&& lmango.body.position.y- lstones.body.position.y < imango.diameter + istones.diametre
		&& lmango.body.position.y- lstones.body.position.y < imango.diameter + istones.diametre){
		 Matter.Body.setStatic(lmango.body,false);
		}

}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}