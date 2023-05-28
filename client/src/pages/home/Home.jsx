import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/hero/HeroSection";

const Home = () => {
  return (
    <div className="Home-Container">
      <main>
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
