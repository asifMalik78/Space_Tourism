import React, { useState , useEffect } from "react";
import "./TechnologySection.scss";
import { technology as data } from "../../dummyData";

const PATH_URL = window.location.origin;

const TechnologySection = () => {
  const [technology, setTechnology] = useState(data[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = (value) => {
    let filteredData = data.filter((curr) => {
      return curr.name === value;
    });

    setTechnology(filteredData[0]);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="title">
        <span>03</span>
        SPACE LAUNCH 101
      </div>
      <div className="technology-container">
        <div className="techonology-left">
          <nav>
            <div
              className={
                technology.name === "Launch vehicle"
                  ? "nav-options nav-active"
                  : "nav-options"
              }
              onClick={() => handleClick("Launch vehicle")}
            >
              1
            </div>
            <div
              className={
                technology.name === "Spaceport"
                  ? "nav-options nav-active"
                  : "nav-options"
              }
              onClick={() => handleClick("Spaceport")}
            >
              2
            </div>
            <div
              className={
                technology.name === "Space capsule"
                  ? "nav-options nav-active"
                  : "nav-options"
              }
              onClick={() => handleClick("Space capsule")}
            >
              3
            </div>
          </nav>

          <div className="desc">
            <p className="desc-title-1">THE TERMINOLOGY… </p>

            <div className="desc-title-2">{technology.name}</div>

            <div className="brief-desc">{technology.description}</div>
          </div>
        </div>

        <div className="technology-right">
          <div className="image-wrapper">
            <img src={windowWidth > 768 ? `${PATH_URL}/${technology.images.portrait}` : `${PATH_URL}/${technology.images.landscape}` } />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologySection;
