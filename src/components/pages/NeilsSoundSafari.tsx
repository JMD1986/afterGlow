import { jaykWilsonBio, jaykWilson, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const NeilsSoundSafari: FC = () => (
  <PromoPerformer
    name="Neil's Sound Safari"
    headshot={jaykWilsonBio}
    performingImage={jaykWilson}
    infoBgImage={imgB7e5}
    room="Ambient Chillout Room"
    setTime="1:30AM"
    performanceType="Field Recording Safari"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "A Zoom H6, contact mics, a modular backpack rig, and whatever the night decides to whisper.",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "Chris Watson, Biosphere, and every cicada chorus on the Barton Creek greenbelt.",
      },
      {
        question: "Where can we hear your music?",
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
          "Dawn walks with headphones off, birdwatching without the binoculars, and labeling SD cards I will never organize.",
      },
    ]}
  />
);

export default NeilsSoundSafari;
