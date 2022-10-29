import React from "react";
import Navbar from "./Navbar"
import MultiActionAreaCard from '../components/MultiActionAreaCard'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <div className ="sidecontent">
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      </div>
    </div>
  );
};

export default Sidebar;
