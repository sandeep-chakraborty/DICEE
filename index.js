var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var leftDiceImage = document.querySelector(".img1");
var RightDiceImage = document.querySelector(".img2");

var diceImageFilename = `images/dice${randomNumber1}.png`;
var diceImageFilename2 = `images/dice${randomNumber2}.png`;

leftDiceImage.setAttribute("src", diceImageFilename);
RightDiceImage.setAttribute("src", diceImageFilename2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "🚩Player 2 wins";
} else {
  document.querySelector("h1").textContent = "Draw:(";
}

  var reloadButton = document.getElementsByClassName("button")[0];
  reloadButton.addEventListener("click", function () {
    location.reload();
  });

