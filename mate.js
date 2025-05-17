function makeMate() {
  heatWater();
  addYerba();
  addSugar();
  insertBombilla(); 
  serve();
}


let currentSugar = 0;
let requestedSugar;
let message = "Code the mate!";
let score = 0;

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);
  generateNewRequest();
}

function draw() {
  background(220);

  // Title
  textSize(20);
  text("🧉 The Perfect Mate 🧉", width / 2, 30);

  // Request
  textSize(16);
  text("I want a mate with " + requestedSugar + " teaspoons of sugar", width / 2, 70);

  // Current state
  text("Current sugar: " + currentSugar, width / 2, 110);
  text(message, width / 2, 150);
  text("Score: " + score, width / 2, 180);

  // Add sugar button
  fill(200);
  rect(100, 220, 80, 40);
  fill(0);
  text("Add", 140, 240);

  // Serve button
  fill(200);
  rect(220, 220, 80, 40);
  fill(0);
  text("Serve", 260, 240);
}

function mousePressed() {
  // Add sugar
  if (mouseX > 100 && mouseX < 180 && mouseY > 220 && mouseY < 260) {
    if (currentSugar < 5) {
      currentSugar++;
    }
  }

  // Serve mate
  if (mouseX > 220 && mouseX < 300 && mouseY > 220 && mouseY < 260) {
    if (currentSugar === requestedSugar) {
      message = "Perfect! 😊";
      score++;
    } else {
      message = "Oops, not quite! 😖";
    }
    setTimeout(generateNewRequest, 1500);
  }
}

function generateNewRequest() {
  requestedSugar = int(random(0, 4)); // Between 0 and 3 teaspoons
  currentSugar = 0;
  message = "Code the mate!";
}
