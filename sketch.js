var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var en,w,bodies;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	en= Matter.Engine.create();
	w = en.world;

	packageBody = Matter.Bodies.circle(width/2 , 200 , 5 ,{restitution: false, isStatic: true});
	Matter.World.add(w, packageBody);
	
	ground = Matter.Bodies.rectangle(width/2, 650, width, 10 ,{isStatic: true});
 	Matter.World.add(w, ground);
	
	Matter.Engine.run(en);
  
}


function draw() {
  Matter.Engine.update(en);
  rectMode(CENTER); 
  background(0);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    
  }
}



