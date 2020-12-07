const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var score = 0;
var backgroundImg
function preload(){
  polygonImg=loadImage("devil.png");
  getTime();
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  
  world = engine.world;
  b1 = new Box(300,275);
 
  b2 = new Box(330,275);
  b3 = new Box(360,275);
  b4 = new Box(390,275);
  b5 = new Box(420,275);
  b6 = new Box(450,275);
  b7 = new Box(480,275);
  //level two
  b8 = new Box(330,235);
  b9 = new Box(360,235);
  b10 = new Box(390,235);
  b11 = new Box(420,235);
  b12 = new Box(450,235);
  //level three
  b13 = new Box(360,195);
  b14 = new Box(390,195);
  b15 = new Box(420,195);
  //top
  b16 = new Box(390,155);

  //set 2 for second stand
  //level one
  b17 = new Box(640,175);
  b18 = new Box(670,175);
  b19 = new Box(700,175);
  b20 = new Box(730,175);
  b21 = new Box(760,175);
  //level two
  b22 = new Box(670,135);
  b23 = new Box(700,135);
  b24 = new Box(730,135);
  //top
  b25 = new Box (700,95);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(390,305,250,10);
  ground3=new Ground(700,205,250,10);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,40,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:150,y:170});
}
function draw() {
  if(backgroundImg){ background(backgroundImg); 
 push();
  noStroke();
  fill("blue")
  textFont("noteworthy")
  textSize(19);
text("SCORE = " + score,800,75);
 pop();
  Engine.update(engine);
  fill("blue")
  textSize(35)
  textFont("signpainter")
  text("Press Space To Get 2nd Chance",300,50);
  fill(135,206,234);
fill("red")
  b1.display();
  b1.score();
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
   b6.display();
   b6.score();
   b7.display();
   b7.score();
  fill("pink");
  b8.display();
  b8.score();
  b9.display();
  b9.score();
  b10.display();
  b10.score();
  b11.display();
  b11.score();
  b12.display();
  b12.score();
  fill("orange");
  b13.display();
  b13.score();
  b14.display();
  b14.score();
  b15.display();
  b15.score();
  fill("yellow");
  b16.display();
  b16.score();
  fill("teal");
  b17.display();
  b17.score();
  b18.display();
  b18.score();
  b19.display();
  b19.score();
  b20.display();
  b20.score();
  b21.display();
  b21.score();
 fill("turquoise")

  b22.display();
  b22.score();
  b23.display();
  b23.score();
  b24.display();
  b24.score();
  fill("aquamarine");
  b25.display();
  b25.score();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}
async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  
  var hour = datetime.slice(11,13);
  

if(hour>=06 && hour<=18){

  bg = "afternoon.jpg";

  }
  
else{
  bg = "night.jpg";
  
}
backgroundImg = loadImage(bg);
}