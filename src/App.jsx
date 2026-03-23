import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Survey from "./components/Survey";
import MusicToggle from "./components/MidiBackground";
import Explanation from "./components/Explanation";
import "./App.css";

function App() {
  const [surveyDone, setSurveyDone] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  function startMusic() {
    if (audioRef.current && !musicPlaying) {
      audioRef.current.play();
      setMusicPlaying(true);
      setMusicStarted(true);
    }
  }

  function toggleMute() {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play();
      setMusicPlaying(true);
    }
  }

  function handleSurveyComplete() {
    setSurveyDone(true);
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/return-to-innocence.mp3"
        loop
        preload="auto"
      />
      {musicStarted && (
        <MusicToggle playing={musicPlaying} onToggle={toggleMute} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!surveyDone && (
                <Survey
                  onComplete={handleSurveyComplete}
                  onStartMusic={startMusic}
                />
              )}
              <main className="main-content"></main>
            </>
          }
        />
        <Route path="/explanation" element={<Explanation />} />
      </Routes>
    </>
  );
}

export default App;
