var astronaut;
var bath;
var brush
var drink;
var eat;
var gym;
var bg,bgImg;
var move;
var sleep;

var edges;

function preload(){
  bgImg = loadImage("iss.png");
  bath = loadImage("bath1.png", "bath2.png");
  brush = loadImage("brush.png")
  drink = loadImage("drink1.png", "drink2.png");
  eat = loadImage("eat1.png", "eat2.png");
  gym = loadImage("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  move = loadImage("move.png", "move1.png");
  sleep = loadImage("sleep.png")

}

function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgImg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  edges = createEdgeSprites();
  
}



function draw() {
  background(255,255,255);
  createEdgeSprites();
  astronaut.bounceOff(edges);
 
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 400;
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x= 350;
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 200;
    astronaut.y= 200;
  
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 600;
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.x = 400;
    astronaut.y = 200;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
    astronaut.bounceOff(edges);
  
  }
  
  drawSprites();
  stroke ("navy");
  fill ("yellow")
  text("UP ARROW = BRUSHING",550,20);
  text("DOWN ARROW = GYMMING",550,40);
  text("LEFT ARROW = EATING",550,60);
  text("RIGHT ARROW = BATHING",550,80);
  text("M KEY = MOVING",550,100)
 
}
