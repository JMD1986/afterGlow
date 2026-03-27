import React from "react";
import { falloutLobby, fallloutLobby2 } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { Link } from "react-router-dom";

const Atrium: React.FC = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="page-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div
        className="atrium-page page-content"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1>The Atrium</h1>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <img
            src={falloutLobby}
            alt="Atrium Lobby"
            style={{
              maxWidth: 360,
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 2px 12px #0002",
            }}
          />
          <img
            src={fallloutLobby2}
            alt="Atrium Lobby 2"
            style={{
              maxWidth: 360,
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 2px 12px #0002",
            }}
          />
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          The Atrium is your gateway to Afterglow—a vibrant, welcoming space
          designed for connection and decompression. Patrons 21 and up are
          invited to <strong>BYOB</strong> and enjoy the evening responsibly.
          Explore our pop-up <strong>record store</strong> featuring curated
          vinyl, discover <strong>limited edition merch</strong> exclusive to
          the event, and challenge your friends at our selection of{" "}
          <strong>free arcade games</strong>.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Relax in the <strong>lounge area</strong> with comfortable seating,
          meet fellow guests, and recharge with a variety of{" "}
          <strong>snacks</strong> available throughout the night. The Atrium is
          the perfect place to settle in, catch up, and set the tone for your
          Afterglow experience.
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
    </div>
  );
};

export default Atrium;
