import { pineappleSchnoodz, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const PineappleSchnoodz: FC = () => (
  <PromoPerformer
    name="Pineapple Schnoodz"
    nameSize="small"
    headshot={pineappleSchnoodz}
    performingImage={pineappleSchnoodz}
    infoBgImage={clownBackground11}
    headshotZoom={1.4}
    performingZoom={1.4}
    subtitle="Vendors"
    room="The Atrium"
    setTime="All Night"
    performanceType="THC"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer: "edibles, prerolls, concentrates",
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer: "What do you think?",
      },
    ]}
  />
);

export default PineappleSchnoodz;
