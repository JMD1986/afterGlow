import { useEffect, useRef } from "react";
import {
  img3192,
  img6764,
  imgC8ae,
  imgF58c,
  img77d3,
  img171f,
  img3472,
  img372c,
  img6e3d,
} from "../assets/images";
import "./EventInfo.css";
// import EventInfoImageOverlay from "./EventInfoImageOverlay";
import { Link } from "react-router-dom";

const sections = [
  {
    image: img3192,
    title: "What is Afterglow?",
    text: "Afterglow is your chance to experience the ultimate in chillness. Combining live instrumental music, healing sound baths, modular synthesizers, live painting, immersive visual art displays, DJ sets, and our patented vibe technicians to ensure the most thoroughly curated mood enhancement experience. It is a multi-stage event consisting of three areas focused on mood enhancement.",
  },
  {
    image: img171f,
    title: "The Atrium",
    text: "A relaxing space designed for socializing, libations, and casual conversation, featuring DJs spinning downtempo, ambient, and trip-hop music.",
  },
  {
    image: img3472,
    title: "The Soundbath",
    text: "A dedicated area where our in-house team of atmosphere engineers and sensory technicians curate a series of live sound baths using modular synthesizers, live instruments, and interactive projected visuals to assist emotional realignment and frequency tuning essential for deep relaxation.",
  },
  {
    image: img372c,
    title: "The Portal",
    text: "Live instrumental downtempo, ambient, and trip-hop performed by DRIFTSIDE, a collective of ATX-based musicians playing steel guitar, saxophone, synthesizers, and percussion. Enjoy an evening of live electronic music with a live painting performance from local artist The Suddenkind.",
  },
  {
    image: img6e3d,
    title: "The Team",
    text: "Throughout the space, we have a team of Harmonic Analysts, signal creators, and hidden artifacts from our team at Afterglow Enterprises LLC.",
  },
  {
    image: imgC8ae,
    title: "The Venue",
    text: "The venue for Afterglow is 616 Lavaca Street, located right downtown in Austin, Texas.",
  },
];

export default function EventInfo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".scroll-animate");
    if (!els) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full viewport hero image with overlayed welcome text */}
      <div className="event-hero-image-container">
        <img src={imgF58c} alt="Afterglow Hero" className="event-hero-image" />
        <div className="event-hero-welcome">
          <span>welcome to afterglow</span>
          <span className="-hero-ascend">are you ready to ascend?</span>
        </div>
      </div>
      {/* <EventInfoImageOverlay /> */}
      <div className="event-info" ref={containerRef}>
        {sections.map((section, i) => (
          <section key={i} className="event-section scroll-animate">
            <div className="event-section-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="event-section-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </section>
        ))}
      </div>
      <div className="event-info-bottom-link">
        <Link to="/forReal">what is it really?</Link>
      </div>
    </>
  );
}
