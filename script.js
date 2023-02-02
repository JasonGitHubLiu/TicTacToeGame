const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "" ,"", "", "" ,"", "", "" ]
let currentPlayer = 'X';
let running = false; 


startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartButton.addEventListener('click', restartGame);
    statusText.textContent = `It is ${currentPlayer}'s turn`
    running = true;  // we set running to true to start the game since we set running = false earlier, on line 17
}

function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex')
    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    changePlayer();
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer //Displays who's turn it is
}

function changePlayer(){ //this function changes players
    currentPlayer = (currentPlayer == "X") ? "O" : "X" // take current player, set it equal to X. If current player is equal to X, reassign current player with O, otherwise, X
    statusText.textContent = `It is ${currentPlayer}'s turn`
}

function checkWinner(){
    
}

function restartGame(){
    
}