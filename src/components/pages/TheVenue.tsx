import React from "react";
import { falloutOutside } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";

const TheVenue: React.FC = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="page-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div
        className="page-content"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1>Fallout Theater</h1>

        <img
          src={falloutOutside}
          alt="Fallout Theater exterior"
          style={{
            width: "100%",
            borderRadius: 12,
            marginBottom: 28,
            boxShadow: "0 2px 16px #0003",
          }}
        />

        <p style={{ fontSize: 18, lineHeight: 1.75, marginBottom: 20 }}>
          Fallout Theater is Austin's premier destination for alternative comedy
          — home to improv, sketch, and stand-up that pushes the edges of the
          form. Located in the heart of downtown Austin at 7th and Lavaca,
          Fallout hosts shows seven nights a week and runs a full roster of
          classes for both improv and sketch comedy.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.75, marginBottom: 32 }}>
          For one night, Afterglow takes over the space — transforming its three
          distinct areas into an immersive, multi-stage mood environment. The
          theater's intimate scale and flexible layout make it the ideal
          container for an evening designed around attunement, descent, and
          controlled atmospheric drift.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <span style={{ fontSize: 16 }}>📍</span>
          <a
            href="https://maps.google.com/?q=616+Lavaca+St,+Austin,+TX+78701"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 16, color: "#3a6", fontWeight: 600 }}
          >
            616 Lavaca St, Austin, TX 78701
          </a>
        </div>

        <a
          href="https://maps.google.com/?q=616+Lavaca+St,+Austin,+TX+78701"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 12px #0002",
          }}
        >
          <img
            src="https://staticmap.openstreetmap.de/staticmap.php?center=30.2690,-97.7420&zoom=16&size=900x350&markers=30.2690,-97.7420,red-pushpin"
            alt="Map showing Fallout Theater at 616 Lavaca St, Austin TX"
            style={{ width: "100%", display: "block" }}
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default TheVenue;
