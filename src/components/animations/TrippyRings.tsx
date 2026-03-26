import "./TrippyRings.css";
import type { FC, CSSProperties } from "react";

const RINGS = 30;
const BOX_SIZE = 480;
const DURATION = 2.5;
const LAG_DELAY = 1.25;

const TrippyRings: FC = () => {
  const rings = [];
  for (let i = 1; i <= RINGS; i++) {
    const perc = (RINGS - i) / RINGS;
    const size = BOX_SIZE * perc;
    const offset = (BOX_SIZE - size) / 2;
    const color = `rgb(${Math.round(255 * perc)}, ${Math.round(255 * perc)}, ${Math.round(255 * perc)})`;
    const style: CSSProperties & Record<string, string | number> = {
      width: size,
      height: size,
      left: offset,
      top: offset,
      borderRadius: size * 0.35,
      borderColor: color,
      "--ring-color-0": color,
      "--ring-color-25": `rgb(${Math.round(255 * (1 - perc))}, ${Math.round(125 * perc)}, ${Math.round(255 * (1 - perc))})`,
      "--ring-color-75": `rgb(${Math.round(125 * perc)}, ${Math.round(255 * (1 - perc))}, ${Math.round(255 * perc)})`,
      animationDelay: `${LAG_DELAY * DURATION * perc}s`,
    };
    rings.push(<div key={i} className="ring" style={style} />);
  }

  return <div className="trippy-container">{rings}</div>;
};

export default TrippyRings;
