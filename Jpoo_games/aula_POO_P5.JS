function setup() {
  
    createCanvas(400, 400);
    background("black");
    
    fill("blue");
    
    strokeWeight(4);
    circle(300, 100, 50);
    
    push();
      noStroke("white");
      rect(20, 20, 100, 200);
    pop();
    
    circle(300, 300, 50);
  }