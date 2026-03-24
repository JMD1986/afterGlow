import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { img77d3 } from "../assets/images";

export default function EventInfoImageOverlay() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    gsap.set(img, { opacity: 0, scale: 0.7, rotate: -30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        endTrigger: ".event-section:nth-child(2)",
        end: "top 40%",
        scrub: true,
        pin: false,
        markers: false,
      },
    });

    tl.to(img, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: "power2.out",
    }).to(img, {
      opacity: 0,
      scale: 0.7,
      rotate: 30,
      duration: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".event-section:nth-child(2)",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        pin: false,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={img77d3}
      alt="Overlay"
      className="event-info-overlay-img"
      style={{
        position: "fixed",
        left: "50%",
        top: "20%",
        zIndex: 20,
        width: "400px",
        maxWidth: "90vw",
        pointerEvents: "none",
        transform: "translateX(-50%)",
      }}
    />
  );
}
