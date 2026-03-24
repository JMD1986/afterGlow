import { useState, useMemo } from "react";
import surveyBg from "../assets/images/b0b6e3adad261f511b3205f0f125e3ba.jpg";
import { images } from "../assets/images";
import TrippyTriangles from "./TrippyTriangles";
import "./Survey.css";

function getRandomBg(exclude) {
  const pool = images.filter((img) => img !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function Survey({ onComplete, onStartMusic }) {
  const [step, setStep] = useState(1);
  const [firstAnswer, setFirstAnswer] = useState(null);
  const [pulseKey, setPulseKey] = useState(0);

  function triggerPulse() {
    setPulseKey((k) => k + 1);
  }

  // Pick two random backgrounds once on mount (excluding the first-screen image)
  const [chillBg, chillerBg] = useMemo(() => {
    const bg1 = getRandomBg(surveyBg);
    let bg2 = getRandomBg(surveyBg);
    while (bg2 === bg1) bg2 = getRandomBg(surveyBg);
    return [bg1, bg2];
  }, []);

  function handleFirstAnswer(answer) {
    triggerPulse();
    setFirstAnswer(answer);
    setStep(2);
    onStartMusic();
  }

  const currentBg =
    step === 1 ? surveyBg : firstAnswer === "chill" ? chillBg : chillerBg;

  return (
    <div
      className="survey-overlay"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <div className="trippy-wrapper">
        <div key={pulseKey} className="trippy-pulse" />
        <TrippyTriangles />
      </div>
      <div className="survey-content">
        {step === 1 && (
          <>
            <div className="survey-question">
              <h1>How would you consider your vibe?</h1>
            </div>
            <div className="survey-choices">
              <button
                className="survey-btn"
                onClick={() => handleFirstAnswer("chill")}
              >
                Chill
              </button>
              <button
                className="survey-btn"
                onClick={() => handleFirstAnswer("could be chiller")}
              >
                Could Be Chiller
              </button>
            </div>
          </>
        )}

        {step === 2 && firstAnswer === "chill" && (
          <>
            <div className="survey-question">
              <h1>
                You've indicated your vibe is chill — would you like to share
                your vibe with likeminded individuals?
              </h1>
            </div>
            <div className="survey-choices">
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  onComplete({ vibe: "chill", share: true });
                }}
              >
                Yes, I'm Chill Like That
              </button>
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  onComplete({ vibe: "chill", share: false });
                }}
              >
                Not Really. I Keep My Vibes to Myself
              </button>
            </div>
          </>
        )}

        {step === 2 && firstAnswer === "could be chiller" && (
          <>
            <div className="survey-question">
              <h1>
                You've indicated you could use a vibe lift — would you like
                assistance elevating your vibe?
              </h1>
            </div>
            <div className="survey-choices">
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  onComplete({ vibe: "could be chiller", assist: true });
                }}
              >
                Yes, Elevate My Vibe
              </button>
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  onComplete({ vibe: "could be chiller", assist: false });
                }}
              >
                No Thanks, I'll Figure It Out
              </button>
            </div>
          </>
        )}
      </div>
      <a href="/explanation" className="survey-about-link">
        what's this all about?
      </a>
    </div>
  );
}
