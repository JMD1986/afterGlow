import { jaykWilsonBio, jaykWilson, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const ImprovisedSuperjam: FC = () => (
  <PromoPerformer
    name="Improvised Superjam"
    headshot={jaykWilsonBio}
    performingImage={jaykWilson}
    infoBgImage={imgB7e5}
    room="Main Stage / The Portal"
    setTime="1:00AM"
    performanceType="All-Hands Improv Jam"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Whatever the room brings — synths, drums, horns, voices, and one brave cowbell.",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "The Grateful Dead parking lot, Sun Ra Arkestra energy, and that moment when everyone locks in.",
      },
      {
        question: "Where can we hear this music?",
        answer: (
          <>
            Nowhere and everywhere — it only exists once.
            <br />
            Catch the glow while it lasts.
            <br />
            Tag us: #afterglowsuperjam
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "By not chilling — by finding the pocket and staying there until sunrise.",
      },
    ]}
  />
);

export default ImprovisedSuperjam;
