import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Survey from "./components/Survey";
import Explanation from "./components/Explanation";
import CountdownModal from "./components/CountdownModal";
import EventInfo from "./components/EventInfo";
import ForReal from "./components/ForReal";
import WhatIs from "./components/pages/WhatIs";
import Atrium from "./components/pages/Atrium";
import Soundbath from "./components/pages/Soundbath";
import ThePortal from "./components/pages/ThePortal";
import TheTeam from "./components/pages/TheTeam";
import TheVenue from "./components/pages/TheVenue";
import Promo from "./components/pages/Promo";
import BrianClown from "./components/pages/BrianClown";
import JaykWilson from "./components/pages/JaykWilson";
import JoFoster from "./components/pages/JoFoster";
import BryanGary from "./components/pages/BryanGary";
import Couchbound from "./components/pages/Couchbound";
import "./App.css";
import type { FC } from "react";

interface SurveyProps {
  onComplete: () => void;
}

// ScrollToTop component
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <EventInfo />
            </main>
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
        <Route
          path="/whatIs"
          element={
            <main className="main-content">
              <WhatIs />
            </main>
          }
        />
        <Route
          path="/atrium"
          element={
            <main className="main-content">
              <Atrium />
            </main>
          }
        />
        <Route
          path="/soundbath"
          element={
            <main className="main-content">
              <Soundbath />
            </main>
          }
        />
        <Route
          path="/thePortal"
          element={
            <main className="main-content">
              <ThePortal />
            </main>
          }
        />
        <Route
          path="/theTeam"
          element={
            <main className="main-content">
              <TheTeam />
            </main>
          }
        />
        <Route
          path="/theVenue"
          element={
            <main className="main-content">
              <TheVenue />
            </main>
          }
        />
        <Route path="/promo" element={<Promo />} />
        <Route path="/promo/brianClown" element={<BrianClown />} />
        <Route path="/promo/jaykWilson" element={<JaykWilson />} />
        <Route path="/promo/joFoster" element={<JoFoster />} />
        <Route path="/promo/bryanGary" element={<BryanGary />} />
        <Route path="/promo/couchbound" element={<Couchbound />} />
      </Routes>
    </>
  );
};

export default App;
