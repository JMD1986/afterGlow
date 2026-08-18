import { blueOwl, clownBackground12 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const BlueOwlBrewing: FC = () => (
  <PromoPerformer
    name="Blue Owl Brewing"
    nameSize="small"
    headshot={blueOwl}
    performingImage={blueOwl}
    infoBgImage={clownBackground12}
    subtitle="Sponsor"
    room="The Atrium"
    setTime="All Night"
    performanceType="Sour Beer & Good Vibes"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer: "All-sour beer lineup from Austin's original sour brewery.",
      },
      {
        question: "Where can we find you?",
        answer: (
          <>
            blueowlbrewing.com
            <br />
            Instagram — @blueowlbrewing
            <br />
            Taprooms in East Austin & The Domain
          </>
        ),
      },
    ]}
  />
);

export default BlueOwlBrewing;
