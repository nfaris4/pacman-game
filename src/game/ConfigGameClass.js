export default class ConfigGame {
    #rows = 10;
    #cols = 10;
    #cellSize = 40;
  
    getWidth() {
      return this.#cols * this.#cellSize;
    }
  
    getHeight() {
      return this.#rows * this.#cellSize;
    }
  
    getRows() {
      return this.#rows;
    }
  
    getCols() {
      return this.#cols;
    }
  
    getCellSize() {
      return this.#cellSize;
    }
  
    // Pots afegir setters o config per nivell, etc.
  }
  