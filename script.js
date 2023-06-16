var naoBtn = document.getElementById("nao-btn");
var simBtn = document.getElementById("sim-btn");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var buttonWidth = naoBtn.offsetWidth;
var buttonHeight = naoBtn.offsetHeight;
var maxMove = 150;
var mouseX = 200;
var mouseY = 200;

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function moveNaoButton() {
  var buttonX = naoBtn.offsetLeft + buttonWidth / 2;
  var buttonY = naoBtn.offsetTop + buttonHeight / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  if (
    Math.abs(distanceX) < 100 &&
    Math.abs(distanceY) < 100
  ) {
    var moveX = getRandomValue(-maxMove, maxMove);
    var moveY = getRandomValue(-maxMove, maxMove);

    var newX = naoBtn.offsetLeft + moveX;
    var newY = naoBtn.offsetTop + moveY;

    if (
      newX < 0 ||
      newX + buttonWidth > windowWidth ||
      newY < 0 ||
      newY + buttonHeight > windowHeight
    ) {
      moveX = -moveX;
      moveY = -moveY;
    }

    naoBtn.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
  }
}

function updateMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function showSuccessMessage() {
  alert("VOCÊ CONSEGUIU, AGORA ME DÁ UMA MAMADA");
}

function redirectToYouTube() {
  window.open("https://www.youtube.com/watch?v=dilqsYifzKI&ab_channel=Sexosemd%C3%BAvida"); // Substitua pelo URL do vídeo do YouTube que você deseja redirecionar
}

document.addEventListener("mousemove", updateMousePosition);
setInterval(moveNaoButton, 100);

naoBtn.addEventListener("click", showSuccessMessage);
simBtn.addEventListener("click", redirectToYouTube);
