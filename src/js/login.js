import { getUsers } from './utils.js';

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const users = getUsers();

  const user = users.find(u => u.name === username && u.password === password);
  if (user) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    alert(`Benvingut, ${user.name}`);
    window.location.href = "/src/dashboard.html";
  } else {
    alert("Usuari o contrasenya incorrectes.");
  }
});
