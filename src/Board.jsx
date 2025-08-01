export default function Board({ boardStatus, currentBoard, handleBoardClick }) {
  const boardSquares = currentBoard.map((value, index) => {
    return (
      <div
        className={`square square${index}`}
        key={index}
        onClick={() => handleBoardClick(index)}
      >
        {currentBoard[index]}
      </div>
    );
  });

  return (
    <section id="board">
      <h2>{boardStatus}</h2>
      <div className="board">{boardSquares}</div>
    </section>
  );
}
