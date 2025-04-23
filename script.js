function checkAge(isOver18) {
  if (!isOver18) {
    alert("Du musst über 18 Jahre alt sein, um zu spielen.");
    return;
  }
  document.getElementById('nickname-section').classList.remove('hidden');
}

function startGame() {
  const name = document.getElementById('nickname').value.trim();
  if (name === '') {
    alert("Bitte gib einen Nickname ein.");
    return;
  }
  localStorage.setItem('nickname', name);
  window.location.href = 'games.html';
}
