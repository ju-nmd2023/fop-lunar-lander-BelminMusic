background("#ade8f4");

// Sun
fill("#ffd700");
noStroke();
ellipse(100, 100, 50, 50);

//cloud
fill("#ffffff");
noStroke();
ellipse(300, 50, 30, 20); 
ellipse(315, 50, 20, 15); 
ellipse(285, 50, 20, 15);

noStroke();
ellipse(380, 70, 30, 20); 
ellipse(395, 70, 20, 15); 
ellipse(365, 70, 20, 15);

noStroke();
ellipse(460, 50, 30, 20); 
ellipse(475, 50, 20, 15); 
ellipse(445, 50, 20, 15);

// Wings
fill("#fb6107");
triangle(185, 200, 175, 240, 195, 240);
triangle(215, 200, 205, 240, 225, 240); 

//Body
fill("#d90429");
ellipse(200, 200, 50, 100);

//Window
fill("#f8f9fa");
ellipse(200, 180, 20, 20);

// Head inside the window
fill("#000000"); 
ellipse(200, 185, 8, 8);

//eyes
fill("#ffffff");
ellipse(199, 185, 2, 2); // Left eye
ellipse(201, 185, 2, 2); // Right eye

//Middle detail
fill("#343a40");
rect(175, 200, 50, 10);