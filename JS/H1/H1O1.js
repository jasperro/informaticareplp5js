function setup() {
  var myCanvas = createCanvas(1000,450);
  background('grey');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(225,225,400);
  fill('white')
  ellipse(225,225,300);

  // omgewisseld, er wordt alleen een witte cirkel weergegeven
  /* noStroke();
  fill('green');
  ellipse(225,225,300);
  fill('white')
  ellipse(225,225,400); */
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);  
}
