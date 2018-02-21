var x = [];
var y = [];
var ySpeed = [];
var s = []
var colors = []
var back = []

function setup() {
  createCanvas(400, 400);
  colorMode(RGB)
  for (var index = 0; index < 50; index++) {
    x[index] = random(100, 300);
    y[index] = 100;
    ySpeed[index] = random(1, 5);
    s[index] = random(1, 20);
    colors[index] = color(random(255), random(255), random(255));
    
  }
}


function draw() {

  noStroke();




  for (var index = 0; index < 50; index++) {
    background = back[index];
    fill(colors[index]);
    ellipse(x[index], y[index], s[index]);
    y[index] = y[index] + ySpeed[index];


    if (y[index] > 450) {
      // reset
      y[index] = 100;
    }
  }
    // draw cloud

  fill(222, 232, 242);
  ellipse(100, 120, 80, 80);
  ellipse(140, 90, 80, 80);
  ellipse(230, 80, 120, 120);
  ellipse(300, 120, 80, 80);
  rect(100, 80, 200, 80);

}
