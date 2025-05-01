import Pacman from "./pacman.js";
import Food from "./food.js";
import Wall from "./wall.js";
import mapData from "../map.js";

export default class GamePacman {
  #p;
  #config;
  #pacman;
  #foods = [];
  #walls = [];
  #wallImg;

  constructor(p, config, wallImg) {
    this.#p = p;
    this.#config = config;
    this.#wallImg = wallImg;

    this.#initMap();
  }

  #initMap() {
    const cellSize = this.#config.getCellSize();

    for (let y = 0; y < mapData.length; y++) {
      for (let x = 0; x < mapData[y].length; x++) {
        const value = mapData[y][x];

        if (value === 1) {
          this.#walls.push(new Wall(this.#p, x, y, cellSize, this.#wallImg));
        } else if (value === 2) {
          this.#foods.push(new Food(this.#p, x, y, cellSize));
        }
      }
    }

    // Pacman comença al primer espai buit (0)
    for (let y = 0; y < mapData.length; y++) {
      for (let x = 0; x < mapData[y].length; x++) {
        if (mapData[y][x] === 0) {
          this.#pacman = new Pacman(
            this.#p,
            x,
            y,
            cellSize,
            this.#config.getCols(),
            this.#config.getRows()
          );
          return;
        }
      }
    }
  }

  #isWallAt(xCell, yCell) {
    return mapData[yCell]?.[xCell] === 1;
  }

  update() {
    if (!this.#pacman) return;
    const nextX = this.#pacman.getXCellFromNextMove();
    const nextY = this.#pacman.getYCellFromNextMove();

    // Evitem moure si hi ha paret
    if (!this.#isWallAt(nextX, nextY)) {
      this.#pacman.update();
    }

    this.#foods = this.#foods.filter((food) => {
      return !food.isEaten(this.#pacman);
    });
  }

  render() {
    this.#walls.forEach((wall) => wall.draw());
    this.#foods.forEach((food) => food.draw());
    this.#pacman.draw();
  }
}
