var thickness,wall;
var bullet,speed,weight;





function setup() {
  createCanvas(1600,400);
 

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
 

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background("black");  
drawSprites();


  bullet.velocityX=speed;
  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
     
    }

 

   function hasCollided(lbullet,lwall){

     bulletRightEdge=lbullet.x+lbullet.width;
     wallLeftEdge=lwall.x

     if(bulletRightEdge>=wallLeftEdge){
         
         return true
 }
        return false;

   }


  }



