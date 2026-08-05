import { hollyHart, hollyHart2, clownBackground12 } from "../../assets/images";
import type { FC } from "react";
import PromoPerformer from "./PromoPerformer";

const HollyHart: FC = () => (
  <PromoPerformer
    name="Holly Hart"
    nameSize="large"
    headshot={hollyHart2}
    performingImage={hollyHart}
    infoBgImage={clownBackground12}
    room="The Atrium"
    setTime="All Night"
    performanceType="Face Painting & Emotional Support"
    qa={[
      {
        question: "What are you bringing to Afterglow?",
        answer:
          "face painting roulette! spin the wheel and you get what you get! also i’ve never face painted before.",
      },
      {
        question: "What influences are you channeling?",
        answer: "my comedy influences are chad damiani, sarah squirm, betty grumble, patti harrison, and joan rivers. for face painting specifically probably jackson pollock.",
      },
      {
        question: "How do you like to chill/relax/unwind?",
        answer:
          "i like to chill by watching movies with my husband, swimming, and walking my dog.",
      },
    ]}
  />
);

export default HollyHart;
