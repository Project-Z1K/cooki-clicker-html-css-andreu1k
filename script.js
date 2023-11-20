let cookies = 0;
let autoClickers = 0;
let superClickers = 0;

const cookieImg = document.getElementById('cookie');
const cookiesDisplay = document.getElementById('cookies');
const autoClickerBtn = document.getElementById('autoClicker');
const superClickerBtn = document.getElementById('superClicker');
const megaClickerBtn = document.getElementById('megaClicker');
const languageSelect = document.getElementById('language-select');
const welcomeText = document.getElementById('welcome-text');
const artifactsText = document.getElementById('artifacts-text');



let autoClickerInterval;
let superClickerInterval;
let gamePaused = false;

function updateCookieDisplay() {
  cookiesDisplay.textContent = cookies + (cookies === 1 ? ' cookie' : ' cookies');
}

cookieImg.addEventListener('click', () => {
  cookies++;
  updateCookieDisplay();
});

autoClickerBtn.addEventListener('click', () => {
  if (cookies >= 1 && !autoClickerInterval && !gamePaused) {
    cookies -= 1;
    autoClickers++;

    autoClickerInterval = setInterval(() => {
      cookies += autoClickers;
      updateCookieDisplay();
    }, 1000);
  }
});

superClickerBtn.addEventListener('click', () => {
  if (cookies >= 2 && !superClickerInterval && !gamePaused) {
    cookies -= 2;
    superClickers++;

    superClickerInterval = setInterval(() => {
      cookies += superClickers * 5;
      updateCookieDisplay();
    }, 1000);
  }
});

megaClickerBtn.addEventListener('click', () => {
    if (cookies >= 100 && !autoClickerInterval && !gamePaused) {
      cookies -= 100;
      autoClickers++;
  
      autoClickerInterval = setInterval(() => {
        cookies += autoClickers;
        updateCookieDisplay();
      }, 1000);
    }
  });

languageSelect.addEventListener('change', function() {
  const selectedLanguage = languageSelect.value;

  // Cambiar el texto según el idioma seleccionado
  if (selectedLanguage === 'es') {
    welcomeText.textContent = '¡Bienvenido a Cookie Clicker!';
    artifactsText.textContent = 'Artefactos';
  } else if (selectedLanguage === 'fr') {
    welcomeText.textContent = 'Bienvenue sur Cookie Clicker !';
    artifactsText.textContent = 'Artéfacts';
  } else {
    welcomeText.textContent = 'Welcome to Cookie Clicker!';
    artifactsText.textContent = 'Artifacts';
  }
});

// Código previo...

autoClickerBtn.addEventListener('click', () => {
    if (cookies >= 1 && !autoClickerInterval && !gamePaused) {
      cookies -= 1;
      autoClickers++;
  
      autoClickerInterval = setInterval(() => {
        cookies += autoClickers;
        updateCookieDisplay();
      }, 1000);
    }
  });
  
  superClickerBtn.addEventListener('click', () => {
    if (cookies >= 4 && !superClickerInterval && !gamePaused) {
      cookies -= 4;
      superClickers++;
  
      superClickerInterval = setInterval(() => {
        cookies += superClickers * 20;
        updateCookieDisplay();
      }, 1000);
    }
  });
  
  const cookieSound = document.getElementById('cookieSound');
  
  cookieImg.addEventListener('click', () => {
    // Lógica de incrementar cookies
    updateCookieDisplay();
  
    // Reproducir sonido al hacer clic en la galleta
    cookieSound.currentTime = 0; // Reinicia el sonido para que se pueda reproducir varias veces seguidas
    cookieSound.play();
  });

  // Ejemplo: Bonificación que duplica la producción durante un período de tiempo
function applyBonus() {
    autoClickers *= 2; // Duplicar la producción de los auto clickers
    setTimeout(() => {
      autoClickers /= 2; // Volver a la producción normal después de cierto tiempo
    }, 3000); // La bonificación dura 30 segundos
  }

  // Ejemplo: Aumento de la producción de los artefactos con cada nivel
let nivel = 1;

function subirNivel() {
  nivel++;
  superClickers += nivel * 2; // Cada nivel aumenta la producción de los super clickers
}


// Ejemplo: Misión para conseguir un número específico de cookies en un tiempo determinado
function cookieMission() {
    let objetivo = 1000;
    let tiempo = 60; // Tiempo en segundos
  
    setTimeout(() => {
      if (cookies >= objetivo) {
        // Completar la misión, otorgar una recompensa
        // Puedes agregar más lógica de recompensa aquí
      }
    }, tiempo * 1000); // Tiempo en milisegundos
  }

  function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    document.body.appendChild(messageElement);
  
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 3000); // Eliminar el mensaje después de 3 segundos
  }
  
  // Uso:
  showMessage('¡Has comprado un Super Clicker!');

  
  function highlightButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('highlight');
  
    setTimeout(() => {
      button.classList.remove('highlight');
    }, 2000); // Quitar el resaltado después de 2 segundos
  }
  
  // Uso:
  highlightButton('superClicker');

  
  function animateCookieOnBonus() {
    const cookie = document.getElementById('cookie');
    cookie.style.animation = 'grow 1s ease-in-out';
    setTimeout(() => {
      cookie.style.animation = ''; // Eliminar la animación después de 1 segundo
    }, 1000);
  }
  
  // Uso:
  animateCookieOnBonus();

  // Almacenar las cookies en el localStorage
function guardarCookies() {
    localStorage.setItem('cookies', cookies);
  }
  
  // Recuperar las cookies del localStorage al iniciar el juego
  function cargarCookies() {
    if (localStorage.getItem('cookies')) {
      cookies = parseInt(localStorage.getItem('cookies'));
      updateCookieDisplay();
    }
  }
  
  // Llama a cargarCookies al inicio del juego para restaurar el estado previo
  cargarCookies();
  
  // Actualiza las cookies y guarda el progreso al hacer clic en la galleta
  cookieImg.addEventListener('click', () => {
    cookies++;
    updateCookieDisplay();
    guardarCookies(); // Guarda las cookies después de cada clic
  });
  
  // Otras funciones donde se actualicen las cookies (compra de artefactos, etc.) también deberían llamar a guardarCookies() para mantener el progreso
  
  
  
  
  