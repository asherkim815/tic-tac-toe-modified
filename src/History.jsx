export default function History({
  boardStatus,
  currentMove,
  handleHistoryClick,
  history,
  sortOrder,
  reverseSortOrder,
}) {
  const pastMoves = history.map((move, index) => {
    let row;
    let col;

    switch (move[1]) {
      case 0:
        row = 1;
        col = 1;
        break;
      case 1:
        row = 1;
        col = 2;
        break;
      case 2:
        row = 1;
        col = 3;
        break;
      case 3:
        row = 2;
        col = 1;
        break;
      case 4:
        row = 2;
        col = 2;
        break;
      case 5:
        row = 2;
        col = 3;
        break;
      case 6:
        row = 3;
        col = 1;
        break;
      case 7:
        row = 3;
        col = 2;
        break;
      case 8:
        row = 3;
        col = 3;
        break;
      default:
        row = '_';
        col = '_';
    }

    return (
      <li key={index}>
        {index === currentMove ? (
          <p>{`You are at move #${index} (row: ${row}, col: ${col})`}</p>
        ) : index === 0 &&
          (boardStatus === 'X won' ||
            boardStatus === 'O won' ||
            boardStatus === 'Draw') ? (
          <button className="restart" onClick={() => handleHistoryClick(index)}>
            {'Restart game'}
          </button>
        ) : (
          <button onClick={() => handleHistoryClick(index)}>
            {`Go to move #${index} (row: ${row}, col: ${col})`}
          </button>
        )}
      </li>
    );
  });
  if (sortOrder === 'descending') pastMoves.reverse();

  return (
    <section id="history">
      <h2>History</h2>
      <div className="history">
        <button onClick={() => reverseSortOrder()}>
          Sort order: {sortOrder}
        </button>
        <ul>{pastMoves}</ul>
      </div>
    </section>
  );
}
