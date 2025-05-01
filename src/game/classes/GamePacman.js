
import Pacman from './pacman.js';
import Food from './food.js';

export default class GamePacman {
  #p;
  #config;
  #pacman;
  #foods = [];

  constructor(p, config) {
    this.#p = p;
    this.#config = config;

    this.#initEntities();
  }

  #initEntities() {
    // Inicialitzar Pacman al centre del canvas
    const x = this.#config.getCols() / 2;
    const y = this.#config.getRows() / 2;

    this.#pacman = new Pacman(this.#p, x, y, this.#config.getCellSize());

    // Inicialitzar punts (food)
    for (let i = 1; i < this.#config.getCols() - 1; i++) {
      for (let j = 1; j < this.#config.getRows() - 1; j++) {
        this.#foods.push(new Food(this.#p, i, j, this.#config.getCellSize()));
      }
    }
  }

  update() {
    this.#pacman.update();

    // Comprovar si menja punts
    this.#foods = this.#foods.filter(food => {
      if (food.isEaten(this.#pacman)) {
        return false;
      }
      return true;
    });
  }

  render() {
    this.#pacman.draw();
    this.#foods.forEach(f => f.draw());
  }
}
