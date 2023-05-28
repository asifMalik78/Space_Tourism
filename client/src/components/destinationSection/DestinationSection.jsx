import React, { useState } from "react";
import "./DestinationSection.scss";
import { destinations as data } from "../../dummyData";

const PATH_URL = window.location.origin;
const DestinationSection = () => {
  const [destination, setDestination] = useState(data[0]);

  const handleClick = (value) => {
    let filteredData = data.filter((curr) => {
      return curr.name === value;
    });

    setDestination(filteredData[0]);
  };
  return (
    <>
      <div className="title">
        <span>01</span>
        PICK YOUR DESTINAION
      </div>

      <div className="destination-container">
        <div className="destination-left">
          <div className="image-container">
            <div className="image-wrapper">
              <img src={`${PATH_URL}/${destination?.images?.png}`} />
            </div>
          </div>
        </div>

        <div className="destination-right">
          <nav>
            <div className={destination.name === "Moon" ? "nav-options nav-active" : "nav-options"}  onClick={() => handleClick("Moon")}>
              <div className="options-wrapper" >
                MOON
              </div>
            </div>
            <div className={destination.name === "Mars" ? "nav-options nav-active" : "nav-options"}  onClick={() => handleClick("Mars")}>
              <div className="options-wrapper" >
                MARS
              </div>
            </div>
            <div className={destination.name === "Europa" ? "nav-options nav-active" : "nav-options"}  onClick={() => handleClick("Europa")}>
              <div className="options-wrapper">
                EUROPA
              </div>
            </div>
            <div className={destination.name === "Titan" ? "nav-options nav-active" : "nav-options"}  onClick={() => handleClick("Titan")}>
              <div className="options-wrapper">
                TITAN
              </div>
            </div>
          </nav>

          <div className="right-title">{destination.name}</div>

          <p className="desc">
            {destination.description}
          </p>

          <div className="dist-days-wrapper">
            <div className="dist">
              <p className="heading">AVG. DISTANCE</p>
              <div>{destination.distance}</div>
            </div>

            <div className="dist">
              <p className="heading">EST. TRAVEL TIME</p>
              <div>{destination.travel}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSection;
