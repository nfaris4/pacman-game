export default class Food {
  #p;
  #x;
  #y;
  #size;
  #eaten = false;

  constructor(p, x, y, size) {
    this.#p = p;
    this.#x = x;
    this.#y = y;
    this.#size = size;
  }

  draw() {
    if (!this.#eaten) {
      this.#p.fill(255);
      this.#p.ellipse(
        this.#x * this.#size + this.#size / 2,
        this.#y * this.#size + this.#size / 2,
        this.#size * 0.3
      );
    }
  }

  isEaten(pacman) {
    if (pacman.getX() === this.#x && pacman.getY() === this.#y) {
      this.#eaten = true;
      return true;
    }
    return false;
  }
}
