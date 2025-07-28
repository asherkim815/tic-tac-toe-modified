App link (앱 링크): https://asherkim815.github.io/tic-tac-toe-modified/

# Tic-Tac-Toe

## Modified Version Screenshots (수정 버전 스크린샷)

![tic-tac-toe modified version screenshot #1 - main page](screenshots/tic-tac-toe-modified-screenshot1.jpg)
![tic-tac-toe modified version screenshot #2 - main page responsive](screenshots/tic-tac-toe-modified-screenshot1-responsive.jpg)


## Original Version Screenshot (기존 버전 스크린샷)

![tic-tac-toe original version screenshot - main page](screenshots/tic-tac-toe-original-screenshot.jpg)
![tic-tac-toe original version screenshot - main page responsive](screenshots/tic-tac-toe-original-screenshot-responsive.jpg)

## About the App

This is an updated version of React documentation's tic-tac-toe tutorial (https://react.dev/learn/tutorial-tic-tac-toe).

Below are the challenges the docs proposed and how I met them:
1. For the current move only, show “You are at move #…” instead of a button.\
   ✔ In History.jsx, I made pastMoves return \<p> instead of \<li> if (history[index] === currentMove).
2. Rewrite Board to use two loops to make the squares instead of hardcoding them.\
   ✔ I used one loop (map method) to make an array of the squares (yes, because I was lazy, but also because I wanted to use the array's index for the fifth challenge), and fit them in a 3x3 grid div (.board).
3. Add a toggle button that lets you sort the moves in either ascending or descending order.\
   ✔ Made state (sortOrder) and function (reverseSortOrder()) that changes the state upon clicking the toggle button (i.e. to "descending" if sortOrder is "ascending", and vice versa). I then made History component reverse pastMoves array with reverse() method if the state is "descending".
4. When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).\
✔ Every time a move is made, decideWinner() function checks if there's a winner. If truthy, the function changes the three connected squares's font color to goldish (#d9a404). If falsy, the function changes all squares' font color to blackish (#222601). I could have used useRef with DOM, but I was lazy and wanted to save my energy and time.
5. Display the location for each move in the format (row, col) in the move history list.\
✔ I made history preserve another element (the clicked square's index, mentioned in the answer to the second challenge), and made History's pastMoves (the long-listed \<li>) show row and col according to it. So history's initial state changed from [Array(9).fill(null)] to [[Array(9).fill(null), null]], which now contains the index.
