import { sugarPlumShari, sugarPlumShari2, clownBackground10 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const SugarplumShari: FC = () => (
  <PromoPerformer
    name="Sugarplum Shari"
    nameSize="medium"
    headshot={sugarPlumShari}
    performingImage={sugarPlumShari2}
    infoBgImage={clownBackground10}
    room="The Atrium"
    setTime="All Night"
    performanceType="Ice Cream & Emotional Support"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer:
          "Glitter, a candy cane mic stand, and enough tulle to soft-launch a parade.",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "The Nutcracker gone rogue, Trixie Mattel, and every mall Santa who ever winked.",
      },
      {
        question: "Where can we see you perform?",
        answer: (
          <>
            sugarplumshari.com
            <br />
            Instagram — @sugarplum.shari
            <br />
            First Friday fairy nights at Fallout
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Bubble baths, baking cookies I refuse to share, and rewatching holiday specials in July.",
      },
    ]}
  />
);

export default SugarplumShari;
