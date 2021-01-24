function setup(){

  createCanvas(1200,800);
  fixedRect = createSprite(400,400,100,150);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(1000,400,150,100);
  movingRect.shapeColor = "blue";
}

function draw(){
    background("white");
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
      && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
      && movingRect.y - fixedRect.y <  movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y <  movingRect.height/2 + fixedRect.height/2) {

      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }
    else{
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }

    console.log("Fixed Rect x position: " , fixedRect.x);
    console.log("Moving Rect x position: " , movingRect.x);
 
      drawSprites();
  }
