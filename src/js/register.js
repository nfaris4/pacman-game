import { getUsers, saveUsers } from './utils.js';

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const newUser = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    email: document.getElementById('email').value,
    birthdate: document.getElementById('birthdate').value,
    password: document.getElementById('password').value,
  };

  const users = getUsers();
  const duplicate = users.find(u => u.email === newUser.email);
  if (duplicate) {
    alert('Aquest correu ja està registrat!');
    return;
  }

  users.push(newUser);
  saveUsers(users);
  alert("Usuari registrat correctament!");
  window.location.href = "/src/login.html";
});
