function setup() {
  var myCanvas = createCanvas(450,450);
  background('cornflowerblue');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(100,280,150,180,200,280)
  noStroke();
  rect(115,330,30,50);
  // teken de maan
  fill('khaki');
  // VERVANG DEZE REGEL door een regel die de maan tekent met een diameter van 150 en 50 vanaf de rand
  circle(350,100,150)
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
  ellipse(320,200,150,200)
}
