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
      width: "100dvw",
      height: "100dvh",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
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
        width: "min(100dvw, calc(100dvh * 4 / 5))",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "5% 4% 4%",
        boxSizing: "border-box",
      }}
    >
      {/* Page title */}
      <div style={{ textAlign: "center", marginBottom: "2%", flexShrink: 0 }}>
        <h1
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "#fff",
            fontSize: "clamp(4rem, 14vw, 7rem)",
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
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "2%",
          overflow: "hidden",
        }}
      >
        {PERFORMERS.map((p) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              flexDirection: p.flip ? "row-reverse" : "row",
              gap: "4%",
              alignItems: "center",
              flex: 1,
              minHeight: 0,
            }}
          >
            <div
              style={{
                flex: "0 0 38%",
                maxWidth: "38%",
                height: "100%",
              }}
            >
              <img
                src={p.headshot}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                  boxShadow: "0 4px 32px rgba(52,211,153,0.25)",
                  border: "1.5px solid rgba(52,211,153,0.3)",
                }}
              />
            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0,
                textAlign: p.flip ? "right" : "left",
                overflow: "hidden",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#fff",
                  fontSize: "clamp(2.8rem, 6cqi, 4.6rem)",
                  letterSpacing: "0.08em",
                  margin: "0 0 4px",
                  textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                }}
              >
                {p.name}
              </h2>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#34d399",
                  fontSize: "clamp(1.6rem, 3.6cqi, 2.4rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  margin: "0 0 2px",
                  textShadow: "0 0 10px #34d39966",
                }}
              >
                {p.performanceType}
              </p>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#d1d5db",
                  fontSize: "clamp(1.5rem, 3.4cqi, 2.2rem)",
                  letterSpacing: "0.06em",
                  margin: "0 0 8px",
                  WebkitTextStroke: "1px #000",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {p.room} · {p.setTime}
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "#d1d5db",
                  fontSize: "clamp(1.6rem, 3.6cqi, 2.3rem)",
                  lineHeight: 1.3,
                  margin: 0,
                  WebkitTextStroke: "1px #000",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Blisey', sans-serif",
                    color: "#d6c2a1",
                    fontSize: "0.72em",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 2,
                    WebkitTextStroke: "1px #000",
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
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
  </div>
);

export default Art;
