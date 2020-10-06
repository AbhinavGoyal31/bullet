var bullet,wall,speed,weight,thickness;

function setup() { 
createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,18,10);
bullet.shapeColor=("white");

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

bullet.velocityX = speed;
}

function draw() {
  background(0);


//if(collided(bullet,wall)){
if(bullet.x-wall.x >wall.width/2 + bullet.width/2) 
{
bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);

if(deformation>10){
bullet.shapeColor=color(255,0,0);
}
if(deformation<10){
bullet.shapeColor=color(0,255,0);
}
}
/* if(movingRect.x-fixedRect.x <fixedRect.width/2 + movingRect.width/2 &&
fixedRect.x- movingRect.x <fixedRect.width/2 + movingRect.width/2 && 
movingRect.y-fixedRect.y< fixedRect.height/2 + movingRect.height/2 &&
fixedRect.y- movingRect.y <fixedRect.height/2 + movingRect.height/2 )
{
movingRect.shapeColor="red"; 
fixedRect.shapeColor="red"; 
}
else {
movingRect.shapeColor="green"; 
fixedRect.shapeColor="green";  
}*/
//collided();
drawSprites();
}
/*function collided(bullet1, wall1) {

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bullet.RightEdge>=wall.LeftEdge)
{
  return true
}
return false;

}*/