import { useState } from 'react';
import Board from './Board';
import History from './History';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortOrder, setSortOrder] = useState('Ascending');
  const currentBoard = [...history[currentMove]];
  const xIsNext = currentMove % 2 === 0;

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
            console.log(element);
            element.style.backgroundColor = 'red';
          });
        return currentBoard[a];
      }
    }

    return null;
  }

  function handleBoardStatus(currentBoard) {
    const winner = decideWinner(currentBoard);
    return winner
      ? `Winner is: ${winner}`
      : currentMove === 9
      ? 'Draw'
      : xIsNext
      ? 'Next player: X'
      : 'Next player: O';
  }

  function handleBoardClick(index) {
    if (currentBoard[index] || decideWinner(currentBoard)) return;
    currentBoard[index] = xIsNext ? 'X' : 'O';
    setHistory([...history, currentBoard]);
    setCurrentMove(currentMove + 1);
  }

  function handleHistoryClick(index) {
    const futureHistory = history.slice(0, index + 1);
    setHistory(futureHistory);
    setCurrentMove(index);
  }

  function reverseSortOrder() {
    sortOrder === 'Ascending'
      ? setSortOrder('Descending')
      : setSortOrder('Ascending');
  }

  return (
    <>
      <main>
        <Board
          currentBoard={currentBoard}
          handleBoardStatus={handleBoardStatus}
          handleBoardClick={handleBoardClick}
        ></Board>
        <History
          currentMove={currentMove}
          history={history}
          handleHistoryClick={handleHistoryClick}
          sortOrder={sortOrder}
          reverseSortOrder={reverseSortOrder}
        ></History>
      </main>
    </>
  );
}
