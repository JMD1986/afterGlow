import { joFosterHeadshot, joFoster2, clownBackground9 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoFoster: FC = () => (
  <PromoPerformer
    name="Jo Foster"
    headshot={joFosterHeadshot}
    performingImage={joFoster2}
    infoBgImage={clownBackground9}
    room="The Atrium"
    setTime="All Night"
    performanceType="Vibe Readings"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer: "Glow sticks, playing cards, and a crystal ball ooooooo",
      },
      {
        question: "What influences are you channeling?",
        answer: "Ace Ventura, Pet Detective",
      },
      {
        question: "Where can we see your comedy?",
        answer:
          "Usually doing improv in a basement on 7th street or standup at hot dog themed benefit shows",
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Mostly grinding and hustling but occasionally licking my lips in satisfaction at the state of my perfect life",
      },
    ]}
  />
);

export default JoFoster;
