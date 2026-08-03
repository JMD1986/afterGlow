import { bryanGary, brianGary2, clownBackground10 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const BryanGary: FC = () => (
  <PromoPerformer
    name="Bryan Gary"
    headshot={bryanGary}
    performingImage={brianGary2}
    infoBgImage={clownBackground10}
    room="Atrium"
    setTime="12:15AM"
    performanceType="Modular Synth"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "100% modular in a furry handmade monster case with a great deal of emphasis on the Winter Modular Eloquencer sequencer.",
      },
      {
        question: "What influences are you channeling?",
        answer: "Chihei Hatakeyama. Haruhisa Tanaka.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            bryangary.bandcamp.com
            <br />
            Latest Album — biannualbeats.bandcamp.com
            <br />
            YouTube — Bryan Gary Music
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer: "Video games and making music for my cats.",
      },
    ]}
  />
);

export default BryanGary;
