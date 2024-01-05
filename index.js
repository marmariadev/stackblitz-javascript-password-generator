// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Generador de Contraseñas</h1>
  <div>
    <label for="length">Longitud de la contraseña:</label>
    <input type="number" id="length" min="8" max="20" value="12">
    <button id="generate">Generar Contraseña</button>
    <p>Contraseña Generada: <span id="password"></span></p>
  </div>
`;

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', () => {
  const length = document.getElementById('length').value;
  const password = generatePassword(length);
  document.getElementById('password').textContent = password;
});

function generatePassword(length) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
