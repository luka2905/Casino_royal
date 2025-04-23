
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

  document.getElementById("welcome").style.display = "none";
  document.getElementById("casino").style.display = "block";
  document.getElementById("user-nickname").textContent = nickname;
}
