import { Link } from "react-router-dom";
import "./Explanation.css";

export default function Explanation() {
  return (
    <main className="explanation-page">
      <h1>What's This All About?</h1>
      <p>
        afterGlow is a vibe-driven experience designed to connect you with
        like-minded individuals based on how you feel — not what you think.
      </p>
      <p>
        The survey you just took helps us understand your current energy so we
        can tailor what comes next to match your wavelength.
      </p>
      <Link to="/" className="back-link">
        ← Back to afterGlow
      </Link>
    </main>
  );
}
