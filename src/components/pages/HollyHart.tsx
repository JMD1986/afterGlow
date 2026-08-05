import { hollyHart, hollyHart2, clownBackground12 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const HollyHart: FC = () => (
  <PromoPerformer
    name="Holly Hart"
    nameSize="large"
    headshot={hollyHart2}
    performingImage={hollyHart}
    infoBgImage={clownBackground12}
    room="The Atrium"
    setTime="All Night"
    performanceType="Comedy & Soft Chaos"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer:
          "A wireless mic, three backup personalities, and an unreasonable amount of eye contact.",
      },
      {
        question: "What influences are you channeling?",
        answer: "Maria Bamford, early SNL cold opens, and my group chat at 2AM.",
      },
      {
        question: "Where can we see your comedy?",
        answer: (
          <>
            Fallout Theater open mics
            <br />
            Instagram — @hollyhart.lol
            <br />
            YouTube — Holly Hart Standup
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Reorganizing my spice rack alphabetically, then undoing it for fun.",
      },
    ]}
  />
);

export default HollyHart;
