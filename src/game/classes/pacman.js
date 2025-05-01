export default class Pacman {
  #p;
  #x;
  #y;
  #size;
  #speed = 2;
  #dir = { x: 0, y: 0 };
  #cols;
  #rows;

  constructor(p, cellX, cellY, size, cols, rows) {
    this.#p = p;
    this.#size = size;
    this.#cols = cols;
    this.#rows = rows;

    this.#x = cellX * size;
    this.#y = cellY * size;

    this.#setupControls();
  }

  #setupControls() {
    this.#p.keyPressed = () => {
      switch (this.#p.keyCode) {
        case this.#p.LEFT_ARROW:
          this.#dir = { x: -1, y: 0 };
          break;
        case this.#p.RIGHT_ARROW:
          this.#dir = { x: 1, y: 0 };
          break;
        case this.#p.UP_ARROW:
          this.#dir = { x: 0, y: -1 };
          break;
        case this.#p.DOWN_ARROW:
          this.#dir = { x: 0, y: 1 };
          break;
      }
    };
  }

  update() {
    const nextX = this.#x + this.#dir.x * this.#speed;
    const nextY = this.#y + this.#dir.y * this.#speed;

    const cellX = nextX / this.#size;
    const cellY = nextY / this.#size;

    const min = 1; // marge d’una cel·la (parets)
    const maxX = this.#cols - 2;
    const maxY = this.#rows - 2;

    if (cellX >= min && cellX <= maxX) {
      this.#x = nextX;
    }

    if (cellY >= min && cellY <= maxY) {
      this.#y = nextY;
    }
  }

  draw() {
    this.#p.fill(255, 255, 0);
    this.#p.rect(this.#x, this.#y, this.#size, this.#size);
  }
  

  getXCell() {
    return Math.floor(this.#x / this.#size);
  }

  getYCell() {
    return Math.floor(this.#y / this.#size);
  }

  getXCellFromNextMove() {
    return Math.floor((this.#x + this.#dir.x * this.#speed) / this.#size);
  }
  
  getYCellFromNextMove() {
    return Math.floor((this.#y + this.#dir.y * this.#speed) / this.#size);
  }
  
}
