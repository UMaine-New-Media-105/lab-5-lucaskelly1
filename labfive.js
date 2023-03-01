let speedX;
let speedY;
let x;
let y;
let directionX;
let directionY;

function setup() {
  createCanvas(400, 400);
  speedX = 2;
  speedY = 2;
  directionX = 1;
  directionY = 1;
  x = width / 3;
  y = width / 2;
}

function draw() {
  background(220);

  x += speedX * directionX;
  y += speedY * directionY;
  drawCreeper(x, y);

  //condition: speedX > width
  // action: speedX = 0;
  if (x + 50 >= width || x < 0) {
    // check if hits the right edge
    directionX *= -1;
  }

  if (y + 50 >= width || y < 0) {
    // check if hits the right edge
    directionY *= -1;
  }

  //   console.log("The value of directionX is : " + directionX)
  // console.log("The value of x is : " + x)
  console.log("The value of speedX is " + speedX);
}

function drawCreeper(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill(0, 200, 0);

  scale(0.1);
  rect(0, 0, 500, 500);

  fill("black");

  rect(75, 75, 110, 110);
  rect(300, 75, 110, 110);
  rect(185, 180, 115, 200);
  rect(125, 250, 75, 200);
  rect(290, 250, 75, 200);
  pop();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    directionY = -1;
  }
  if (keyCode == DOWN_ARROW) {
    directionY = 1;
  }
    if (keyCode == RIGHT_ARROW) {
    directionX = 1;
  }
  if (keyCode == LEFT_ARROW) {
    directionX = -1;
  }
}
