import type { FC } from "react";
import { CURRENT_POSTER } from "../../constants";

const TrippyPoster: FC = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <img
      src={CURRENT_POSTER}
      alt="Afterglow poster"
      style={{
        maxWidth: "100%",
        maxHeight: "100vh",
        objectFit: "contain",
        animation: "colorRotate 20s linear infinite",
      }}
    />
  </div>
);

export default TrippyPoster;
