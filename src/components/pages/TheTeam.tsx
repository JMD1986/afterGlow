import React from "react";
import {
  vibeReader,
  jester,
  treyAbraham,
  colorburnAV,
} from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { Link } from "react-router-dom";

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
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="page-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div
        className="page-content"
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
            <img src={colorburnAV} alt="Colorburn" style={imgStyle} />
            <h2 style={{ margin: "12px 0 8px" }}>Colorburn</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Colorburn is an AV artist weaving live visuals and sound into a
              single continuous signal — reactive, immersive, and calibrated to
              the energy of the room.
            </p>
          </div>
          <div style={cardStyle}>
            <img src={treyAbraham} alt="Trey Abraham" style={imgStyle} />
            <h2 style={{ margin: "12px 0 8px" }}>Trey Abraham</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Trey Abraham is a mixed media artist, visual performer, and
              musician living in Austin, Texas whose works are often initiated
              as stream of consciousness paintings that synesthetically
              interpret live music
            </p>
          </div>
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
    </div>
  );
};

export default TheTeam;
