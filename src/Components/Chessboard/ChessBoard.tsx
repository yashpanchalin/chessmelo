import "./ChessBoard.css";
const Yaxis = ["0", "1", "2", "3", "4", "5", "6", "7"];
const Xaxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export default function ChessBoard() {
  const boardChess = [];
  for (let j = Yaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < Xaxis.length; i++) {
      const num = i + j + 2;

      if (num % 2 === 0) {
        boardChess.push(<div className="boardTiles greeTiles"></div>);
      } else {
        boardChess.push(<div className="boardTiles whiteTiles"></div>);
      }
    }
  }
  return (
    <>
      <div className="chessBoard">{boardChess}</div>
    </>
  );
}
