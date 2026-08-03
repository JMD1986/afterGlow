import { jaykWilsonBio, jaykWilson, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const Releafs: FC = () => (
  <PromoPerformer
    name="Releafs"
    headshot={jaykWilsonBio}
    performingImage={jaykWilson}
    infoBgImage={imgB7e5}
    room="Ambient Chillout Room"
    setTime="1:15AM"
    performanceType="Leafwave Ambient Set"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Teenage Engineering OP-1, a pair of Moog DFAM units, and a custom soil-mic'd contact patch for live texture.",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "Hiroshi Yoshimura, Green-House, and late-night walks through Zilker after rain.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            releafs.bandcamp.com
            <br />
            SoundCloud — /releafs
            <br />
            Instagram — @releafs.sound
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Repotting houseplants, slow bike rides, and falling asleep to rain field recordings.",
      },
    ]}
  />
);

export default Releafs;
