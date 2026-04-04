import React from "react";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { Link } from "react-router-dom";
import "../EventInfo.css";

const WhatIs: React.FC = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="page-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div
        className="page-content"
        style={{
          marginBottom: 48,
          maxWidth: 800,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
          marginBottom: 48,
        }}
      >
        <h1>What is Afterglow?</h1>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.75,
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          Afterglow is where old Austin still exists — a celebration of
          experimental electronic music, comedy, and vibe elevation.
        </p>

        <p style={{ fontSize: 20, lineHeight: 1.75, marginBottom: 24 }}>
          One of Austin's oldest independent comedy spaces is opening its doors
          and letting the weirdos from the experimental music scene take over
          for a night.
        </p>

        <p style={{ fontSize: 20, lineHeight: 1.75, marginBottom: 24 }}>
          If you're tired of the corporate commodification of Austin culture and
          the slow erosion of the city's weirdness — look no further.
        </p>

        <p style={{ fontSize: 20, lineHeight: 1.75, marginBottom: 24 }}>
          Shows are cheap, because the economy kinda sucks right now. Expect
          multiple ambient musicians running simultaneous sets, a collective of
          instrumentalists in the main room performing improvisational
          experimental music, and comedic performances and installations brought
          to you by Fallout Theater's own clowning and immersive comedy members.
        </p>

        <p
          style={{
            fontSize: 24,
            lineHeight: 1.75,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          All homegrown. All fun. All weird as hell.
        </p>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            to="/eventInfo"
            style={{ color: "#3a6", fontWeight: 600, fontSize: 18 }}
          >
            ← Back to Event Info
          </Link>
        </div>
      </div>

      {/* Floating ticket footer */}
      <div className="floating-ticket-footer visible">
        <a
          href="https://www.eventbrite.com/e/afterglow-a-late-night-dance-party-tickets-1984935756280?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-ticket-link"
        >
          Buy Tickets — Limited Time $5
        </a>
      </div>
    </div>
  );
};

export default WhatIs;
