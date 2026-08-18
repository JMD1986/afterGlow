import { pricklyPearPops, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const PricklyPairPopsAtx: FC = () => (
  <PromoPerformer
    name="Prickly Pair Pops ATX"
    nameSize="small"
    headshot={pricklyPearPops}
    performingImage={pricklyPearPops}
    infoBgImage={clownBackground11}
    subtitle="Vendors"
    room="The Atrium"
    setTime="All Night"
    performanceType="Baked Treats & Questionable Financial Advice"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer: "Hand-crafted prickly pear clown pops",
      },
      {
        question: "What influences are you channeling?",
        answer:
          "Austin summers, roadside fruit stands, and the sacred art of melting slowly on purpose.",
      },
      {
        question: "Where can we find your pops?",
        answer: (
          <>
            Instagram — @pricklypearpopsatx
            <br />
            Farmers markets & late-night events around ATX
          </>
        ),
      },
    ]}
  />
);

export default PricklyPairPopsAtx;
