var scores, roundScore, activePlayer, gamePlaying;
var btnRoll = document.querySelector('.roll');
var btnHold = document.querySelector('.hold');;
init();

(document).ready fuction('.roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var = .dice
    document.('#initial-' + activePlayer).innerHTML = ' + dice + ';
    if (dice !== 1) {
      ();
      roundScore += dice;
      document.querySelector('#initial-' + activePlayer).textContent = roundScore;
    } else {
      disableBtn(btnRoll, );
      hideRolledMsg();
      nextPlayer();
    }
  });
});

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
  document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner-0');
  document.querySelector('.player-1-panel').classList.remove('winner-1');
});