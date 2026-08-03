import { couchbound2, couchbound, clownBackground11 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const PricklyPairPopsAtx: FC = () => (
  <PromoPerformer
    name="Prickly Pair Pops ATX"
    headshot={couchbound2}
    performingImage={couchbound}
    infoBgImage={clownBackground11}
    room="The Atrium"
    setTime="All Night"
    performanceType="Frozen Treats & Desert Vibes"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer:
          "Hand-crafted prickly pear pops, chile-lime dust, and a cooler colder than your ex's texts.",
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
            pricklypairpopsatx.com
            <br />
            Instagram — @pricklypairpopsatx
            <br />
            Farmers markets & late-night events around ATX
          </>
        ),
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "Literally — sitting in an ice bath of popsicle sticks and calling it research.",
      },
    ]}
  />
);

export default PricklyPairPopsAtx;
