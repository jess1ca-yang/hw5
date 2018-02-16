var x = [];
var y = [];
var d = [];
var color = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var index = 0; index < 50; index++) {
    x[index] = random(100, 300);
    y[index] = random(100, 250);
    d[index] = random(30, 100);
    color[index] = random(255, 255, 255);

  }
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  for (var index = 0; index < 50; index++) {
    ellipse(x[index], y[index], d[index]);
    if (random() < 0.03) {
      d[index] = d[index];
    }
}
  
}
