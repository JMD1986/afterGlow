import { couchbound, couchbound2, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const Couchbound: FC = () => (
  <PromoPerformer
    name="Justin Alvarado"
    headshot={couchbound2}
    performingImage={couchbound}
    infoBgImage={clownBackground11}
    room="Ambient Chillout Room"
    setTime="12:45AM"
    performanceType="Kosmische Synth Journey"
    qa={[
      {
        question: "What equipment are you using?",
        answer: "Octatrack mk2 & Pioneer DDJ-SX2",
      },
      {
        question: "What influences are you channeling?",
        answer: "BVDub, East of Oceans, Brock Van Wey, Earth House Hold",
      },
      {
        question: "Where can we hear your music?",
        answer: "Biannualbeats.com",
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer: "Gardening, laid out on the couch",
      },
    ]}
  />
);

export default Couchbound;
