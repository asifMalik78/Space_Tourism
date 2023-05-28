import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Destination.scss";
import DestinationSection from "../../components/destinationSection/DestinationSection";

const Destination = () => {
  return (
    <div className="Destination-Container">
      <main>
        <Navbar />
        <DestinationSection />
      </main>
    </div>
  );
};

export default Destination;
