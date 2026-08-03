import { joeyZSheep, joeyZSheep2, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoeyZ: FC = () => (
  <PromoPerformer
    name="Joey Z"
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
        question: "What influences are you channeling?",
        answer: "Pino Palladino, Thundercat, and the feeling of a perfect pocket.",
      },
      {
        question: "Tell us about yourself?",
        answer: (
          <>
            In early 2025 Joey released 
            an audio demo of his one man show Trip Sitter which a Buzz Music review called 
            "revolutionary". His live act features elements of stand up comedy, story telling, 
            music, and performance art. Joey is currently working on his surreal clown 
            show SHEEP which has toured to 20 cities since 2025.
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Noodling on a quiet bass line, thrift-store vinyl digging, and zero-plan Sundays.",
      },
    ]}
  />
);

export default JoeyZ;
