import { brianHeadshot } from "../../assets/images";
import bg from "../../assets/backgrounds/pppsychedelic.webp";
import type { FC } from "react";

const Promo: FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <img
        src={brianHeadshot}
        alt="Promo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Promo;
