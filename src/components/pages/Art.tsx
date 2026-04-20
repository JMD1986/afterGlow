import bg from "../../assets/images/art.webp";
import { treyAbraham, canvas, colorburnAV } from "../../assets/images";
import type { FC } from "react";

interface Performer {
  name: string;
  headshot: string;
  equipment: string;
  performanceType: string;
  room: string;
  setTime: string;
  flip?: boolean;
}

const PERFORMERS: Performer[] = [
  {
    name: "Trey Abraham",
    headshot: treyAbraham,
    equipment: "Acrylic on canvas — live painting",
    performanceType: "Live Visual Art",
    room: "Main Stage",
    setTime: "All Night",
    flip: false,
  },
  {
    name: "Colorburn AV",
    headshot: colorburnAV,
    equipment: "Live AV rig",
    performanceType: "Audio/Visual Performance",
    room: "The Portal",
    setTime: "All Night",
    flip: true,
  },
];

const Art: FC = () => (
  <div
    style={{
      position: "relative",
      minHeight: "100dvh",
      width: "100vw",
      background: "#000",
      overflowX: "hidden",
    }}
  >
    <div
      className="page-bg"
      style={{ backgroundImage: `url(${bg})` }}
      aria-hidden="true"
    />
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 1,
      }}
      aria-hidden="true"
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 900,
        margin: "0 auto",
        padding: "48px 20px 180px",
      }}
    >
      {/* Page title */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "#fff",
            fontSize: "clamp(2rem, 7vw, 3.5rem)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            margin: 0,
            textShadow: "0 2px 20px rgba(0,0,0,0.9)",
          }}
        >
          Afterglow
        </h1>
        <p
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "#34d399",
            fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "6px 0 0",
            textShadow: "0 0 16px #34d39988",
          }}
        >
          Art
        </p>
      </div>

      {/* Performer rows */}
      {PERFORMERS.map((p) => (
        <div
          key={p.name}
          style={{
            display: "flex",
            flexDirection: p.flip ? "row-reverse" : "row",
            gap: 32,
            alignItems: "center",
            marginBottom: 56,
            flexWrap: "wrap",
          }}
        >
          {/* Image */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: 320,
              minWidth: 200,
            }}
          >
            <img
              src={p.headshot}
              alt={p.name}
              style={{
                width: "100%",
                borderRadius: 12,
                display: "block",
                boxShadow: "0 4px 32px rgba(52,211,153,0.25)",
                border: "1.5px solid rgba(52,211,153,0.3)",
              }}
            />
          </div>

          {/* Text */}
          <div
            style={{
              flex: "1 1 260px",
              minWidth: 200,
              textAlign: p.flip ? "right" : "left",
            }}
          >
            <h2
              style={{
                fontFamily: "'Blisey', sans-serif",
                color: "#fff",
                fontSize: "clamp(2.8rem, 8vw, 4rem)",
                letterSpacing: "0.08em",
                margin: "0 0 8px",
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              }}
            >
              {p.name}
            </h2>
            <p
              style={{
                fontFamily: "'Blisey', sans-serif",
                color: "#34d399",
                fontSize: "clamp(1.5rem, 5vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                margin: "0 0 4px",
                textShadow: "0 0 10px #34d39966",
              }}
            >
              {p.performanceType}
            </p>
            <p
              style={{
                fontFamily: "'Blisey', sans-serif",
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
                letterSpacing: "0.08em",
                margin: "0 0 16px",
              }}
            >
              {p.room} · {p.setTime}
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(1.6rem, 4vw, 2rem)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.75em",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                Equipment
              </span>
              {p.equipment}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Art;
