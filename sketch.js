var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(200, 150, 50, 80);
  rect1.shapeColor = "violet";
  rect1.debug = true;
  rect1.velocityX=7;

  rect2 = createSprite(600, 150,80,30);
  rect2.shapeColor = "violet";
  rect2.debug = true;
  rect2.velocityX=-7;
}

function draw() {
  background(0,0,0);  

 bounceoff(movingRect,fixedRect);
 bounceoff(rect1,rect2);
  drawSprites();
}
