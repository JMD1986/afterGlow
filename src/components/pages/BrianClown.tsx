import {
  brianHeadshot,
  brianMcAughnPerforming,
  clownBackground12,
} from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const BrianClown: FC = () => (
  <PromoPerformer
    name="Brian McAughan"
    headshot={brianHeadshot}
    performingImage={brianMcAughnPerforming}
    infoBgImage={clownBackground12}
    room="The Atrium"
    setTime="11PM – End"
    performanceType="Vibe Genie"
    qa={[
      {
        question: "What equipment are you using?",
        answer: "Just a plastic genie lamp and a costume!",
      },
      {
        question: "What influences are you channeling?",
        answer: "Chris&Jack, and Zach Galifianakis",
      },
      {
        question: "Where can we see you perform?",
        answer: (
          <>
            Fallout performances:
            <br />
            Comedy Fusion — every Thursday at 7:00
            <br />
            Patricia — second Friday of each month at 10:00
            <br />
            Wet Blanket at Mutant Night — last Sunday of each month at 6:00
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "I play Pokemon, Slay the Spire, or any other kind of single-player strategy roguelike lol. Or watch mad mondo movies.",
      },
    ]}
  />
);

export default BrianClown;
