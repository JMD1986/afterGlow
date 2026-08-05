import { joeyReyes, joeyReyes2, clownBackground9 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoeyReyes: FC = () => (
  <PromoPerformer
    name="Joey Reyes"
    nameSize="large"
    headshot={joeyReyes}
    performingImage={joeyReyes2}
    infoBgImage={clownBackground9}
    room="The Portal"
    setTime="11:45PM"
    performanceType="Electro-Acoustic Cello Performance"
    qa={[
       {
        question: "What influences are you channeling?",
        answer: "These days I am taking inspiration from the small pockets of nature around my home: the flight patterns of the cardinals in the backyard, the way the whiptails seem to relish in the same heat that challenges me, and the drone of the cicadas in the oak tree.",
      },
  
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "It feels cliche, but to relax I gravitate to things that slow me down and force presence in my immediate world: yoga classes, biking around the neighborhood, a morning spent baking.",
      },    

    ]}
  />
);

export default JoeyReyes;
