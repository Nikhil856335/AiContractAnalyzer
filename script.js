let scoreA = 0;
let scoreB = 0;

function addScore(team) {
  if (team === 'A') {
    scoreA++;
    document.getElementById("scoreA").innerText = scoreA;
  } else {
    scoreB++;
    document.getElementById("scoreB").innerText = scoreB;
  }
}

function resetMatch() {
  scoreA = 0;
  scoreB = 0;

  document.getElementById("scoreA").innerText = scoreA;
  document.getElementById("scoreB").innerText = scoreB;

  document.getElementById("status").innerText = "Match Status: RESET 🔄";
}
