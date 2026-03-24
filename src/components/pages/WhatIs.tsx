import React from "react";
import bg from "../../assets/backgrounds/pppsychedelic.webp";

const WhatIs: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: 24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1>What is Afterglow?</h1>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default WhatIs;
