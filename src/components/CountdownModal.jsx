import { useState, useEffect } from "react";
import "./CountdownModal.css";

const TARGET = new Date("2026-04-25T23:00:00").getTime();

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownModal() {
  const [timeLeft, setTimeLeft] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function tick() {
      const now = Date.now();
      const diff = TARGET - now;

      if (diff <= 0) {
        setTimeLeft("00 : 00 : 00 : 00");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${pad(days)} : ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`,
      );
    }

    tick();
    const id = setInterval(tick, 1000);

    // Remove is-off flicker after 2s
    const offTimer = setTimeout(() => setReady(true), 2000);

    return () => {
      clearInterval(id);
      clearTimeout(offTimer);
    };
  }, []);

  return (
    <div className="countdown-modal">
      <div className="screen glitch">
        <div className={`clock ${ready ? "" : "is-off"}`}>
          <span className="time" data-time={timeLeft}>
            {timeLeft}
          </span>
        </div>
        <div className="figure" />
        <div className="figure-mask" />
      </div>
    </div>
  );
}
