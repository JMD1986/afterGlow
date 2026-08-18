import React from "react";
import { falloutLobby, fallloutLobby2 } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { Link } from "react-router-dom";
import { TICKET_URL } from "../../constants";
import "../EventInfo.css";

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
          marginBottom: 48,
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
          Alongside the lounge, pop-up <strong>record store</strong>,{" "}
          <strong>limited edition merch</strong>, and{" "}
          <strong>free arcade games</strong>, the Atrium hosts a small
          performance area with live performers and DJs, plus hands-on
          activations throughout the night.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          On August 22nd, catch sets from{" "}
          <Link to="/promo/drBobbyBannerMpc" style={{ color: "#3a6", fontWeight: 600 }}>
            Dr. Bobby Banner MPC
          </Link>
          ,{" "}
          <Link to="/promo/releafs" style={{ color: "#3a6", fontWeight: 600 }}>
            Releafs
          </Link>
          , and{" "}
          <Link to="/promo/bryanGary" style={{ color: "#3a6", fontWeight: 600 }}>
            Bryan Gary
          </Link>
          . Activations that night include{" "}
          <Link to="/promo/hollyHart" style={{ color: "#3a6", fontWeight: 600 }}>
            Holly Hart
          </Link>{" "}
          Presents Facepaint Roulette and{" "}
          <Link to="/promo/joFoster" style={{ color: "#3a6", fontWeight: 600 }}>
            Jo Foster
          </Link>
          &apos;s &quot;Caricature&quot; &quot;Artist&quot;.
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

      {/* Floating ticket footer */}
      <div className="floating-ticket-footer visible">
        <a
          href={TICKET_URL}
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

export default Atrium;
