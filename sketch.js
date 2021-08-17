var ball
function setup() {
  createCanvas(400,400);
ball = createSprite(200,200,50,50)

}

function draw() 
{
  background(30);
  if (keyDown("left_arrow")) {
    ball.x=ball.x-5
  }
  if (keyDown("right_arrow")) {
    ball.x=ball.x+5
    
  }
  if (keyDown("up_arrow")) {
    ball.y=ball.y-5
  }
  if (keyDown("down_arrow")) {
    ball.y=ball.y+5
    
  }
drawSprites()
}




