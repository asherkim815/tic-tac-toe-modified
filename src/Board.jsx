export default function Board({
  currentBoard,
  handleBoardStatus,
  handleBoardClick,
}) {
  const boardDOM = currentBoard.map((value, index) => {
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
    <section>
      <h2>{handleBoardStatus(currentBoard)}</h2>
      <div className="board-main">{boardDOM}</div>
    </section>
  );
}
