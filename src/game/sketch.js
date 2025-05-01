import ConfigGame from './ConfigGameClass.js';
import GamePacman from './classes/GamePacman.js';

const sketch = (p) => {
  let config;
  let game;

  p.setup = () => {
    config = new ConfigGame();
    p.createCanvas(config.getWidth(), config.getHeight());

    try {
      game = new GamePacman(p, config); // li passem l'instància de p5 i config
    } catch (e) {
      console.error("Error inicialitzant el joc:", e);
    }
  };

  p.draw = () => {
    if (game) {
      game.update();
      game.render();
    }
  };
};

export default sketch;
