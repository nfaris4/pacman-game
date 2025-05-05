import sketch from '../game/sketch.js';
import User from '../game/classes/User.js';

let timeLeft = 60; // Temps inicial en segons
let points = 0; // Punts inicials

// Actualitzar el HUD
const updateHUD = () => {
  document.getElementById('timeText').textContent = `${timeLeft}s`;
  document.getElementById('pointsText').textContent = points;
};

// Temporitzador per reduir el temps
const startTimer = () => {
  const timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateHUD();
    } else {
      clearInterval(timerInterval);
      alert('Temps esgotat!'); // Pots afegir més lògica aquí si cal
    }
  }, 1000);
};

// Funció per incrementar els punts quan el personatge menja
const onFoodEaten = () => {
  points += 10; 
  updateHUD();
};

document.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem('loggedUser'));
  if (!userData) {
    alert('Has d’iniciar sessió per jugar.');
    window.location.href = '/src/login.html';
    return;
  }

  // Crea una instància de User amb les dades de localStorage
  const user = new User(userData);
  window.currentUser = user; // opcional: exposar globalment si cal

  // Llança p5
  new p5(sketch, document.getElementById('game-container'));

  updateHUD();
  startTimer();

  // Exemple: Simular menjar cada 3 segons (substitueix això amb la teva lògica real)
  setInterval(() => {
    onFoodEaten();
  }, 3000);
});
