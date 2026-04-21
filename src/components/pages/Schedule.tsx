import bg from "../../assets/backgrounds/pppsychedelic.webp";
import type { FC } from "react";

const TIME_SLOTS = [
  "10:30",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "1:00",
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
    startIndex: 1,
    span: 2,
    name: "Jayk Wilson",
    subtext: "Gong Soundbath",
    col: 2,
    accent: "#a78bfa",
  },
  {
    startIndex: 3,
    span: 1,
    name: "Colorburn AV\n(All Night)",
    col: 2,
    accent: "#a78bfa",
  },
  {
    startIndex: 4,
    span: 2,
    name: "Bryan Gary",
    subtext: "Modular Synth",
    col: 2,
    accent: "#a78bfa",
  },
  {
    startIndex: 7,
    span: 2,
    name: "Justin Alvarado",
    subtext: "Live Hardware Set",
    col: 2,
    accent: "#a78bfa",
  },
  // Main Stage / The Portal (col 3)
  {
    startIndex: 1,
    span: 2,
    name: "Trey Abraham",
    subtext: "Live Painting (All Night)",
    col: 3,
    accent: "#34d399",
  },
  {
    startIndex: 3,
    span: 2,
    name: "Driftside",
    subtext: "Album Release",
    col: 3,
    accent: "#34d399",
  },
  {
    startIndex: 6,
    span: 3,
    name: "Driftside",
    subtext: "Big Band Set",
    col: 3,
    accent: "#34d399",
  },
  // The Atrium (col 4)
  {
    startIndex: 1,
    span: 8,
    name: "Brian McAughn and Jo Foster",
    subtext: "present The Vibe Reader and The Jester",
    col: 4,
    accent: "#f472b6",
  },
];

const ROOMS = [
  { name: "Chillout Room", accent: "#a78bfa", col: 2 },
  { name: "The Portal", accent: "#34d399", col: 3 },
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
        padding: "3% 9% 3% 3%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "1.5%",
          top: "50%",
          transform: "translateY(-50%)",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontFamily: "'Blisey', sans-serif",
          color: "rgba(255,255,255,0.8)",
          fontSize: "clamp(1.4rem, 4.4vw, 2.1rem)",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          textShadow: "0 2px 12px rgba(0,0,0,0.85)",
          whiteSpace: "nowrap",
          wordBreak: "keep-all",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        Afterglow Schedule
      </div>

      {/* Room header row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "14% repeat(3, 1fr)",
          gap: "0 0.2%",
          marginBottom: "2%",
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
              fontSize: "clamp(1rem, 4vw, 1.7rem)",
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
          gridTemplateColumns: "14% repeat(3, 1fr)",
          gridTemplateRows: `repeat(${TIME_SLOTS.length}, 1fr)`,
          gap: "0 0.2%",
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
              justifyContent: "flex-end",
              fontFamily: "'Blisey', sans-serif",
              color: "#fff",
              fontSize: "clamp(0.845rem, 4.225vw, 1.313rem)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              paddingRight: 2,
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
            background: "rgba(0, 0, 0, 0.78)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "2.4em",
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
              gridRow:
                ev.name === "Justin Alvarado" ||
                ev.name === "Brian McAughn and Jo Foster"
                  ? `${ev.startIndex + 1} / 10`
                  : `${ev.startIndex + 1} / span ${ev.span}`,
              marginTop:
                ev.name === "Justin Alvarado" ||
                ev.name === "Brian McAughn and Jo Foster"
                  ? 0
                  : 2,
              marginBottom:
                ev.name === "Justin Alvarado" ||
                ev.name === "Brian McAughn and Jo Foster"
                  ? 0
                  : 2,
              marginLeft: 2,
              marginRight: 2,
              alignSelf: "start",
              height:
                ev.name === "Justin Alvarado" ||
                ev.name === "Brian McAughn and Jo Foster"
                  ? "100%"
                  : "calc(100% + 7px)",
              background: "rgba(0, 0, 0, 0.78)",
              border: `1.5px solid ${ev.accent}bb`,
              borderRadius: 8,
              boxShadow: `0 0 18px ${ev.accent}44`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:
                ev.name === "Justin Alvarado" ||
                ev.name === "Brian McAughn and Jo Foster"
                  ? "flex-start"
                  : "center",
              padding:
                ev.name === "Brian McAughn and Jo Foster"
                  ? "88px 8px 6px"
                  : ev.name === "Justin Alvarado"
                    ? "8px 8px 6px"
                    : "6px 8px",
              boxSizing: "border-box",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {ev.name === "Colorburn AV\n(All Night)" ? (
              <>
                <span
                  style={{
                    fontFamily: "'Blisey', sans-serif",
                    color: "#fff",
                    fontSize: "clamp(0.637rem, 2.925vw, 0.975rem)",
                    textAlign: "center",
                    textShadow: `0 0 10px ${ev.accent}`,
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                  }}
                >
                  Colorburn AV
                </span>
                <span
                  style={{
                    fontFamily: "'Blisey', sans-serif",
                    color: ev.accent,
                    fontSize: "clamp(0.49rem, 2.25vw, 0.75rem)",
                    textAlign: "center",
                    textShadow: `0 0 10px ${ev.accent}`,
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                  }}
                >
                  (All Night)
                </span>
              </>
            ) : (
              <span
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: "#fff",
                  fontSize:
                    ev.name === "Driftside"
                      ? "clamp(1.05rem, 4.9vw, 1.65rem)"
                      : "clamp(1.2rem, 5.6vw, 1.9rem)",
                  textAlign: "center",
                  textShadow: `0 0 10px ${ev.accent}`,
                  letterSpacing: "0.05em",
                  lineHeight: 1.2,
                }}
              >
                {ev.name}
              </span>
            )}
            {ev.subtext && (
              <span
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: ev.accent,
                  fontSize:
                    ev.name === "Brian McAughn and Jo Foster"
                      ? "clamp(0.88rem, 3.9vw, 1.46rem)"
                      : "clamp(0.585rem, 2.6vw, 0.975rem)",
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
