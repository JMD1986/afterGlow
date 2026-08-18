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
import Releafs from "./components/pages/Releafs";
import DrBobbyBannerMpc from "./components/pages/DrBobbyBannerMpc";
import HollyHart from "./components/pages/HollyHart";
import SugarplumShari from "./components/pages/SugarplumShari";
import PricklyPairPopsAtx from "./components/pages/PricklyPairPopsAtx";
import JoeyReyes from "./components/pages/JoeyReyes";
import JoeyZ from "./components/pages/JoeyZ";
import NeilsSoundSafari from "./components/pages/NeilsSoundSafari";
import TreyAbraham from "./components/pages/TreyAbraham";
import ImprovisedSuperjam from "./components/pages/ImprovisedSuperjam";
import PineappleSchnoodz from "./components/pages/PineappleSchnoodz";
import TrippyPoster from "./components/pages/TrippyPoster";
import Schedule from "./components/pages/Schedule";
import Music from "./components/pages/Music";
import Art from "./components/pages/Art";
import Comedy from "./components/pages/Comedy";
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
        <Route path="/promo/releafs" element={<Releafs />} />
        <Route path="/promo/drBobbyBannerMpc" element={<DrBobbyBannerMpc />} />
        <Route path="/promo/hollyHart" element={<HollyHart />} />
        <Route path="/promo/sugarplumShari" element={<SugarplumShari />} />
        <Route
          path="/promo/pricklyPairPopsAtx"
          element={<PricklyPairPopsAtx />}
        />
        <Route path="/promo/joeyReyes" element={<JoeyReyes />} />
        <Route path="/promo/joeyZ" element={<JoeyZ />} />
        <Route path="/promo/neilsSoundSafari" element={<NeilsSoundSafari />} />
        <Route path="/promo/treyAbraham" element={<TreyAbraham />} />
        <Route
          path="/promo/improvisedSuperjam"
          element={<ImprovisedSuperjam />}
        />
        <Route
          path="/promo/pineappleSchnoodz"
          element={<PineappleSchnoodz />}
        />
        <Route path="/trippyposter" element={<TrippyPoster />} />
        <Route path="/promo/schedule" element={<Schedule />} />
        <Route path="/promo/music" element={<Music />} />
        <Route path="/promo/art" element={<Art />} />
        <Route path="/promo/comedy" element={<Comedy />} />
      </Routes>
    </>
  );
};

export default App;
