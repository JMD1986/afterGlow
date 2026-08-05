import { bobbyBanner, bobbyBanner2, clownBackground12 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const DrBobbyBannerMpc: FC = () => (
  <PromoPerformer
    name="Dr. Bobby Banner MPC"
    nameSize="small"
    headshot={bobbyBanner}
    performingImage={bobbyBanner2 }
    infoBgImage={clownBackground12}
    room="The Atrium"
    setTime="11:15PM"
    performanceType="MPC Beat Science"
    qa={[
      {
        question: "What equipment are you using?",
        answer:
          "Akai MPC, Vinyl, and Bass Guitar",
      },
      {
        question: "What influences are you channeling?",
        answer: "Doom, Madlib, dilla",
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
          "lounging in a pool, my garden or playing video games",
      },
    ]}
  />
);

export default DrBobbyBannerMpc;
