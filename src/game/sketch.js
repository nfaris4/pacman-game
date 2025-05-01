import ConfigGame from './ConfigGameClass.js';
import GamePacman from './classes/GamePacman.js';

let wallImg; 

const sketch = (p) => {
  let config;
  let game;

  p.preload = () => {
    wallImg = p.loadImage("/src/game/assets/wall.png");
  };

  p.setup = () => {
    config = new ConfigGame();
    p.createCanvas(config.getWidth(), config.getHeight());
    game = new GamePacman(p, config, wallImg); // → li passem la imatge
  };

  p.draw = () => {
    p.background(0);
    if (game) {
      game.update();
      game.render();
    }
  };
};

export default sketch;
