// Classe que representa um agente que se move dentro de um campo
class Agent {
    constructor(x, y, size, vx, vy) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.vx = vx;
      this.vy = vy;
    }
  
    // Método que move o agente e trata as colisões com as bordas do campo
    move(field) {
      // Verifica colisão com as bordas horizontais
      if (this.x + this.vx < 0 || this.x + this.vx + this.size > field.width) {
        this.vx *= -1;
      }
  
      // Verifica colisão com as bordas verticais
      if (this.y + this.vy < 0 || this.y + this.vy + this.size > field.height) {
        this.vy *= -1;
      }
  
      // Atualiza a posição do agente
      this.x += this.vx;
      this.y += this.vy;
    }
  
    // Método que desenha o agente no canvas
    draw() {
      rect(this.x, this.y, this.size, this.size);
    }
  }
  
  // Classe que representa o campo onde o agente se move
  class Field {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Método que desenha o campo no canvas
    draw() {
      rect(0, 0, this.width, this.height);
    }
  }
  
  // Classe que representa o mundo contendo o campo e o agente
  class World {
    constructor(field, agent) {
      this.field = field;
      this.agent = agent;
    }
  
    // Método que avança um passo na simulação
    step() {
      this.agent.move(this.field);
    }
  
    // Método que desenha o mundo no canvas
    draw() {
      this.field.draw();
      this.agent.draw();
    }
  }
  
  let world;
  
  function setup() {
    // Configura o canvas
    createCanvas(400, 400);
  
    // Inicializa o agente e o campo
    let agent = new Agent(10, 10, 50, 2, 2); // Velocidades aumentadas para visualizar melhor o movimento
    let field = new Field(200, 300);
  
    // Cria o mundo contendo o campo e o agente
    world = new World(field, agent);
  }
  
  function draw() {
    // Limpa o fundo do canvas
    background(255);
  
    // Desenha e atualiza o mundo
    world.draw();
    world.step();
  }
  