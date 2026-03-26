import "./TriangleTravelers.css";
import type { FC } from "react";

const MAX = 200;

const TriangleTravelers: FC = () => {
  return (
    <div className="triangle-travelers-wrap">
      {Array.from({ length: MAX }).map((_, i) => (
        <div className="triangle-traveler" key={i} />
      ))}
    </div>
  );
};

export default TriangleTravelers;
