import { getUsers } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  if (!user) {
    alert('No estàs loguejat!');
    window.location.href = '/src/login.html';
    return;
  }

  document.getElementById('user-info').textContent = `Usuari: ${user.name} ${user.surname}`;

  // Estadístiques simulades
  document.getElementById('games-total').textContent = 15;
  document.getElementById('games-won').textContent = 7;
  document.getElementById('games-lost').textContent = 8;
  document.getElementById('points-total').textContent = 5460;

  // Rànquing
  const users = Array.from({ length: 5 }, (_, i) => ({
    posicio: i + 1,
    name: `Jugador${i + 1}`,
    points: Math.floor(Math.random() * 10000),
  }));

  const table = document.getElementById('ranking-table');
  const select = document.getElementById('top-count');

  const renderRanking = (count) => {
    table.innerHTML = `<tr><th>Posició</th><th>Nom</th><th>Punts</th></tr>`;
    users
      .slice(0, count)
      .sort((a, b) => b.points - a.points)
      .forEach(u => {
        table.innerHTML += `<tr><td>${u.posicio}</td><td>${u.name}</td><td>${u.points}</td></tr>`;
      });
  };

  select.addEventListener('change', () => renderRanking(Number(select.value)));
  renderRanking(Number(select.value));
});
