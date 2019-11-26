function setup() {
  var myCanvas = createCanvas(450,450);
  background('white');
  myCanvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);
  rect(0,0,150,450);
  rect(75,0,375,450);
  rect(0,150,450,150);
  circle(450,225,450)
  fill(255,0,255,0.3)
  triangle(225,0,450,225,225,450)
}