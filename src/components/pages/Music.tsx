import bg from "../../assets/images/modularsynth.webp";
import {
  jaykWilsonBio,
  jaykWilson,
  bryanGary,
  brianGary2,
  couchbound2,
  couchbound,
  driftside,
} from "../../assets/images";
import type { FC } from "react";

interface Performer {
  name: string;
  headshot: string;
  performingImage: string;
  equipment: string;
  performanceType: string;
  room: string;
  setTime: string;
  flip?: boolean;
  imgPosition?: string;
}

const PERFORMERS: Performer[] = [
  {
    name: "Jayk Wilson",
    headshot: jaykWilsonBio,
    performingImage: jaykWilson,
    equipment: '36" Gongland Om Gong & Soma Laboratory Lyra-8',
    performanceType: "Gong Soundbath",
    room: "Ambient Chillout Room",
    setTime: "11:00 PM",
    flip: false,
    imgPosition: "center 30%",
  },
  {
    name: "Bryan Gary",
    headshot: bryanGary,
    performingImage: brianGary2,
    equipment:
      "100% Modular — furry handmade monster case w/ Winter Modular Eloquencer",
    performanceType: "Modular Synth",
    room: "Ambient Chillout Room",
    setTime: "11:45 PM",
    flip: true,
  },
  {
    name: "Justin Alvarado",
    headshot: couchbound2,
    performingImage: couchbound,
    equipment: "Octatrack MK2 & Pioneer DDJ-SX2",
    performanceType: "Kosmische Synth Journey",
    room: "Ambient Chillout Room",
    setTime: "12:45 AM",
    flip: false,
  },
  {
    name: "Driftside",
    headshot: driftside,
    performingImage: driftside,
    equipment: "Steel guitar, saxophone, synthesizers & percussion",
    performanceType: "Album Release and Big Band Set",
    room: "Main Stage / The Portal",
    setTime: "11:30 PM",
    flip: true,
  },
];

const Music: FC = () => (
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
        background: "rgba(0,0,0,0.65)",
        zIndex: 1,
      }}
      aria-hidden="true"
    />

    {/* Instagram portrait card */}
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
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3%", flexShrink: 0 }}>
        <h1
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "#fff",
            fontSize: "clamp(1.6rem, 7vw, 3rem)",
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
            color: "#a78bfa",
            fontSize: "clamp(0.7rem, 2.5vw, 1.1rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "4px 0 0",
            textShadow: "0 0 16px #a78bfa88",
          }}
        >
          Music
        </p>
      </div>

      {/* 2×2 performer grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "3%",
        }}
      >
        {PERFORMERS.map((p) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(167,139,250,0.07)",
              border: "1px solid rgba(167,139,250,0.25)",
              borderRadius: 10,
              padding: "4% 5%",
              overflow: "hidden",
              gap: "4%",
            }}
          >
            <img
              src={p.headshot}
              alt={p.name}
              style={{
                width: "80%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                objectPosition: p.imgPosition ?? "top",
                borderRadius: 10,
                border: "2px solid rgba(167,139,250,0.5)",
                boxShadow: "0 0 16px rgba(167,139,250,0.3)",
                flexShrink: 0,
              }}
            />
            <div style={{ textAlign: "center", overflow: "hidden" }}>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#fff",
                  fontSize: "clamp(1.3rem, 5vw, 2rem)",
                  letterSpacing: "0.06em",
                  margin: "0 0 2px",
                  textShadow: "0 1px 8px rgba(0,0,0,0.8)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {p.name}
              </p>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#a78bfa",
                  fontSize: "clamp(1rem, 3.6vw, 1.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 2px",
                  textShadow: "0 0 8px #a78bfa66",
                }}
              >
                {p.performanceType}
              </p>
              <p
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
                  letterSpacing: "0.06em",
                  margin: 0,
                }}
              >
                {p.setTime}
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "clamp(0.8rem, 2.6vw, 1.2rem)",
                  lineHeight: 1.4,
                  margin: "3px 0 0",
                }}
              >
                {p.equipment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Music;
