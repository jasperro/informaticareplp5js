function setup() {
  var myCanvas = createCanvas(450,450);
  background('darkred');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  // x1 y1 x2 y2 x3 y3
  triangle(0,225,450,450,450,0);
  fill('purple');
  // x1 y1 x2 y2 x3 y3
  triangle(450,225,0,450,0,0);
  strokeWeight(5);
stroke('pink');
fill('darkred');

//een vertex is een vorm opgebouwd uit hoekpunten.

beginShape();
vertex(225,115);
vertex(300,225);
vertex(225,335);
vertex(0,225);
endShape(CLOSE);
}
