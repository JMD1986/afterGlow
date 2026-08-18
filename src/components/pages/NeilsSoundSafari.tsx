import { neilsSoundSafari, neilsSoundSafari2, clownBackground10 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const NeilsSoundSafari: FC = () => (
  <PromoPerformer
    name="Neil Dorsey's Sound Safari"
    nameSize="medium"
    headshot={neilsSoundSafari}
    performingImage={neilsSoundSafari2}
    infoBgImage={clownBackground10}
    room="Side Stage"
    setTime="10:15PM"
    performanceType="The Crocodile Hunter meets 8 Mile"
    qa={[
       {
        question: "What influences are you channeling?",
        answer:
          "Marc Rebillet, Reggie Watts, Zach Zucker, Casey Rocket",
      },
      {
        question: "Where can we see you perform?",
        answer: (
          <>
            neilssoundsafari.bandcamp.com
            <br />
            SoundCloud — /neilssoundsafari
            <br />
            Instagram — @neils.sound.safari
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Making beats, playing video games, running my mouth with friends over drinks/food",
      },
    ]}
  />
);

export default NeilsSoundSafari;
