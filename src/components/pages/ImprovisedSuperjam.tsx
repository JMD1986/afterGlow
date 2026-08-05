import { jaykWilsonBio, jaykWilson, clownBackground9 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const ImprovisedSuperjam: FC = () => (
  <PromoPerformer
    name="Improvised Superjam"
    nameSize="large"
    headshot={jaykWilsonBio}
    performingImage={jaykWilson}
    infoBgImage={clownBackground9}
    room="Main Stage / The Portal"
    setTime="11:45PM"
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
          "Terry Riley, Bill Evans, A Grateful Dead bootleg tape after getting copied 76 times",
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
