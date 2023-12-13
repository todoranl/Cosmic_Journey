import React from "react";
import solarImage from "../assets/solar.png";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={solarImage}
          alt="Cosmic Background"
          style={{
            width: "100%",
            position: "absolute",
            top: "-100px", // Adjust this value based on Header's height
            zIndex: -1,
          }}
        />

        {/* Other contents of Home */}
      </div>
    </>
  );
};

export default Home;
