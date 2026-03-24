import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Survey from "./components/Survey";
import MusicToggle from "./components/MidiBackground";
import Explanation from "./components/Explanation";
import CountdownModal from "./components/CountdownModal";
import EventInfo from "./components/EventInfo";
import ForReal from "./components/ForReal";
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
              {surveyDone && <CountdownModal />}
              <main className="main-content">
                <EventInfo />
              </main>
            </>
          }
        />
        <Route path="/explanation" element={<Explanation />} />
        <Route
          path="/eventInfo"
          element={
            <main className="main-content">
              <EventInfo />
            </main>
          }
        />
        <Route
          path="/forReal"
          element={
            <main className="main-content">
              <ForReal />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
