import {
  pricklyPearPops,
  blueOwl,
  sugarPlumShari,
  pineappleSchnoodz,
  afterglowSpotlightPinkOrangeBlue,
} from "../../assets/images";
import { useRef, useEffect, useCallback, useState } from "react";
import type { FC } from "react";

const PERF_NAME_INSET = "10%";
const PERF_NAME_MAX_PX = 72;
const PERF_NAME_MIN_PX = 32;
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

const shadowTwinStyle: React.CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "0",
  pointerEvents: "none",
  textShadow:
    "0 0 40px rgba(0,0,0,0.95), 0 0 90px rgba(0,0,0,0.9), 0 0 160px rgba(0,0,0,0.85), 0 20px 100px rgba(0,0,0,0.9), 0 0 240px rgba(0,0,0,0.8)",
};

const outlineStyle: React.CSSProperties = {
  WebkitTextStroke: "1px #888",
  paintOrder: "stroke fill",
  textShadow:
    "1px 0 0 #888, -1px 0 0 #888, 0 1px 0 #888, 0 -1px 0 #888, 1px 1px 0 #888, -1px -1px 0 #888, 1px -1px 0 #888, -1px 1px 0 #888, 0 2px 12px rgba(0,0,0,0.8)",
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

interface Vendor {
  name: string;
  logo: string;
  zoom?: number;
  focusX?: string;
}

const VENDORS: Vendor[] = [
  { name: "Prickly Pear Pops", logo: pricklyPearPops, zoom: 1.5 },
  { name: "Blue Owl Brewing", logo: blueOwl },
  { name: "Sugarplum Shari", logo: sugarPlumShari, focusX: "95%" },
  { name: "Pineapple Schnoodz", logo: pineappleSchnoodz },
];

const title = "Vendors";
const room = "The Atrium";
const setTime = "All Night";
const performanceType = "Treats, Drinks & Good Vibes";

const Vendors: FC = () => {
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
    document.fonts?.ready.then(fitPerfName);
    return () => window.removeEventListener("resize", fitPerfName);
  }, [fitPerfName]);

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

      <div style={phoneFrameStyle}>
        <div
          className="promo-section"
          style={{
            ...sectionStyle,
            transform: "translateY(120px)",
            overflow: "visible",
          }}
        >
          {/* Shadow-only twin of the name below the photo grid */}
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
            {title}
          </span>

          {/* Circular vendor logos orbiting the center */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "clamp(253px, 63.25cqi, 598px)",
                height: "clamp(253px, 63.25cqi, 598px)",
                transform: "translate(-50%, calc(-50% - clamp(60px, 12cqi, 100px)))",
                animation: "vendorOrbit 24s linear infinite",
              }}
            >
              {VENDORS.map((v, i) => {
                const angle = (i / VENDORS.length) * 360;
                return (
                  <div
                    key={v.name}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "clamp(110px, 27.6cqi, 245px)",
                      height: "clamp(110px, 27.6cqi, 245px)",
                      marginTop: "calc(clamp(110px, 27.6cqi, 245px) / -2)",
                      marginLeft: "calc(clamp(110px, 27.6cqi, 245px) / -2)",
                      transform: `rotate(${angle}deg) translateY(calc(clamp(253px, 63.25cqi, 598px) / -2 + clamp(110px, 27.6cqi, 245px) / 2))`,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: `rotate(${-angle}deg)`,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          overflow: "hidden",
                          background: "#fff",
                          border: "3px solid rgba(167,139,250,0.6)",
                          boxShadow: "0 0 24px rgba(167,139,250,0.5)",
                          animation: "vendorCounterSpin 24s linear infinite",
                        }}
                      >
                        <img
                          src={v.logo}
                          alt={v.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: `${v.focusX ?? "50%"} center`,
                            transform: `scale(${v.zoom ?? 1})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <style>{`
              @keyframes vendorOrbit {
                from { transform: translate(-50%, calc(-50% - clamp(60px, 12cqi, 100px))) rotate(0deg); }
                to { transform: translate(-50%, calc(-50% - clamp(60px, 12cqi, 100px))) rotate(360deg); }
              }
              @keyframes vendorCounterSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }
            `}</style>
          </div>

          <div style={{ ...overlayStyle, justifyContent: "flex-end" }}>
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
              {title}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 1.5cqi, 12px)",
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
    </div>
  );
};

export default Vendors;
