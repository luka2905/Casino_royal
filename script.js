// Nickname aus localStorage holen
const nickname = localStorage.getItem('nickname');
if (nickname) {
  // Wenn Nickname vorhanden ist, den Text im Header ändern
  const heading = document.querySelector('h1');
  if (heading) heading.innerHTML = `Wähle ein Spiel, ${nickname}`;
} else {
  // Wenn kein Nickname vorhanden ist, zurück zur Startseite
  window.location.href = 'index.html';
}

// Funktion, um in den Vollbildmodus zu wechseln
function enterFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

// Funktion, die aufgerufen wird, wenn das Spiel gestartet wird
function startGame(game) {
  // Vollbildmodus aktivieren
  enterFullscreen();
  // Weiterleitung zur Spielseite mit dem ausgewählten Spiel und Nickname
  window.location.href = `game.html?game=${game}&nickname=${encodeURIComponent(nickname)}`;
}

// Funktion, um den Vollbildmodus ein- oder auszuschalten
function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    enterFullscreen();
  }
}
