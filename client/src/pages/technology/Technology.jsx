import React from 'react'
import "./Technology.scss";
import Navbar from "../../components/navbar/Navbar";
import TechnologySection from '../../components/technologySection/TechnologySection';
const Technology = () => {
  return (
    <div className="Technology-Container">
      <main>
       <Navbar/>
       <TechnologySection/>
      </main>
    </div>
  )
}

export default Technology;
