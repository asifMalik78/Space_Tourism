import React, { useState, useEffect } from "react";
import "./CrewSection.scss";
import { crew as data } from "../../dummyData";

const PATH_URL = window.location.origin;
const CrewSection = () => {
  const [crew, setCrew] = useState(data[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const handleClick = (value) => {
    let filteredData = data.filter((curr) => {
      return curr.role === value;
    });

    setCrew(filteredData[0]);
  };

  return (
    <>
      <div className="crew-container">
        <div className="crew-left">
          <div className="title">
            <span>02</span>
            PICK YOUR CREW
          </div>

          {windowWidth <= 475 && (
            <div className="crew-image-container">
              <div className="crew-image-wrapper">
                <img src={`${PATH_URL}/${crew?.images?.png}`} />
              </div>
            </div>
          )}

          {windowWidth <= 475 && (
            <nav className="mobile-nav">
              <div
                className={
                  crew.role === "Commander"
                    ? "nav-options nav-active"
                    : "nav-options"
                }
                onClick={() => handleClick("Commander")}
              ></div>
              <div
                className={
                  crew.role === "Mission Specialist"
                    ? "nav-options nav-active"
                    : "nav-options"
                }
                onClick={() => handleClick("Mission Specialist")}
              ></div>
              <div
                className={
                  crew.role === "Pilot"
                    ? "nav-options nav-active"
                    : "nav-options"
                }
                onClick={() => handleClick("Pilot")}
              ></div>
              <div
                className={
                  crew.role === "Flight Engineer"
                    ? "nav-options nav-active"
                    : "nav-options"
                }
                onClick={() => handleClick("Flight Engineer")}
              ></div>
            </nav>
          )}

          <div className="crew-desc">
            <div className="role">{crew.role}</div>
            <div className="name">{crew.name}</div>
            <p className="desc">{crew.bio}</p>

            {windowWidth > 475 && (
              <nav>
                <div
                  className={
                    crew.role === "Commander"
                      ? "nav-options nav-active"
                      : "nav-options"
                  }
                  onClick={() => handleClick("Commander")}
                ></div>
                <div
                  className={
                    crew.role === "Mission Specialist"
                      ? "nav-options nav-active"
                      : "nav-options"
                  }
                  onClick={() => handleClick("Mission Specialist")}
                ></div>
                <div
                  className={
                    crew.role === "Pilot"
                      ? "nav-options nav-active"
                      : "nav-options"
                  }
                  onClick={() => handleClick("Pilot")}
                ></div>
                <div
                  className={
                    crew.role === "Flight Engineer"
                      ? "nav-options nav-active"
                      : "nav-options"
                  }
                  onClick={() => handleClick("Flight Engineer")}
                ></div>
              </nav>
            )}
          </div>
        </div>
        {windowWidth > 475 && (
          <div className="crew-right">
            <div className="image-wrapper">
              <img src={`${PATH_URL}/${crew?.images?.png}`} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CrewSection;
