import { releafs3, releafs4, clownBackground12 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const Releafs: FC = () => (
  <PromoPerformer
    name="Releafs"
    nameSize="large"
    headshot={releafs3}
    headshotZoom={1.5}
    headshotFocusX="0%"
    performingImage={releafs4}
    performingZoom={1.5}
    performingFocusX="0%"
    infoBgImage={clownBackground12}
    room="The Atrium"
    setTime="10:00PM"
    performanceType="Herbal Blend Low-End"
    qa={[
      {
        question: "What influences are you channeling?",
        answer:
          "My scorpio moon, endorphins, pineapple upside cake, Supertask, Clams Casino, Distinct Motive and Medicine Place radio in the gym",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            releafs.bandcamp.com
            <br />
            SoundCloud — /releafs
            <br />
            Instagram — @releafs
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "taking 25mg of Texas approved albanese gummy bears, making crafts with my daughter, and scheduling blocks of daydreaming",
      },
    ]}
  />
);

export default Releafs;
