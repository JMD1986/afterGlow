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
  img5def,
  imgEafb,
  imgdD123,
  img920e7,
  imgDdec,
} from "../assets/images";
import bg from "../assets/backgrounds/pppsychedelic.webp";
import "./EventInfo.css";
// import EventInfoImageOverlay from "./EventInfoImageOverlay";

import TrippyRings from "./animations/TrippyRings";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Section = {
  image: string;
  title: string;
  link: string;
  text: ReactNode;
};

const sections: Section[] = [
  {
    image: img5def,
    title: "What is Afterglow?",
    link: "/whatIs",
    text: `Afterglow is an immersive, multi-stage sound and art event
      designed to facilitate calm, openness, and relaxation. Combining
      live instrumental music, healing sound baths, modular synthesizers,
      live painting, immersive visual installations, DJ sets, and our
      in-house vibe technicians (interactive comedy), Afterglow offers a thoroughly
      curated atmosphere for maximum chillness with Austin weirdness.
      The experience unfolds across three distinct areas, each engineered
      to support a different phase of vibrations.`,
  },
  {
    image: img171f,
    title: "The Atrium",
    link: "/atrium",
    text: `The Atrium is a social area designed for
      conversation, libations, and gradual environmental adjustment.
      Here, guests are invited to settle into the evening at their own
      pace while DJs guide the room through downtempo, ambient, and
      trip-hop selections calibrated for optimal vibe-setting.
      The space also features a rotating visual installation
      from local artists, providing a dynamic backdrop that evolves
      throughout the night.`,
  },
  {
    image: img3472,
    title: "The Soundbath",
    link: "/soundbath",
    text: `The Soundbath is a dedicated  zone where our in-house
      atmosphere engineers and sensory technicians administer a sequence
      of live sound environments using modular synthesizers, live
      instrumentation, and responsive projected visuals. Three different
      sound artists ranging from gongs and ambient percussion to modular synthesizers.`,
  },
  {
    image: img372c,
    title: "The Portal",
    link: "/thePortal",
    text: `The Portal serves as the evening's primary transmission
      chamber, featuring live instrumental downtempo, ambient, and
      trip-hop performed by DRIFTSIDE, a collective of Austin-based
      musicians working across steel guitar, saxophone, synthesizers,
      and percussion. The environment is further activated by a live
      painting performance from local artist Trey Abraham, offering a
      parallel visual signal as the night continues to open.`,
  },
  {
    image: imgDdec,
    title: "The Team",
    link: "/theTeam",
    text: `Distributed throughout the space is the Afterglow team:
      Harmonic Analysts, signal creators, and additional field personnel
      working quietly behind the scenes to maintain favorable atmospheric
      conditions. Guests may also encounter hidden artifacts, subtle
      interventions, and other traces of ongoing research from Afterglow
      Enterprises LLC. Think fun art, secret installations, and silly
      interactive comedy, all designed to keep the vibe just right.`,
  },
  {
    image: imgC8ae,
    title: "The Venue",
    link: "/theVenue",
    text: (
      <>
        The venue for Afterglow is 616 Lavaca Street, located right downtown in
        Austin, Texas.
        <br />
        <a
          href="https://www.eventbrite.com/e/afterglow-a-late-night-dance-party-tickets-1984935756280?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffb347",
            fontWeight: 700,
            textDecoration: "underline",
            display: "inline-block",
            marginTop: 8,
          }}
        >
          purchase tickets here
        </a>
      </>
    ),
  },
];

export default function EventInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els =
      containerRef.current?.querySelectorAll<HTMLElement>(".scroll-animate");
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
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Animated psychedelic background — behind everything */}
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${bg})`, zIndex: -1 }}
        aria-hidden="true"
      />
      {/* TrippyRings background, absolutely positioned, transparent, non-interactive */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <TrippyRings />
      </div>
      {/* Full viewport hero image with overlayed welcome text */}
      <div
        className="event-hero-image-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <img src={imgF58c} alt="Afterglow Hero" className="event-hero-image" />
        <div className="event-hero-welcome">
          <span className="hero-title">afterglow</span>
          <span className="hero-subtitle">
            two stages of musical chillness and interactive art
          </span>
          <span className="hero-details">
            April 25, 2026 · 11PM · 616 Lavaca St, Austin TX
          </span>
          <a
            href="https://www.eventbrite.com/e/afterglow-a-late-night-dance-party-tickets-1984935756280?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Buy Tickets — Limited Time $5
          </a>
        </div>
      </div>
      {/* <EventInfoImageOverlay /> */}
      <div
        className="event-info"
        ref={containerRef}
        style={{ position: "relative", zIndex: 2 }}
      >
        {sections.map((section, i) => (
          <section key={i} className="event-section scroll-animate">
            <div className="event-section-image">
              <Link to={section.link}>
                <img src={section.image} alt={section.title} />
                <span className="image-overlay-label">click for more info</span>
              </Link>
            </div>
            <div className="event-section-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </section>
        ))}
      </div>
      <div
        className="event-info-bottom-link"
        style={{ position: "relative", zIndex: 3 }}
      >
        <Link to="/forReal">what is it really?</Link>
      </div>
    </div>
  );
}
