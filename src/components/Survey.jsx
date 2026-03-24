import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import surveyBg from "../assets/images/b0b6e3adad261f511b3205f0f125e3ba.jpg";
import img6ea6 from "../assets/images/6ea6e702af903f2ea78d50bf67586742.jpg";
import img3192 from "../assets/images/3192e5096ad1e2e4f50236ae4e1849dd.jpg";
import img8828 from "../assets/images/88284e6d2410dd97ff03d95d6bcd814a.jpg";
import img6764 from "../assets/images/6764b30da07c880043fc8d4388b534b7.jpg";
import imgB7e5 from "../assets/images/b7e5018e67e516a745ee7019cb7865ed.jpg";
import imgdD123 from "../assets/images/d41235b2ca4321ebaa8721d6fdf2d185.jpg";
import TrippyTriangles from "./animations/TrippyTriangles";
import "./Survey.css";

const surveyImages = [img6ea6, img3192, img8828, img6764, imgB7e5, imgdD123];

function getRandomBg(exclude) {
  const pool = surveyImages.filter((img) => img !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function Survey({ onComplete, onStartMusic }) {
  const navigate = useNavigate();
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

  function handleCompleteAndNavigate(data) {
    onComplete(data);
    navigate("/eventInfo");
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
                  handleCompleteAndNavigate({ vibe: "chill", share: true });
                }}
              >
                Yes, I'm Chill Like That
              </button>
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  handleCompleteAndNavigate({ vibe: "chill", share: false });
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
                  handleCompleteAndNavigate({
                    vibe: "could be chiller",
                    assist: true,
                  });
                }}
              >
                Yes, Elevate My Vibe
              </button>
              <button
                className="survey-btn"
                onClick={() => {
                  triggerPulse();
                  handleCompleteAndNavigate({
                    vibe: "could be chiller",
                    assist: false,
                  });
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
