import { falloutPosterAfterglow } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import type { FC, ReactNode } from "react";

interface QA {
  question: string;
  answer: ReactNode;
}

export interface PromoPerformerProps {
  name: string;
  headshot: string;
  performingImage: string;
  infoBgImage: string;
  qa: QA[];
}

const sectionStyle: React.CSSProperties = {
  position: "relative",
  width: 1080,
  height: 1350,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
};

const textStyle: React.CSSProperties = {
  color: "#fff",
  fontFamily: "'Blisey', sans-serif",
  textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
  textAlign: "center",
};

const imgStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90%",
  maxHeight: "90%",
  objectFit: "contain",
  zIndex: 1,
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "48px 24px",
  pointerEvents: "none",
};

const PromoPerformer: FC<PromoPerformerProps> = ({
  name,
  headshot,
  performingImage,
  infoBgImage,
  qa,
}) => {
  return (
    <div style={{ background: "#000" }}>
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />

      {/* Section 1: Headshot */}
      <div style={sectionStyle}>
        <img src={headshot} alt={name} style={imgStyle} />
        <div style={overlayStyle}>
          <span
            style={{
              ...textStyle,
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Meet the Performers
          </span>
          <span
            style={{ ...textStyle, fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Section 2: Info Q&A */}
      <div style={sectionStyle}>
        <img
          src={infoBgImage}
          alt="Background"
          style={{
            ...imgStyle,
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            ...overlayStyle,
            justifyContent: "center",
            padding: "48px 32px",
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              maxWidth: 800,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <h2 style={{ ...textStyle, fontSize: 36, marginBottom: 8 }}>
              {name}
            </h2>

            {qa.map((item, i) => (
              <div key={i}>
                <p
                  style={{
                    ...textStyle,
                    fontFamily: "'Blisey', sans-serif",
                    fontSize: 22,
                    marginBottom: 6,
                    color: "#ffb347",
                  }}
                >
                  {item.question}
                </p>
                <p
                  style={{
                    ...textStyle,
                    fontFamily: "sans-serif",
                    fontSize: 18,
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Performance */}
      <div style={sectionStyle}>
        <img
          src={performingImage}
          alt={`${name} performing`}
          style={imgStyle}
        />
        <div style={overlayStyle}>
          <span
            style={{
              ...textStyle,
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Live at Afterglow
          </span>
          <span />
        </div>
      </div>

      {/* Section 4: Afterglow Poster */}
      <div style={sectionStyle}>
        <img
          src={falloutPosterAfterglow}
          alt="Afterglow event poster"
          style={imgStyle}
        />
      </div>

      {/* Section 5: Event Details + CTA */}
      <div style={sectionStyle}>
        <div
          style={{
            ...overlayStyle,
            justifyContent: "center",
            gap: 24,
            pointerEvents: "auto",
          }}
        >
          <span
            style={{
              ...textStyle,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            afterglow
          </span>
          <span
            style={{
              ...textStyle,
              fontFamily: "sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
            }}
          >
            April 25, 2026 · 11PM
          </span>
          <span
            style={{
              ...textStyle,
              fontFamily: "sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            }}
          >
            616 Lavaca St, Austin TX
          </span>
          <a
            href="https://www.eventbrite.com/e/afterglow-a-late-night-dance-party-tickets-1984935756280?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...textStyle,
              fontFamily: "sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontWeight: 700,
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: 12,
              padding: "16px 40px",
              color: "#fff",
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            Buy Tickets — Limited Time $5
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoPerformer;
