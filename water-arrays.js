var x = [];
var y = [];
var ySpeed = []
var s = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
    for (var index = 0; index < 51; index++) {
    x[index] = 230;
    y[index] = 220;
    ySpeed[index] = random(1, 5);
    s[index] = random(8, 15);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  for (var index = 0; index < 51; index++) {
    ellipse(x[index], y[index], s[index]);
    y[index] = y[index] + ySpeed[index];


    if (y[index] > 450) {
      // reset
      y[index] = 220;
    }
}
}
