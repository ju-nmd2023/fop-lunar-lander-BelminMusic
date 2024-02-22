let x;
let y;

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 210;
}

function rocket(x, y) {
  background("#90e0ef");

  translate(x, y);
  // Clouds
  fill("#ffffff");
  noStroke();
  ellipse(300, 50, 30, 20);
  ellipse(315, 50, 20, 15);
  ellipse(285, 50, 20, 15);

  ellipse(380, 70, 30, 20);
  ellipse(395, 70, 20, 15);
  ellipse(365, 70, 20, 15);

  ellipse(460, 50, 30, 20);
  ellipse(475, 50, 20, 15);
  ellipse(445, 50, 20, 15);

  // Flames
  noStroke();
  fill("#ff6d00");
  ellipse(x, y + random(30, 40), 20, 60);

  fill("#ffba08");
  ellipse(x, y + random(35, 40), 15, 40);

  // Sun
  fill("#ffd700");
  noStroke();
  ellipse(100, 100, 50, 50);

  // Spacecraft
  // Wings
  fill("#fb6107");
  triangle(x - 15, y + 50, x - 25, y + 90, x - 5, y + 90);
  triangle(x + 15, y + 50, x + 5, y + 90, x + 25, y + 90);

  // Body
  fill("#d90429");
  ellipse(x, y + 50, 50, 100);

  // Window
  fill("#f8f9fa");
  ellipse(x, y + 30, 20, 20);

  // Head inside the window
  fill("#000000");
  ellipse(x, y + 35, 8, 8);

  // Eyes
  fill("#ffffff");
  ellipse(x - 1, y + 35, 2, 2);
  ellipse(x + 1, y + 35, 2, 2);

  // Middle detail
  fill("#343a40");
  rect(x - 25, y + 50, 50, 10);

  //Landing space
  fill("#000000");
  rect(0, height -50, width, 100);
}

function startScreen() {
  rocket(250, rocketY)
}

function draw() {
  ship()
}
