const DIREITA = 0, ESQUERDA = 1, CIMA = 2, BAIXO = 3;

class Pill {
  constructor(){
    this.direcao = random([DIREITA, ESQUERDA, CIMA, BAIXO]);
    switch (this.direcao){
      case DIREITA:
        this.x = 0;
        this.y = random(height);
        this.velX = 1;
        this.velY = 0;
        break;
      case ESQUERDA:
        this.x = width;
        this.y = random(height);
        this.velX = -1;
        this.velY = 0;
        break;
      case CIMA:
        this.x = random(width);
        this.y = height;
        this.velX = 0;
        this.velY = -1;
        break;
      case BAIXO:
        this.x = random(width);
        this.y = 0;
        this.velX = 0;
        this.velY = 1;
        break;
    }
  }

  move(){
    this.x += this.velX;
    this.y += this.velY;
  }

  draw(){
    push();
    strokeWeight(3);
    stroke('green');
    fill('green');
    circle(this.x, this.y, 8);
    pop();
  }
}

class Score {
  constructor(){
    this.points = 0;
  }

  increasePoints(){
    this.points++;
  }

  draw(){
    textSize(16);
    fill(0);
    text('Pontuação: ' + this.points, 40, 40);
  }
}

class Player {
  constructor(){
    this.x = width / 2;
    this.y = height / 2;
  }

  setPos(x, y){
    this.x = x;
    this.y = y;
  }

  draw(){
    push();
    strokeWeight(3);
    stroke('blue');
    fill('blue');
    circle(this.x, this.y, 8);
    pop();
  }
}

class Input {
  constructor(){
    this.update();
  }

  update(){
    this.x = mouseX;
    this.y = mouseY;
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }
}
class World {
  constructor(){
    this.score = new Score();
    this.player = new Player();
    this.pills = [new Pill()];
    this.input = new Input();
  }

  step(){
    this.input.update();
    this.player.setPos(this.input.getX(), this.input.getY());
    this.score.draw();
    for(let i = 0; i < this.pills.length; i++){
      let pill = this.pills[i];
      pill.move();
      
      if (dist(this.player.x, this.player.y, pill.x, pill.y) < 8) {
        this.score.increasePoints();
        this.pills.splice(i, 1);
        let newPillsCount = 2; 
        for (let j = 0; j < newPillsCount; j++) {
          this.pills.push(new Pill());
        }
      }
    }
  }

  draw(){
    this.player.draw();
    for(let i = 0; i < this.pills.length; i++){
      let pill = this.pills[i];
      pill.draw();
    }
  }
}