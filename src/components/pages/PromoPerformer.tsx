import {
  falloutPosterAfterglow,
  afterglowSpotlightPinkOrangeBlue,
} from "../../assets/images";
// import backgroundAugust22 from "../../assets/backgrounds/BackgroundAugust22.webp";
// import bg from "../../assets/backgrounds/pppsychedelic.webp";
import { CURRENT_POSTER } from "../../constants";
import { useRef, useEffect, useCallback, useState } from "react";
import type { FC, ReactNode } from "react";

interface QA {
  question: string;
  answer: ReactNode;
}

export type NameSize = "large" | "medium" | "small";

export interface PromoPerformerProps {
  name: string;
  nameSize?: NameSize;
  headshot: string;
  performingImage: string;
  infoBgImage: string;
  qa: QA[];
  room: string;
  setTime: string;
  performanceType: string;
  /** 1 = no zoom, 1.5 = zoomed in 50% */
  headshotZoom?: number;
  /** Point held fixed while zooming: "0%" frames the left of the photo */
  headshotFocusX?: string;
  performingZoom?: number;
  performingFocusX?: string;
  /** Word shown under "Meet the" (defaults to "Performers") */
  subtitle?: string;
}

const NAME_SIZE_STYLES: Record<NameSize, string> = {
  large: "clamp(3.74rem, 10.53cqi, 7.33rem)",
  medium: "clamp(2.8rem, 7.9cqi, 5.5rem)",
  small: "clamp(2.05rem, 5.8cqi, 4rem)",
};

// The performance-section name is measured and sized to span the width between
// these side margins. It only wraps once a single line would fall below MIN.
const PERF_NAME_INSET = "15%";
const PERF_NAME_MAX_PX = 64;
const PERF_NAME_MIN_PX = 28;
const PERF_NAME_MEASURE_PX = 100;

const phoneFrameStyle: React.CSSProperties = {
  width: 383,
  height: 852,
  overflow: "hidden",
  margin: "40px auto",
  position: "relative",
  flexShrink: 0,
};

const sectionStyle: React.CSSProperties = {
  position: "relative",
  width: "calc(100vw - 32px)",
  maxWidth: 1080,
  aspectRatio: "4 / 5",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  containerType: "inline-size" as never,
};

const textStyle: React.CSSProperties = {
  color: "#fff",
  fontFamily: "'Blisey', sans-serif",
  textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
  textAlign: "center",
};

const colorShiftStyle: React.CSSProperties = {
  color: "#fff",
  animation: "purplePinkShift 20s linear infinite",
};

// Applied to an invisible duplicate stacked under the photo, so the glow pools
// on the background above the photo instead of washing over the image.
const shadowTwinStyle: React.CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "0",
  pointerEvents: "none",
  textShadow:
    "0 0 40px rgba(0,0,0,0.95), 0 0 90px rgba(0,0,0,0.9), 0 0 160px rgba(0,0,0,0.85), 0 20px 100px rgba(0,0,0,0.9), 0 0 240px rgba(0,0,0,0.8)",
};

// text-stroke alone leaves gaps on some renderers, so back it with hard shadows
const outlineStyle: React.CSSProperties = {
  WebkitTextStroke: "1px #888",
  paintOrder: "stroke fill",
  textShadow:
    "1px 0 0 #888, -1px 0 0 #888, 0 1px 0 #888, 0 -1px 0 #888, 1px 1px 0 #888, -1px -1px 0 #888, 1px -1px 0 #888, -1px 1px 0 #888, 0 2px 12px rgba(0,0,0,0.8)",
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
  nameSize = "large",
  headshot,
  performingImage,
  infoBgImage,
  qa,
  room,
  setTime,
  performanceType,
  headshotZoom = 1,
  headshotFocusX = "50%",
  performingZoom = 1,
  performingFocusX = "50%",
  subtitle = "Performers",
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

  // The background only blurs once section 2 has risen to the middle of the
  // viewport, and stays blurred for every section after it.
  const [bgBlurred, setBgBlurred] = useState(false);

  useEffect(() => {
    const update = () => {
      const el = infoSectionRef.current;
      if (!el) return;
      setBgBlurred(el.getBoundingClientRect().top <= window.innerHeight / 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const perfNameRef = useRef<HTMLSpanElement>(null);
  const [perfNameFit, setPerfNameFit] = useState({
    fontSize: PERF_NAME_MAX_PX,
    wrap: false,
  });

  const fitPerfName = useCallback(() => {
    const el = perfNameRef.current;
    if (!el) return;
    const boxWidth = el.clientWidth;
    if (!boxWidth) return;

    // Measure the name as one unwrapped line at a known size, then scale
    // linearly — letter-spacing is in em, so width tracks font size.
    const prevFontSize = el.style.fontSize;
    const prevWhiteSpace = el.style.whiteSpace;
    el.style.whiteSpace = "nowrap";
    el.style.fontSize = `${PERF_NAME_MEASURE_PX}px`;
    const singleLineWidth = el.scrollWidth;
    el.style.fontSize = prevFontSize;
    el.style.whiteSpace = prevWhiteSpace;
    if (!singleLineWidth) return;

    const ideal = (PERF_NAME_MEASURE_PX * boxWidth) / singleLineWidth;
    setPerfNameFit({
      fontSize: Math.min(PERF_NAME_MAX_PX, Math.max(PERF_NAME_MIN_PX, ideal)),
      wrap: ideal < PERF_NAME_MIN_PX,
    });
  }, []);

  useEffect(() => {
    fitPerfName();
    window.addEventListener("resize", fitPerfName);
    // Blisey loads async; measuring before it lands gives the wrong width
    document.fonts?.ready.then(fitPerfName);
    return () => window.removeEventListener("resize", fitPerfName);
  }, [fitPerfName, name]);

  return (
    <div style={{ background: "#000" }}>
      <div
        className="page-bg"
        style={{
          backgroundImage: `url(${afterglowSpotlightPinkOrangeBlue})`,
          transform: "translateY(20px)",
        }}
        aria-hidden="true"
      />
      {/* Blurs the page background across the whole viewport. Painted after
          .page-bg but before the sections, so only the background is softened. */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backdropFilter: bgBlurred ? "blur(8px)" : "none",
          WebkitBackdropFilter: bgBlurred ? "blur(8px)" : "none",
          transition:
            "backdrop-filter 400ms ease, -webkit-backdrop-filter 400ms ease",
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Section 1: Headshot */}
      <div style={phoneFrameStyle}>
        <div
          className="promo-section"
          style={{
            ...sectionStyle,
            transform: "translateY(120px)",
            // lets "Meet the" sit above the photo; the phone frame still clips
            overflow: "visible",
          }}
        >
          {/* Shadow-only twin of "Meet the", stacked under the photo */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 0,
              zIndex: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                ...textStyle,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                fontSize: "clamp(2.43rem, 6.89cqi, 4.06rem)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                ...shadowTwinStyle,
              }}
            >
              Meet the
            </span>
          </div>
          {/* Wrapper clips the zoom, which would otherwise escape the section */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "calc(100% - 100px)",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <img
              src={headshot}
              alt={name}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${headshotZoom})`,
                transformOrigin: `${headshotFocusX} center`,
              }}
            />
          </div>
          <div style={{ ...overlayStyle, justifyContent: "flex-end" }}>
            {/* Zero-height anchor on the photo's top edge: "Meet the" hangs above
              it, "Performers" sits below it, independent of font metrics. */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 0,
              }}
            >
              <span
                style={{
                  ...textStyle,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  fontSize: "clamp(2.43rem, 6.89cqi, 4.06rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  ...colorShiftStyle,
                  ...outlineStyle,
                  color: "#e9d5ff",
                }}
              >
                Meet the
              </span>
              <span
                style={{
                  ...textStyle,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  fontSize: "clamp(1.87rem, 5.3cqi, 3.12rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  ...colorShiftStyle,
                  ...outlineStyle,
                  color: "#e9d5ff",
                }}
              >
                {subtitle}
              </span>
            </div>
            <span
              style={{
                ...textStyle,
                fontSize: NAME_SIZE_STYLES[nameSize],
                marginBottom: "clamp(6.5rem, 14.3cqi, 11.7rem)",
                ...colorShiftStyle,
              }}
            >
              {name}
            </span>
          </div>
        </div>
      </div>

      {/* Section 2: Info Q&A */}
      <div style={phoneFrameStyle}>
        <div
          ref={infoSectionRef}
          className="promo-section"
          style={sectionStyle}
        >
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
                      ...colorShiftStyle,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Performance */}
      <div style={phoneFrameStyle}>
        <div
          className="promo-section"
          style={{
            ...sectionStyle,
            transform: "translateY(120px)",
            // lets the name overhang the photo; the phone frame still clips
            overflow: "visible",
          }}
        >
          {/* Shadow-only twin of the name below the photo, so the glow pools on the
            background above the photo instead of washing over the image. */}
          <span
            aria-hidden="true"
            style={{
              ...textStyle,
              position: "absolute",
              top: 0,
              left: PERF_NAME_INSET,
              right: PERF_NAME_INSET,
              zIndex: 0,
              transform: "translateY(-50%)",
              fontSize: `${perfNameFit.fontSize}px`,
              whiteSpace: perfNameFit.wrap ? "normal" : "nowrap",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              ...shadowTwinStyle,
            }}
          >
            {name}
          </span>
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <img
              src={performingImage}
              alt={`${name} performing`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${performingZoom})`,
                transformOrigin: `${performingFocusX} center`,
              }}
            />
          </div>
          <div style={{ ...overlayStyle, justifyContent: "flex-end" }}>
            {/* Centered on the photo's top edge: a two-line name splits across it,
              a one-line name is halved by it. */}
            <span
              ref={perfNameRef}
              style={{
                ...textStyle,
                position: "absolute",
                top: 0,
                left: PERF_NAME_INSET,
                right: PERF_NAME_INSET,
                transform: "translateY(-50%)",
                fontSize: `${perfNameFit.fontSize}px`,
                whiteSpace: perfNameFit.wrap ? "normal" : "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                ...colorShiftStyle,
                ...outlineStyle,
              }}
            >
              {name}
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
                  ...colorShiftStyle,
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
      </div>

      {/* Section 4: Afterglow Poster */}
      <div style={phoneFrameStyle}>
        <div className="promo-section" style={sectionStyle}>
          <img
            src={CURRENT_POSTER}
            alt="Afterglow event poster"
            style={imgStyle}
          />
        </div>
      </div>

      {/* Section 5: Event Details + CTA */}
      <div style={phoneFrameStyle}>
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
    </div>
  );
};

export default PromoPerformer;
