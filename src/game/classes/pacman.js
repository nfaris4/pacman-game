export default class Pacman {
  #p;
  #x;
  #y;
  #size;
  #speed = 1;
  #dir = { x: 0, y: 0 };

  constructor(p, x, y, size) {
    this.#p = p;
    this.#x = x;
    this.#y = y;
    this.#size = size;

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
    this.#x += this.#dir.x * this.#speed;
    this.#y += this.#dir.y * this.#speed;
  }

  draw() {
    this.#p.fill(255, 255, 0);
    this.#p.ellipse(
      this.#x * this.#size + this.#size / 2,
      this.#y * this.#size + this.#size / 2,
      this.#size * 0.9
    );
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }
}
