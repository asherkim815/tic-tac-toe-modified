import { useState } from 'react';
import Board from './Board';
import History from './History';

export default function App() {
  const [history, setHistory] = useState([[Array(9).fill(null), null]]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortOrder, setSortOrder] = useState('ascending');
  const currentBoard = [...history[currentMove][0]];
  const xIsNext = currentMove % 2 === 0;
  const winner = decideWinner(currentBoard);
  const boardStatus = winner
    ? `${winner} won`
    : currentMove === 9
    ? 'Draw'
    : xIsNext
    ? 'Next player: X'
    : 'Next player: O';

  function decideWinner(currentBoard) {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [i, n] of winnerLines.entries()) {
      const [a, b, c] = winnerLines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        document
          .querySelectorAll(`.square${a},.square${b},.square${c}`)
          .forEach((element) => {
            element.style.color = '#d9a404';
          });
        return currentBoard[a];
      }
    }
    document.querySelectorAll(`.square`).forEach((element) => {
      element.style.color = '#222601';
    });
    return null;
  }

  function handleBoardClick(index) {
    if (currentBoard[index] || winner) return;
    currentBoard[index] = xIsNext ? 'X' : 'O';
    setHistory([...history, [currentBoard, index]]);
    setCurrentMove(currentMove + 1);
  }

  function handleHistoryClick(index) {
    const futureHistory = history.slice(0, index + 1);
    setHistory(futureHistory);
    setCurrentMove(index);
  }

  function reverseSortOrder() {
    sortOrder === 'ascending'
      ? setSortOrder('descending')
      : setSortOrder('ascending');
  }

  return (
    <>
      <main>
        <h1>Tic-Tac-Toe</h1>
        <div className="components-container">
          <Board
            boardStatus={boardStatus}
            currentBoard={currentBoard}
            handleBoardClick={handleBoardClick}
          />
          <History
            boardStatus={boardStatus}
            currentMove={currentMove}
            handleHistoryClick={handleHistoryClick}
            history={history}
            sortOrder={sortOrder}
            reverseSortOrder={reverseSortOrder}
          />
        </div>
      </main>
    </>
  );
}
