
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2,moango3,mongo4,mongo5,mongo6,mongo7,mango8, mango9,mango10;
var world,boy;
var pull;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(2000, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,200,30);
	mango3=new mango(950,250,30);
  mango4=new mango(1200,300,30);
  mango5=new mango(1040,200,30);
  mango6=new mango(1200,150,30);
  mango7=new mango(1130,260,30);
  mango8=new mango(1000,100,30);
  mango9=new mango(1130,180,30);
  mango10=new mango(1230,230,30);
 
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(300,400,50,50);
    pull = new Pull(stoneObj.body,{x:220,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

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

  stoneObj.display();
  groundObject.display();
  pull.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  pull.fly();
}