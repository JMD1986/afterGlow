import bg from "../../assets/images/clown1.webp";
import {
  brianHeadshot,
  brianMcAughnPerforming,
  joFosterHeadshot,
  img171f,
} from "../../assets/images";
import type { FC } from "react";

interface Performer {
  name: string;
  headshot: string;
  equipment: string;
  performanceType: string;
  room: string;
  setTime: string;
  flip?: boolean;
  extraMargin?: number;
}

const PERFORMERS: Performer[] = [
  {
    name: "Brian McAughan",
    headshot: brianHeadshot,
    equipment: "Plastic genie lamp & costume",
    performanceType: "Vibe Genie",
    room: "The Atrium",
    setTime: "11PM – End",
    flip: false,
  },
  {
    name: "Jo Foster",
    headshot: joFosterHeadshot,
    equipment: "Glow sticks, playing cards & crystal ball",
    performanceType: "Vibe Readings",
    room: "The Atrium",
    setTime: "All Night",
    flip: true,
    extraMargin: 80,
  },
];

const Comedy: FC = () => (
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
        padding: "48px 20px 64px",
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
            color: "#f472b6",
            fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "6px 0 0",
            textShadow: "0 0 16px #f472b688",
          }}
        >
          Comedy
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
            marginBottom: p.extraMargin ?? 56,
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
                height: 320,
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: 12,
                display: "block",
                boxShadow: "0 4px 32px rgba(244,114,182,0.25)",
                border: "1.5px solid rgba(244,114,182,0.3)",
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
                color: "#f472b6",
                fontSize: "clamp(1.5rem, 5vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                margin: "0 0 4px",
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px #f472b666",
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

export default Comedy;
