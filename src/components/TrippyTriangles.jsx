import "./TrippyTriangles.css";

const COUNT = 20;

export default function TrippyTriangles() {
  const polygons = [];
  for (let i = 1; i <= COUNT; i++) {
    polygons.push(
      <polygon
        key={i}
        className={`triangle triangle-${i}`}
        points="500,200 759,650 241,650"
      />,
    );
  }

  return (
    <div className="tri-wrapper">
      <svg
        className="triangle-canvas"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {polygons}
      </svg>
    </div>
  );
}
