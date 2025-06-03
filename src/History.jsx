export default function History({
  currentMove,
  history,
  handleHistoryClick,
  sortOrder,
  reverseSortOrder,
}) {
  const pastMoves = history.map((move, index) => {
    return (
      <li key={index}>
        {currentMove === index ? (
          <p>{'You are at move #' + index}</p>
        ) : (
          <button onClick={() => handleHistoryClick(index)}>
            {'Go to move #' + index}
          </button>
        )}
      </li>
    );
  });
  if (sortOrder === 'Descending') pastMoves.reverse();

  return (
    <section>
      <h2>History</h2>
      <div className="history-main">
        <button onClick={() => reverseSortOrder()}>
          Sort order: {sortOrder}
        </button>
        <ul>{pastMoves}</ul>
      </div>
    </section>
  );
}
