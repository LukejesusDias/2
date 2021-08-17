var box;
function setup() {
  createCanvas(400,400);
  createSprite(200,200,50,30);
  

}

function draw() 
{
  background(30);
if (keyDown(DOWN_ARROW)) {
  background('red');
}
if (keyDown(RIGHT_ARROW)) {
  background('blue');
}if (keyDown(LEFT_ARROW)) {
  background('yellow');
}if (keyDown(UP_ARROW)) {
  background('purple');
}
drawSprites()
}




