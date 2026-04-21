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
                  objectPosition: "top",
                  borderRadius: 12,
                  display: "block",
                  boxShadow: "0 4px 32px rgba(244,114,182,0.25)",
                  border: "1.5px solid rgba(244,114,182,0.3)",
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
                  fontSize: "clamp(1.4rem, 3cqi, 2.3rem)",
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
                  color: "#f472b6",
                  fontSize: "clamp(0.8rem, 1.8cqi, 1.2rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  margin: "0 0 2px",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px #f472b666",
                }}
              >
                {p.performanceType}
              </p>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#d1d5db",
                  fontSize: "clamp(0.75rem, 1.7cqi, 1.1rem)",
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
                  fontSize: "clamp(0.8rem, 1.8cqi, 1.15rem)",
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

export default Comedy;
