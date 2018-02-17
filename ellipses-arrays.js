var x = [];
var y = [];
var d = [];
var color = [];

function setup() {
  createCanvas(400, 400);
  colorMode(RGB)
  for (var index = 0; index < 50; index++) {
    x[index] = random(100, 300);
    y[index] = random(100, 250);
    d[index] = random(30, 100);
    color[index] = color(random(255), random(255), random(255));

  }
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  for (var index = 0; index < 50; index++) {
    fill(color[index]);
    ellipse(x[index], y[index], d[index]);
  
  if (random() < 50) {
    // random diameter between 10 and 400
    d[index] = random(10, 300);
  }
  
}
}
