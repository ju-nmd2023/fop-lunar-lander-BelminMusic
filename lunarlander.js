let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = 200;
  y = 210;
}

function rocket(x, y) {


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
}

let rocketY = -200;
let velocity = 1;
let acceleration = 0.3;
let isGameActive = true;


function themeStyle()
{
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

   // Sun
   fill("#ffd700");
   noStroke();
   ellipse(-100, -100, 50, 50);

  //Landing space
  fill("#774936");
  rect(-200, 300, width, 1000);
}
  
  function win() {
    textSize(24);
    fill("#52b788");
    text( "You win! Click to play again", -10, 50 );
  }
  
  function loose() {
    textSize(23);
    fill("#d90429");
    text("You lost! Click to play again", -10, 50);
  }
  
  function startScreen() {
    rocket(100, rocketY);
    textSize(24);
    fill(255);
    text("click to start the game", -10, 50);

  }
  
  //from the lectures
  //gravity
  function playScreen() {
    if (isGameActive) {
      rocketY = rocketY + velocity;
      velocity = velocity + acceleration;
      rocket(100, rocketY);
    }
  
    if (keyIsDown(40) && isGameActive) {
      velocity = velocity - 0.7;
    }

    //contact with ground
    if (rocketY > 195 && velocity > 3) {
      rocket(100, rocketY);
      isGameActive = false;
      state = "result";
      loose();
    } else if (rocketY > 195 && velocity < 3) {
      rocket(100, rocketY);
      isGameActive = false;
      state = "result";
      win();
    }
  }
  
  let state = "start";
  
  function draw() {
    themeStyle();
  
    if (state === "start") {
      startScreen();
    }
    if (isGameActive && state === "game") {
      playScreen();
    } else if (isGameActive == false && state === "result") {
      playScreen();
    }
  }
  
  // start the game
  function mouseClicked() {
    if (state === "start") {
      state = "game";
    } else if (state === "game" && isGameActive == false) {
      state = "result";
      isGameActive = true;
      velocity = 2;
      rocketY = -200;
    } else if (state === "result") {
      state = "game";
      //start the game again;
      isGameActive = true;
      velocity = 2;
      rocketY = -200;
    }
  }