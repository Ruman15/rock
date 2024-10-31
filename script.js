function computerPlay() {
    const options = [ "камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options [randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return"нечья!";
    } else if(
        (playerSelection === "камень" && computerSelection === "ножницы") ||
        (playerSelection === "ножницы" && computerSelection === "бумага") ||
        (playerSelection === "бумага" && computerSelection === "камень")
    ){
        return "Вы победили!";
    } else {
        return "Компьютер победил!"
    }
}

function updateGame (playerSelection, computerSelection, result){
    const gameDiv = document.getElementById("game");
    const resultDiv = document.getElementById("result");
    gameDiv.style.display = "none";

    resultDiv.innerHTML = `Вы выбрали: ${playerSelection}, компьютер выбрал: ${computerSelection}. ${result}`;
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent ="Сыграть снова";
    playAgainButton.addEventListener("click", () => {
        gameDiv.style.display ="block";
        resultDiv.innerHTML = "";
    });

    resultDiv.appendChild(playAgainButton);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
const playerSelection = button.id;
const computerSelection = computerPlay();
const result = playRound(playerSelection, computerSelection);
updateGame(playerSelection, computerSelection, result);
    });
});