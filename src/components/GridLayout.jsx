import React from "react";
import "./GridLayout.css"; 

const GridLayout = () => {
  return (
    <>
    <h2 className="hero-text">Welcome To VESIT</h2>
    <div className="top-container">
      <div className="grid-item about-us">
        <h2>About Us</h2>
      </div>
      <div className="grid-item mission">
        <h2>Mission</h2>
      </div>
      <div className="grid-item main">
        <h1>VESIT</h1>
        
      </div>
      <div className="grid-item vision">
        <h2>Vision</h2>
      </div>
      <div className="grid-item organogram">
        <h2>Organogram</h2>
      </div>
    </div>
    <div className="para-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    </>
    
  );
};

export default GridLayout;
