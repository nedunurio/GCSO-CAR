var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 600, 600);
  speed=random(55,90);
  weight=random(400.1500);
}

function draw() {
  background(255,255,255);  
  car=createSprite(150,30,50,50);
  car.shapeColor="red"
  wall=creatSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);
  car.velocityX=speed;
  if(wall.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    car.shapeColor(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.sapeColor=colour(0,255,0);
  }
}

  drawSprites();
}