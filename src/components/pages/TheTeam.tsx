import React from "react";
import { vibeReader, jester } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";

const imgStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  marginBottom: 12,
  boxShadow: "0 2px 12px #0002",
};

const cardStyle: React.CSSProperties = {
  flex: "1 1 260px",
  maxWidth: 300,
  textAlign: "center",
};

const TheTeam: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1>The Team</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>
          Distributed throughout the space is the Afterglow team — working
          quietly behind the scenes (and sometimes very much in front of them)
          to maintain favorable atmospheric conditions.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}
        >
          <div style={cardStyle}>
            <img src={vibeReader} alt="Vibe Reader" style={imgStyle} />
            <h2 style={{ margin: "12px 0 8px" }}>Vibe Reader</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Vibe Reader is an interactive clown installation focusing on XxxXX
              — a diagnostic presence moving through the space, calibrating the
              room's emotional frequency one encounter at a time.
            </p>
          </div>

          <div style={cardStyle}>
            <img src={jester} alt="The Jester" style={imgStyle} />
            <h2 style={{ margin: "12px 0 8px" }}>The Jester</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              The Jester is a clown operating at the fringes of decorum — a
              roaming agent of levity and mild disruption, here to keep the
              atmosphere loose and the guests pleasantly off-balance.
            </p>
          </div>

          <div style={cardStyle}>
            <iframe
              src="https://www.instagram.com/p/C59bC7BpYyc/embed"
              width="300"
              height="360"
              frameBorder={0}
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
              style={{
                borderRadius: 12,
                border: "none",
                display: "block",
                marginBottom: 12,
              }}
              title="Colorburn on Instagram"
            />
            <h2 style={{ margin: "12px 0 8px" }}>Colorburn</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Colorburn is an AV artist weaving live visuals and sound into a
              single continuous signal — reactive, immersive, and calibrated to
              the energy of the room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
