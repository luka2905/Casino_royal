function showNicknameInput() {
  document.getElementById("nickname-section").style.display = "block";
}

function denyAccess() {
  alert("Du musst mindestens 18 Jahre alt sein, um diese Website zu betreten.");
}

function enterCasino() {
  const nickname = document.getElementById("nickname").value.trim();

  if (nickname === "") {
    alert("Bitte gib deinen Nickname ein.");
    return;
  }

  // Wechsle zur Casino-Seite
  document.getElementById("welcome").style.display = "none";
  document.getElementById("casino").style.display = "block";
  document.getElementById("user-nickname").textContent = nickname;

  // Google Analytics Event für Nickname senden
  gtag('event', 'nickname_entered', {
    'event_category': 'User',
    'event_label': nickname
  });
}

// Spielauswahl-Buttons
document.addEventListener("DOMContentLoaded", () => {
  const gameButtons = document.querySelectorAll(".game-card button");

  gameButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gameName = btn.parentElement.querySelector("h3").innerText;

      // Optional: GA-Event für Spielauswahl
      gtag('event', 'game_selected', {
        'event_category': 'Game',
        'event_label': gameName
      });

      alert(`Du hast ${gameName} gewählt! (Spiel-Funktion noch in Arbeit)`);
    });
  });
});
