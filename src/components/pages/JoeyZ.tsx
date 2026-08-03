import { colorburnAV, canvas, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JoeyZ: FC = () => (
  <PromoPerformer
    name="Joey Z"
    headshot={colorburnAV}
    performingImage={canvas}
    infoBgImage={imgB7e5}
    room="Main Stage / The Portal"
    setTime="11:15PM"
    performanceType="Electric Bass Grooves"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Fender Precision Bass, a warm amp stack, and enough low end to rearrange the furniture.",
      },
      {
        question: "What influences are you channeling?",
        answer: "Pino Palladino, Thundercat, and the feeling of a perfect pocket.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            joeyz.bandcamp.com
            <br />
            Instagram — @joeyz.bass
            <br />
            Spotify — Joey Z
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
