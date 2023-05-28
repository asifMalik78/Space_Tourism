import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="heroSection-container">
      <div className="heroSection-desc">
        <div className="herosSection-title">
            <p>So, You Want To Travel To</p>
            <h1>SPACE</h1>
        </div>

        <div className="heroSection-extraInfo">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </div>
      </div>
      <div className="heroSection-explore-btn">
        <button>Explore</button>
      </div>
    </div>
  );
};

export default HeroSection;
