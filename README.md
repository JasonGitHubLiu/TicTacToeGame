Link to live site: https://jasongithubliu.github.io/TicTacToeGame/


Here is a game of Tic Tac Toe that I created for my project, Mod 1: The DOM Based Game. The project must be built with HTML, CSS and JavaScript (must be visual and use the DOM not the Console), and hosted on Github pages.



Approach taken

I wanted to create tic tac toe with a restart buttion that empties 
each cell. The X's and O's are just letters and I made the game so that whenever you click into an empty cell, it adds either the X or O into that cell. 

I had to create win conditions which just consisted of all the different ways for someone to win (up, down, across, or diagonally). To do so, I had to to specify which arrays/cells could result in a win. If there are no winners, it will result in a draw.

To change players, I wrote a ternary that basically says, if the currentPlayer is equal to X, then switch to O, but if it is not equal to X, switch to X. Then it would display which player's turn it is underneath the grid with the template literal.

For the checkWinner function, I wanted to iterate over each inner array within win conditions at the current index of i. For example, if we check the win conditions, and we see that cell index 0, 1, and 2 are empty (or it is not all the same letter, [X or O]), we move onto the next win condition 3, 4, 5, and if that is empty/there are no winners the function will check the next set of inner array win conditions, etc. If there are not 3 of the same letters in a row, there are no winners, resulting in a draw.

If there is a winner (roundWon), there will be a status text (created with template literal) at the bottom of the grid that tells you which player has won, and the it will set running to false, which stops the game. If the options do not include anymore spaces to play in, then the status text will result in a draw, and running will be set to false [stops game].



Background Image

I ran into some issues when trying to set the background image. At first, I thought I had to set the background image in the index.html. However, I noticed that it would add the picture to my webpage, but it would always push my tic tac toe board down, along with the audio controls, and text. This was not the way that I wanted my webpage to be. I also put my background image into an images folder. I was not able to access the picture, so I believe I had to access it by (/images/sea-edge.png). To bypass this problem, I just dragged my picture out of the images folder and was able to access it. I wanted the picture to be in the background. So, I went into the style.css, and into the body, and added the background picture with, background-image: url('sea-edge.png');. 



Audio Folder

When adding the option to play music while playing the game, I ran into some issues regarding how to add the audio file within my script.js file. I had to create a new sound function, along with two new variables, audio and bgMusic. At first, I wanted the the music to start playing as soon as a player clicked on a cell, but quickly realised that not everyone will appreciate background music. So, I added the sound function with the audio controls. Therefore, people can play music and adjust the volume if they want.



Unsolved Problems

I was not able to figure out how to resize the cells according to the person's window size. For example, not everyone has the same size monitor. So depending on how big or small their monitor is, I wanted the tic tac toe board to resize itself. However, I ran into issues of the grid splitting up whenever I would try to use VW or VH for the width/height of the cell class. In the liver server, the audio does not automatically start playing, however, the published web app automatically starts playing the music as soon as you open up the link. That was not a problem at first, but it may be a github issue.