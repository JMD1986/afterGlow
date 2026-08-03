import bg from "../../assets/backgrounds/pppsychedelic.webp";
import type { FC } from "react";

const TIME_SLOTS = [
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
];

// Grid columns: 1=labels, 2=Side Stage, 3=Portal, 4=Atrium
interface RoomEvent {
  startIndex: number; // index into TIME_SLOTS
  span: number; // number of 15-min slots
  name: string;
  subtext?: string;
  col: number; // grid column (2–4)
  accent: string;
}

const EVENTS: RoomEvent[] = [
  // Side Stage (col 2)
  {
    startIndex: 1,
    span: 2,
    name: "Neil Dorsey",
    subtext: "Sound Safari",
    col: 2,
    accent: "#60a5fa",
  },
  {
    startIndex: 3,
    span: 2,
    name: "Prickly Pear Cakepops",
    subtext: "sweet treats (all night)",
    col: 2,
    accent: "#60a5fa",
  },
  {
    startIndex: 5,
    span: 2,
    name: "Joey Z",
    subtext: "SHEEP",
    col: 2,
    accent: "#60a5fa",
  },
  {
    startIndex: 7,
    span: 3,
    name: "Sugar plum shari",
    subtext: "Infused Ice Cream (all night)",
    col: 2,
    accent: "#60a5fa",
  },
  // Portal (col 3)
  {
    startIndex: 3,
    span: 2,
    name: "Joey Reyes",
    subtext: "Solo Cello",
    col: 3,
    accent: "#34d399",
  },
  {
    startIndex: 7,
    span: 2,
    name: "Superjam",
    subtext: "Improvised",
    col: 3,
    accent: "#34d399",
  },
  // Atrium (col 4)
  {
    startIndex: 0,
    span: 2,
    name: "Releafs",
    subtext: "Downtempo Bass",
    col: 4,
    accent: "#f472b6",
  },
  {
    startIndex: 3,
    span: 2,
    name: "Holly Hart Paints your face",
    subtext: 'Clowncrafts (All Night)',
    col: 4,
    accent: "#f472b6",
  },
  {
    startIndex: 5,
    span: 2,
    name: "Dr. Bobby Banner MPC",
    subtext: "Live MPC Beat Set",
    col: 4,
    accent: "#f472b6",
  },
  {
    startIndex: 7,
    span: 3,
    name: `Jo Fosters "Caricature" "Artist"`,
    subtext: 'Clowncrafts (All Night)',
    col: 4,
    accent: "#f472b6",
  },
  {
    startIndex: 9,
    span: 1,
    name: "Bryan Gary",
    subtext: "Modular Ambient",
    col: 4,
    accent: "#f472b6",
  },
];

const ROOMS = [
  { name: "Side Stage", accent: "#60a5fa", col: 2 },
  { name: "Portal", accent: "#34d399", col: 3 },
  { name: "Atrium", accent: "#f472b6", col: 4 },
];

const Schedule: FC = () => (
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

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "14% repeat(3, 1fr)",
          gridTemplateRows: `repeat(${TIME_SLOTS.length}, 1fr)`,
          gap: "0 0.2%",
        }}
      >
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
              fontSize: "clamp(0.75rem, 3.5vw, 1.15rem)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              paddingRight: 2,
            }}
          >
            {t}
          </div>
        ))}

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

        {EVENTS.map((ev, i) => (
          <div
            key={i}
            style={{
              gridColumn: ev.col,
              gridRow: `${ev.startIndex + 1} / span ${ev.span}`,
              margin: 2,
              alignSelf: "start",
              height: "calc(100% + 7px)",
              background: "rgba(0, 0, 0, 0.78)",
              border: `1.5px solid ${ev.accent}bb`,
              borderRadius: 8,
              boxShadow: `0 0 18px ${ev.accent}44`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:
                ev.name.startsWith("Jo Fosters") ? "flex-start" : "center",
              padding: ev.name.startsWith("Jo Fosters")
                ? "2px 4px"
                : "4px 4px",
              boxSizing: "border-box",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Blisey', sans-serif",
                color: "#fff",
                fontSize: "clamp(0.7rem, 2.8vw, 1.15rem)",
                textAlign: "center",
                textShadow: `0 0 10px ${ev.accent}`,
                letterSpacing: "0.04em",
                lineHeight: 1.15,
                marginTop: ev.name.startsWith("Jo Fosters") ? 2 : 0,
              }}
            >
              {ev.name}
            </span>
            {ev.subtext && (
              <span
                style={{
                  fontFamily: "'Blisey', sans-serif",
                  color: ev.accent,
                  fontSize: "clamp(0.5rem, 2vw, 0.8rem)",
                  textAlign: "center",
                  marginTop: 2,
                  opacity: 0.9,
                  letterSpacing: "0.03em",
                  lineHeight: 1.15,
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
