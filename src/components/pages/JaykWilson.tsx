import { jaykWilsonBio, jaykWilson, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const JaykWilsonPage: FC = () => (
  <PromoPerformer
    name="Jayk Wilson"
    headshot={jaykWilsonBio}
    performingImage={jaykWilson}
    infoBgImage={imgB7e5}
    room="Ambient Chillout Room"
    setTime="11PM"
    performanceType="Gong Soundbath"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          '36" Gongland Om gong (planetary Earth tuned) and a Soma Laboratory Lyra-8',
      },
      {
        question: "What influences are you channeling?",
        answer:
          "While I've been deeply influenced by many past and present musical artists, the inspiration for this project emerged from the writings of Hazrat Inayat Khan in The Mysticism of Sound and Music and Julia Cameron in The Artist's Way.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            <br />
            Upcoming performances:
            <br />
            • 5/4 at DadaLab
            <br />
            • 5/20 at Stargazer Bar opening for touring gong artist Gong Slayer
            <br />• 6/20 with my band Ultraspace at The Green Room (I'll be on
            drums, and opening the set with a gong bath)
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer: "Playing drums, running, biking, cooking.",
      },
    ]}
  />
);

export default JaykWilsonPage;
