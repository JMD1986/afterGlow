import { joeyZSheep, joeyZSheep2, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoeyZ: FC = () => (
  <PromoPerformer
    name="Joey Z"
    nameSize="large"
    headshot={joeyZSheep2}
    performingImage={joeyZSheep}
    infoBgImage={clownBackground11}
    room="The Side Stage"
    setTime="11:15PM"
    performanceType="Surrealist Clown Show"
    qa={[
      {
        question: "Who are you?",
        answer: (
          <>
          Joey Z is an avant-garde comedian entertainer based in Austin TX who has been 
            performing for over a decade sharing the stage with acts such as Danny Brown, 
            Reggie Watts, Rushadicus, Natalie Palamides, Zach Zucker, Robby Hoffman, 
            The Lizard Man, and Wolves Glendale to name a few.
          </>
        )
      },
      {
        question: "Tell us about yourself?",
        answer: (
          <>
            In early 2025 Joey released an audio demo of his one man show Trip Sitter which a Buzz Music review called 
            "revolutionary". His live act features elements of stand up comedy, story telling, 
            music, and performance art. 
          </>
        ),
      },
    ]}
  />
);

export default JoeyZ;
