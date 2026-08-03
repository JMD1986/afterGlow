import { joeyReyes, joeyReyes2, clownBackground9 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoeyReyes: FC = () => (
  <PromoPerformer
    name="Joey Reyes"
    headshot={joeyReyes}
    performingImage={joeyReyes2}
    infoBgImage={clownBackground9}
    room="The Portal"
    setTime="11:45PM"
    performanceType="Electro-Acoustic Cello Performance"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Fender Jazzmaster, a daisy chain of pedals, and a looping station that never clocks out.",
      },
      {
        question: "What influences are you channeling?",
        answer: "William Tyler, Stars of the Lid, and empty parking garages at dusk.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            joeyreyes.bandcamp.com
            <br />
            Spotify — Joey Reyes
            <br />
            Instagram — @joeyreyes.music
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Long drives with no destination, thrift-store guitar hunting, and bad sci-fi movies.",
      },
    ]}
  />
);

export default JoeyReyes;
