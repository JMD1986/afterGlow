import bg from "../../assets/backgrounds/pppsychedelic.webp";
import type { FC } from "react";

const TIME_SLOTS = [
  "10:30 PM",
  "10:45 PM",
  "11:00 PM",
  "11:15 PM",
  "11:30 PM",
  "11:45 PM",
  "12:00 AM",
  "12:15 AM",
  "12:30 AM",
  "12:45 AM",
  "1:00 AM",
  "1:15 AM",
  "1:30 AM",
];

// Grid columns: 1=labels, 2=Ambient, 3=Main Stage/Portal, 4=Atrium
// Grid rows: 1-based, matching TIME_SLOTS index + 1
interface RoomEvent {
  startIndex: number; // index into TIME_SLOTS
  span: number; // number of 15-min slots
  name: string;
  subtext?: string;
  col: number; // grid column (2, 3, or 4)
  accent: string;
}

const EVENTS: RoomEvent[] = [
  // Ambient Chillout Room (col 2)
  {
    startIndex: 2,
    span: 2,
    name: "Jayk Wilson",
    subtext: "Gong Soundbath",
    col: 2,
    accent: "#a78bfa",
  },
  {
    startIndex: 5,
    span: 2,
    name: "Bryan Gary",
    subtext: "Modular Synth",
    col: 2,
    accent: "#a78bfa",
  },
  {
    startIndex: 8,
    span: 2,
    name: "Justin Alvarado",
    subtext: "Kosmische Synth Journey (couchbound)",
    col: 2,
    accent: "#a78bfa",
  },
  // Main Stage / The Portal (col 3)
  {
    startIndex: 4,
    span: 2,
    name: "Driftside",
    subtext: "Album Release",
    col: 3,
    accent: "#34d399",
  },
  {
    startIndex: 7,
    span: 3,
    name: "Driftside",
    subtext: "Big Band Set",
    col: 3,
    accent: "#34d399",
  },
  // The Atrium (col 4)
  {
    startIndex: 2,
    span: 11,
    name: "Brian McAughn and Jo Foster",
    subtext: "present The Vibe Reader and The Jester",
    col: 4,
    accent: "#f472b6",
  },
];

const ROOMS = [
  { name: "Ambient Chillout Room", accent: "#a78bfa", col: 2 },
  { name: "Main Stage / The Portal", accent: "#34d399", col: 3 },
  { name: "The Atrium", accent: "#f472b6", col: 4 },
];

const Schedule: FC = () => (
  // Outer: fills viewport, centers the instagram card
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
        background: "rgba(0,0,0,0.55)",
        zIndex: 1,
      }}
      aria-hidden="true"
    />

    {/* Instagram portrait card — 4:5 aspect ratio */}
    <div
      style={{
        position: "relative",
        zIndex: 2,
        width: "min(100dvw, calc(100dvh * 4 / 5))",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "7% 3% 3%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <h1
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "#fff",
            fontSize: "clamp(1.8rem, 8vw, 3.5rem)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            margin: 0,
            textShadow: "0 2px 16px rgba(0,0,0,0.9)",
          }}
        >
          Afterglow
        </h1>
        <p
          style={{
            fontFamily: "'Blisey', sans-serif",
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.7rem, 3vw, 1.2rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: "12px 0 0",
          }}
        >
          Schedule
        </p>
      </div>

      {/* Room header row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "18% repeat(3, 1fr)",
          gap: "0 1%",
          marginBottom: "1%",
          flexShrink: 0,
        }}
      >
        <div />
        {ROOMS.map((room) => (
          <div
            key={room.name}
            style={{
              fontFamily: "'Blisey', sans-serif",
              color: room.accent,
              fontSize: "clamp(0.5rem, 2vw, 0.85rem)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textAlign: "center",
              paddingBottom: "1%",
              borderBottom: `2px solid ${room.accent}`,
              textShadow: `0 0 12px ${room.accent}88`,
            }}
          >
            {room.name}
          </div>
        ))}
      </div>

      {/*
        Main schedule grid — fills remaining card height via flex:1
        Rows use 1fr so they divide the available space equally
      */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "18% repeat(3, 1fr)",
          gridTemplateRows: `repeat(${TIME_SLOTS.length}, 1fr)`,
          gap: "0 1%",
        }}
      >
        {/* Time labels */}
        {TIME_SLOTS.map((t, i) => (
          <div
            key={t}
            style={{
              gridColumn: 1,
              gridRow: i + 1,
              display: "flex",
              alignItems: "flex-start",
              fontFamily: "'Blisey', sans-serif",
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(0.5rem, 2.5vw, 0.78rem)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            {t}
          </div>
        ))}

        {/* Row dividers */}
        {TIME_SLOTS.map((t, i) =>
          ROOMS.map((room) => (
            <div
              key={`div-${t}-${room.col}`}
              style={{
                gridColumn: room.col,
                gridRow: i + 1,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          )),
        )}

        {/* Doors bar — row 1, spans all 3 room columns */}
        <div
          style={{
            gridColumn: "2 / 5",
            gridRow: 1,
            alignSelf: "center",
            margin: "1% 0.5%",
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Blisey', sans-serif",
            color: "rgba(255,255,255,0.8)",
            fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textShadow: "0 0 12px rgba(255,255,255,0.4)",
            zIndex: 1,
          }}
        >
          Doors
        </div>

        {/* Events — each placed at exact grid-row + grid-column */}
        {EVENTS.map((ev, i) => (
          <div
            key={i}
            style={{
              gridColumn: ev.col,
              gridRow: `${ev.startIndex + 1} / span ${ev.span}`,
              marginTop: 2,
              marginBottom: 2,
              marginLeft: 2,
              marginRight: 2,
              background: `${ev.accent}22`,
              border: `1.5px solid ${ev.accent}bb`,
              borderRadius: 8,
              boxShadow: `0 0 18px ${ev.accent}44`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Blisey', sans-serif",
                color: "#fff",
                fontSize: "clamp(0.6rem, 2.8vw, 0.95rem)",
                textAlign: "center",
                textShadow: `0 0 10px ${ev.accent}`,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
              }}
            >
              {ev.name}
            </span>
            {ev.subtext && (
              <span
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: ev.accent,
                  fontSize: "clamp(0.45rem, 2vw, 0.75rem)",
                  textAlign: "center",
                  marginTop: 4,
                  opacity: 0.9,
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                }}
              >
                {ev.subtext}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Schedule;
