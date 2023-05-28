import React from "react";
import "./Crew.scss";
import Navbar from "../../components/navbar/Navbar";
import CrewSection from "../../components/crewSections/CrewSection";
const Crew = () => {
  return (
    <div className="Crew-Container">
      <main>
        <Navbar />
        <CrewSection />
      </main>
    </div>
  );
};

export default Crew;
