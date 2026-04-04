import { useState, useEffect, useCallback } from "react";
import {
  img406,
  img8473,
  img2470,
  img7519,
  dclassic,
  eurorack,
  img0096,
} from "../assets/images";
import "./ImageCarousel.css";

const carouselImages = [
  img406,
  img8473,
  img2470,
  img7519,
  dclassic,
  eurorack,
  img0096,
];

const AUTO_PLAY_MS = 4000;

export default function ImageCarousel({
  className = "",
}: {
  className?: string;
}) {
  const [current, setCurrent] = useState(() =>
    Math.floor(Math.random() * carouselImages.length),
  );

  const next = useCallback(
    () => setCurrent((i) => (i === carouselImages.length - 1 ? 0 : i + 1)),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [next, current]);

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track">
        {carouselImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Afterglow photo ${i + 1}`}
            className={`carousel-slide ${i === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
