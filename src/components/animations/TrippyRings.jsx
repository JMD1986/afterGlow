import "./TrippyRings.css";

const RINGS = 30;
const BOX_SIZE = 480;
const DURATION = 2.5;
const LAG_DELAY = 1.25;

export default function TrippyRings() {
  const rings = [];
  for (let i = 1; i <= RINGS; i++) {
    const perc = (RINGS - i) / RINGS;
    const size = BOX_SIZE * perc;
    const offset = (BOX_SIZE - size) / 2;

    rings.push(
      <div
        key={i}
        className="ring"
        style={{
          width: size,
          height: size,
          left: offset,
          top: offset,
          borderRadius: size * 0.35,
          borderColor: `rgb(${Math.round(255 * perc)}, ${Math.round(255 * perc)}, ${Math.round(255 * perc)})`,
          "--ring-color-0": `rgb(${Math.round(255 * perc)}, ${Math.round(255 * perc)}, ${Math.round(255 * perc)})`,
          "--ring-color-25": `rgb(${Math.round(255 * (1 - perc))}, ${Math.round(125 * perc)}, ${Math.round(255 * (1 - perc))})`,
          "--ring-color-75": `rgb(${Math.round(125 * perc)}, ${Math.round(255 * (1 - perc))}, ${Math.round(255 * perc)})`,
          animationDelay: `${LAG_DELAY * DURATION * perc}s`,
        }}
      />,
    );
  }

  return <div className="trippy-container">{rings}</div>;
}
