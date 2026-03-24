import React from "react";
import "./TriangleTravelers.css";

const MAX = 200;

export default function TriangleTravelers() {
  return (
    <div className="triangle-travelers-wrap">
      {Array.from({ length: MAX }).map((_, i) => (
        <div className="triangle-traveler" key={i} />
      ))}
    </div>
  );
}
