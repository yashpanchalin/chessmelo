import "./Tiles.css";

interface Props {
  pieces?: string;
  number: number;
}

export default function Tile({ number, pieces }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="tiles greenTiles">
        <img src={pieces} />
      </div>
    );
  } else {
    return (
      <div className="tiles whiteTiles">
        <img src={pieces} />
      </div>
    );
  }
}
