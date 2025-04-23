// Laden des Nicknames aus dem lokalen Speicher
const nickname = localStorage.getItem('nickname');
if (nickname) {
  document.querySelector('h1').innerHTML = `Wähle ein Spiel, ${nickname}`;
} else {
  window.location.href = 'index.html';  // Zurück zur Startseite, falls kein Nickname gefunden
}

// Funktion, um in den Vollbildmodus zu wechseln
function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari und Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer/Edge
    document.documentElement.msRequestFullscreen();
  }
}

// Funktion, die aufgerufen wird, wenn das Spiel gestartet wird
function startGame(game) {
  alert(`Du spielst jetzt ${game}!`);
  // Den Vollbildmodus aktivieren, bevor das Spiel geladen wird
  enterFullscreen();
  window.location.href = `game.html?game=${game}`; // Hier könntest du den Code für das spezifische Spiel hinzufügen
}

// Funktion, um den Vollbildmodus ein- oder auszuschalten
function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    enterFullscreen();
  }
}
