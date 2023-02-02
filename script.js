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
];

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = false; 



function startGame(){
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartButton.addEventListener('click', restartGame);
    statusText.textContent = `It is ${currentPlayer}'s turn`
    running = true;  // we set running to true to start the game since we set running = false earlier, on line 17
}

function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex');
    // audio2.play()
    if(options[cellIndex] != '' || !running){
        return;
    }

    updateCell(this, cellIndex);
   //changePlayer(); //testing the x's and o's in the grid when clicked
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer //Displays who's turn it is
}

function changePlayer(){ //this function changes players
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'; // take current player, set it equal to X. If current player is equal to X, reassign current player with O, otherwise, X
    statusText.textContent = `It is ${currentPlayer}'s turn`
}

function checkWinner(){
    let roundWinner = false;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == '' || cellB == '' || cellC == ''){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWinner = true;
            break;
        }
    }
    if(roundWinner){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes('')){
        statusText.textContent = 'Draw!';
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = 'X'
    options = ['', '', '', '', '', '', '', '', ''];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    running = true;
    
}

var bgMusic = new sound('Nujabes - Aruarian Dance [Pitched  Sped up].mp3')

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "true");
    // this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
var audio = document.querySelector('#myAudio')
audio.volume = 0.2;
audio.play()

startGame();
