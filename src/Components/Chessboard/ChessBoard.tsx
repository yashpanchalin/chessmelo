import Tile from "../Tiles/Tiles";
import "./ChessBoard.css";

interface Pieces {
  peices?: string;
  positionX: number;
  positionY: number;
}

const pieces: Pieces[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({
    peices: "assets/Chess SVG/blackPawn.svg",
    positionX: i,
    positionY: 1,
  });
}

for (let p = 0; p < 2; p++) {
  const color = p === 0 ? "black" : "white";
  const positionY = p === 0 ? 0 : 7;

  pieces.push({
    peices: `assets/Chess SVG/${color}Knight.svg`,
    positionX: 6,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Knight.svg`,
    positionX: 1,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}King.svg`,
    positionX: 4,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Queen.svg`,
    positionX: 3,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Rook.svg`,
    positionX: 7,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Rook.svg`,
    positionX: 0,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Bishop.svg`,
    positionX: 2,
    positionY,
  });
  pieces.push({
    peices: `assets/Chess SVG/${color}Bishop.svg`,
    positionX: 5,
    positionY,
  });
}

for (let i = 0; i < 8; i++) {
  pieces.push({
    peices: "assets/Chess SVG/whitePawn.svg",
    positionX: i,
    positionY: 6,
  });
}

const Yaxis = ["0", "1", "2", "3", "4", "5", "6", "7"];
const Xaxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export default function ChessBoard() {
  const boardChess = [];
  for (let j = Yaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < Xaxis.length; i++) {
      const num = i + j + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.positionX === i && p.positionY === j) {
          image = p.peices;
        }
      });

      boardChess.push(<Tile pieces={image} number={num} />);
    }
  }
  return (
    <>
      <div className="chessBoard">{boardChess}</div>
    </>
  );
}
