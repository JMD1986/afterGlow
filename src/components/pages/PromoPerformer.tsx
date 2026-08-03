import { falloutPosterAfterglow } from "../../assets/images";
import backgroundAugust22 from "../../assets/backgrounds/BackgroundAugust22.webp";
// import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { useRef, useEffect, useCallback } from "react";
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
  room: string;
  setTime: string;
  performanceType: string;
}

const sectionStyle: React.CSSProperties = {
  position: "relative",
  width: "calc(100vw - 32px)",
  maxWidth: 1080,
  aspectRatio: "4 / 5",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "15vh auto",
  containerType: "inline-size" as never,
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
  padding: "clamp(24px, 4cqi, 48px) clamp(12px, 3cqi, 24px)",
  pointerEvents: "none",
};

const PromoPerformer: FC<PromoPerformerProps> = ({
  name,
  headshot,
  performingImage,
  infoBgImage,
  qa,
  room,
  setTime,
  performanceType,
}) => {
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const infoContentRef = useRef<HTMLDivElement>(null);

  const fitContent = useCallback(() => {
    const section = infoSectionRef.current;
    const content = infoContentRef.current;
    if (!section || !content) return;

    content.style.transform = "scale(1)";
    const sectionH = section.clientHeight;
    const contentH = content.scrollHeight;
    if (contentH > sectionH) {
      const scale = (sectionH / contentH) * 0.95;
      content.style.transform = `scale(${scale})`;
    }
  }, []);

  useEffect(() => {
    fitContent();
    window.addEventListener("resize", fitContent);
    return () => window.removeEventListener("resize", fitContent);
  }, [fitContent]);

  return (
    <div style={{ background: "#000" }}>
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${backgroundAugust22})` }}
        aria-hidden="true"
      />

      {/* Section 1: Headshot */}
      <div className="promo-section" style={sectionStyle}>
        <img
          src={headshot}
          alt={name}
          style={{
            ...imgStyle,
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={overlayStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/*
            <span
              style={{
                ...textStyle,
                fontSize: "clamp(3.24rem, 8.1cqi, 6.48rem)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Afterglow
            </span>
            <span
              style={{
                ...textStyle,
                fontSize: "clamp(1.44rem, 4.08cqi, 2.4rem)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: "0.75em",
              }}
            >
              Meet the Performers
            </span>
            */}
          </div>
          <span
            style={{
              ...textStyle,
              fontSize: "clamp(2.88rem, 8.1cqi, 5.64rem)",
              marginBottom: "clamp(5rem, 11cqi, 9rem)",
            }}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Section 2: Info Q&A */}
      <div ref={infoSectionRef} className="promo-section" style={sectionStyle}>
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
          ref={infoContentRef}
          style={{
            ...overlayStyle,
            justifyContent: "center",
            padding: "clamp(24px, 4cqi, 48px) clamp(16px, 3cqi, 32px)",
            pointerEvents: "auto",
            transformOrigin: "center center",
          }}
        >
          <div
            style={{
              maxWidth: 800,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(14px, 2.5cqi, 28px)",
            }}
          >
            <h2
              style={{
                ...textStyle,
                fontSize: "clamp(1.9rem, 4.7cqi, 3rem)",
                marginBottom: "clamp(4px, 0.8cqi, 8px)",
              }}
            >
              {name}
            </h2>

            {qa.map((item, i) => (
              <div key={i}>
                <p
                  style={{
                    ...textStyle,
                    fontFamily: "'Blisey', sans-serif",
                    fontSize: "clamp(1.2rem, 2.7cqi, 1.85rem)",
                    marginBottom: "clamp(3px, 0.5cqi, 6px)",
                    color: "#ffb347",
                  }}
                >
                  {item.question}
                </p>
                <p
                  style={{
                    ...textStyle,
                    fontFamily: "sans-serif",
                    fontSize: "clamp(1.08rem, 2.3cqi, 1.5rem)",
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
      <div className="promo-section" style={sectionStyle}>
        <img
          src={performingImage}
          alt={`${name} performing`}
          style={{
            ...imgStyle,
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={overlayStyle}>
          <span
            style={{
              ...textStyle,
              fontSize: "clamp(2rem, 5.4cqi, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Live at Afterglow
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(6px, 1.5cqi, 12px)",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              borderRadius: 12,
              padding: "clamp(12px, 2.5cqi, 24px) clamp(20px, 4cqi, 40px)",
              marginBottom: "clamp(2rem, 5cqi, 4rem)",
            }}
          >
            <span
              style={{
                ...textStyle,
                fontFamily: "sans-serif",
                fontSize: "clamp(1.94rem, 4.86cqi, 3.06rem)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {room}
            </span>
            <span
              style={{
                ...textStyle,
                fontSize: "clamp(2.59rem, 6.48cqi, 4.38rem)",
              }}
            >
              {setTime}
            </span>
            <span
              style={{
                ...textStyle,
                fontFamily: "sans-serif",
                fontSize: "clamp(1.86rem, 4.38cqi, 2.59rem)",
                fontStyle: "italic",
              }}
            >
              {performanceType}
            </span>
          </div>
        </div>
      </div>

      {/* Section 4: Afterglow Poster */}
      <div className="promo-section" style={sectionStyle}>
        <img
          src={falloutPosterAfterglow}
          alt="Afterglow event poster"
          style={imgStyle}
        />
      </div>

      {/* Section 5: Event Details + CTA */}
      <div className="promo-section" style={sectionStyle}>
        <div
          style={{
            ...overlayStyle,
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(6px)",
              borderRadius: 16,
              padding: "clamp(24px, 4cqi, 48px) clamp(20px, 4cqi, 40px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(12px, 2.5cqi, 24px)",
            }}
          >
            <span
              style={{
                ...textStyle,
                fontSize: "clamp(3.4rem, 8.1cqi, 6.75rem)",
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
                fontSize: "clamp(1.6rem, 4cqi, 2.7rem)",
              }}
            >
              April 25, 2026 · 11PM
            </span>
            <span
              style={{
                ...textStyle,
                fontFamily: "sans-serif",
                fontSize: "clamp(1.35rem, 3.4cqi, 2rem)",
              }}
            >
              616 Lavaca St, Austin TX
            </span>
            <span
              style={{
                ...textStyle,
                fontFamily: "sans-serif",
                fontSize: "clamp(1.2rem, 3cqi, 1.75rem)",
                lineHeight: 1.6,
              }}
            >
              Music, Art, and comedy for the stone cold chillers.
              <br />
              BYOB and BYOV (bring your own vibes)
            </span>
            <span
              style={{
                ...textStyle,
                fontFamily: "sans-serif",
                fontSize: "clamp(1.35rem, 3.4cqi, 2rem)",
                fontWeight: 700,
                marginTop: 16,
              }}
            >
              ticket link in bio. DM for more info :-)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPerformer;
