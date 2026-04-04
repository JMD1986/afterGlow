import { useState } from "react";
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

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? carouselImages.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === carouselImages.length - 1 ? 0 : i + 1));

  return (
    <div className="carousel">
      <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous image">
        &#8249;
      </button>

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

      <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next image">
        &#8250;
      </button>

      <div className="carousel-dots">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
