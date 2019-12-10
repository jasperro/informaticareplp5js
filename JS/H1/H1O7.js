function setup() {
  var myCanvas = createCanvas(450,450);
  background('lavender');
  myCanvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  translate(225,225);
  rect(0,0,200,200);
  
  push();
  fill(255,225,0);
  rect(0,0,50,50);
  pop();
  rotate(45);
  
  rect(0,0,200,200);
}
