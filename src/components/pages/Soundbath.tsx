import React from "react";
import { couchbound, bryanGary, jaykWilson } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";

const Soundbath: React.FC = () => {
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
        className="soundbath-page"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1>Soundbath</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
          The Soundbath is a dedicated alignment zone where our in-house
          atmosphere engineers and sensory technicians administer a sequence of
          live sound environments using modular synthesizers, live
          instrumentation, and responsive projected visuals. Each session is
          structured to encourage frequency tuning, emotional recalibration, and
          the kind of deep full-body relaxation not typically available in
          unsupervised conditions.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}
        >
          <div
            style={{ flex: "1 1 260px", maxWidth: 280, textAlign: "center" }}
          >
            <img
              src={jaykWilson}
              alt="Jayk Wilson"
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 12,
                boxShadow: "0 2px 12px #0002",
              }}
            />
            <h2 style={{ margin: "12px 0 8px" }}>Jayk Wilson</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Austin-based multi-instrumentalist Jayk Wilson presents an
              immersive late-night experience, combining the deep resonance of a
              three-foot gong with the ethereal tones of an analog drone
              synthesizer, crafting a psychedelic fusion of ambient drones and
              slowly unfolding textures that transcend space and time.
            </p>
          </div>
          <div
            style={{ flex: "1 1 260px", maxWidth: 280, textAlign: "center" }}
          >
            <img
              src={bryanGary}
              alt="Bryan Gary"
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 12,
                boxShadow: "0 2px 12px #0002",
              }}
            />
            <h2 style={{ margin: "12px 0 8px" }}>Bryan Gary</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Bryan is a composer and multi instrumentalist crafting long-form
              ambient works with modular synthesis. Their music unfolds as a
              meditative space, designed to encourage deep listening—whether as
              a passive presence or an active immersion. Each piece is a
              deliberate act of reflection, inviting a heightened awareness of
              self, connection, and the fragile interplay between internal and
              external worlds.
            </p>
            <a
              href="https://bryangary.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 8,
                color: "#3a6",
                fontWeight: 600,
              }}
            >
              Listen on Bandcamp
            </a>
          </div>
          <div
            style={{ flex: "1 1 260px", maxWidth: 280, textAlign: "center" }}
          >
            <img
              src={couchbound}
              alt="Couchbound"
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 12,
                boxShadow: "0 2px 12px #0002",
              }}
            />
            <h2 style={{ margin: "12px 0 8px" }}>Couchbound</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Couchbound is a duo of Austin-based musicians, producers, and
              sound artists working across modular synthesis, field recording,
              and live processing. Their work explores the intersection of
              ambient, drone, and experimental music, creating immersive
              soundscapes that invite deep listening and introspection.
            </p>
            <a
              href="https://biannualbeats.bandcamp.com/album/net-ether"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 8,
                color: "#3a6",
                fontWeight: 600,
              }}
            >
              Listen to Net Ether on Bandcamp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundbath;
const jayk =
  "Austin-based multi-instrumentalist Jayk Wilson presents an immersive late-night experience, combining the deep resonance of a three-foot gong with the ethereal tones of an analog drone synthesizer, crafting a psychedelic fusion of ambient drones and slowly unfolding textures that transcend space and time.";
const bryan =
  "Bryan is a composer and multi instrumentalist crafting long-form ambient works with modular synthesis. Their music unfolds as a meditative space, designed to encourage deep listening- whether as a passive presence or an active immersion. Each piece is a deliberate act of reflection, inviting a heightened awareness of self, connection, and the fragile interplay between internal and external worlds.";
const couchbound =
  "Couchbound is a duo of Austin-based musicians, producers, and sound artists working across modular synthesis, field recording, and live processing. Their work explores the intersection of ambient, drone, and experimental music, creating immersive soundscapes that invite deep listening and introspection.";
