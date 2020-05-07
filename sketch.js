var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
 speed=random(60,95)
 weight=random(400,1500);

 car=createSprite(50,200,50,50);
 wall=createSprite(1300,200,60,height/2);
 car.velocityX=speed;
 
}

function draw() {
  background(0);
 

 if (wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX=0;
  var deformation=0.5 * weight * speed*speed/22509;
 
  if(deformation>180){
    text(deformation,800,200);
    car.shapeColor=color(255,0,0) ;
  
  }
   
  if (deformation<180 && deformation>100)
  {
    text(deformation,800,200);
  
  car.shapeColor=color(255,255,255);
} 
if (deformation<100){
  text(deformation,800,200);
  
  car.shapeColor=color(0,128,0);
} 
}
  drawSprites();

      }

