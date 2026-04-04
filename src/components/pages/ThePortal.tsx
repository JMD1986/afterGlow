import React from "react";
import { mainStage, mainStage2, driftside } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { Link } from "react-router-dom";
import "../EventInfo.css";

const ThePortal: React.FC = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="page-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div
        className="portal-page page-content"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
          marginBottom: 48,
        }}
      >
        <h1>The Portal</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 28 }}>
          The Portal is an intimate 100-capacity theater — a dedicated
          transmission chamber where the night reaches its fullest signal. With
          a close-quarters stage and focused sound design, every performance
          here is felt as much as heard. For the April 2026 event it will
          feature Austin's number one power ambient band Driftside.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={driftside}
            alt="Driftside"
            style={{
              maxWidth: 260,
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 2px 12px #0002",
            }}
          />
          <div style={{ flex: "1 1 280px", maxWidth: 520 }}>
            <h2 style={{ marginBottom: 12 }}>Driftside — EP Release</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75 }}>
              Afterglow is proud to host the EP release performance from
              Driftside, an Austin-based collective working across steel guitar,
              saxophone, synthesizers, and percussion. Their live set unfolds as
              a continuous, slow-moving transmission — downtempo, ambient, and
              trip-hop interlaced with live instrumentation and field-recorded
              texture. This performance marks the official release of their
              debut EP, played in full in one of Austin's most intimate rooms.
            </p>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <iframe
            src="https://www.instagram.com/p/DITogfHtKkF/embed"
            width="400"
            height="480"
            frameBorder={0}
            scrolling="no"
            allowTransparency
            allow="encrypted-media"
            style={{ borderRadius: 12, border: "none", maxWidth: "100%" }}
            title="Driftside on Instagram"
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          The Fallot Portal Stage is an 100-capacity stage designed for
          intimate, immersive performances.
          <img
            src={mainStage}
            alt="The Portal Stage"
            style={{
              maxWidth: 420,
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 2px 16px #0003",
            }}
          />
        </div>
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

export default ThePortal;
