import { bryanGary, brianGary2, imgB7e5 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const DrBobbyBannerMpc: FC = () => (
  <PromoPerformer
    name="Dr. Bobby Banner MPC"
    headshot={bryanGary}
    performingImage={brianGary2}
    infoBgImage={imgB7e5}
    room="Main Stage / The Portal"
    setTime="12:00AM"
    performanceType="MPC Beat Science"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Akai MPC Live II, a crate of dusty vinyl, and a PhD in pocket grooves.",
      },
      {
        question: "What influences are you channeling?",
        answer: "J Dilla, Madlib, and the hum of a late-night laundromat.",
      },
      {
        question: "Where can we hear your music?",
        answer: (
          <>
            drbobbybanner.bandcamp.com
            <br />
            SoundCloud — /drbobbybannermpc
            <br />
            Instagram — @dr.bobby.banner
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Chopping samples with one hand and eating Hot Cheetos with the other.",
      },
    ]}
  />
);

export default DrBobbyBannerMpc;
