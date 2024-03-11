import "./Tiles.css";

interface Props {
  number: number;
}

export default function Tile({ number }: Props) {
  if (number % 2 === 0) {
    return <div className="tiles greenTiles"></div>;
  } else {
    return <div className="tiles whiteTiles"></div>;
  }
}
