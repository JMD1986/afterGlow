import { treyAbraham, treyAbraham2, clownBackground10 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const TreyAbraham: FC = () => (
  <PromoPerformer
    name="Trey Abraham"
    nameSize="medium"
    headshot={treyAbraham}
    performingImage={treyAbraham2}
    infoBgImage={clownBackground10}
    room="Main Stage"
    setTime="All Night"
    performanceType="Live Visual Art"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Acrylic on canvas, a fistful of palette knives, and whatever gets left in the tray by the end of the night.",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "Aboriginal dot work, stained glass, and the way streetlights smear when you squint at them.",
      },
      {
        question: "Where can we see your art?",
        answer: (
          <>
            treyabraham.art
            <br />
            Instagram — @trey.abraham.art
            <br />
            East Austin Studio Tour every November
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Painting something with no plan, then staring at it for an hour deciding if it is finished.",
      },
    ]}
  />
);

export default TreyAbraham;
