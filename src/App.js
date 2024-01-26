// import React from "react";
import React, { useRef, useState } from 'react';
import "./App.css";
import Page from "./Page";
import Navbar from "./Navbar";

import mePic from "./imgs/me2.jpg";
import ga from "./imgs/ga-logo.png";
import winc from "./imgs/winc-logo.png";
import banner from "./imgs/banner.png";
import cookie from "./imgs/fullcookie.png";

function App() {
  const profexpdata = [
    { id: 1, title: "Summer 2024", description: "Expanded payload configurations on the P3E. This includes:", date: "June 2023 - August 2023",
    bulletpoints: ["Implementing 2 new function payloads", "Developing the messaging process to provide functionality for the new payloads", "Updating the user interfae of the AV Config page to properly display all available payload configurations", "Employing TortoiseSVN for effective version control"],
    skills: ["C++", "XML", "JavaScript", "TortoiseSVN"]},
    { id: 2, title: "Summer 2023", description: "Updated user interface for increased functionality for CGCS and P3E. This includes:", date: "June 2022 - August 2022",
    bulletpoints: ["Reorganizing and enhancement of 10+ visual components on the Heads-Up Display for the CGCS", "Expanding informational components on the Payloads Page on the P3E to allow ID visibility", "Tested changes to ensure proper enhancement of visuals and overall functionality"],
    skills: ["C++",  "XML", "JavaScript"]},
  ];

  const leadershipexpdata = [
    { id: 1, title: "President", description: "Led the largest computer science student organization on campus empowering women in tech.", date: "March 2022 - March 2023",},
    { id: 2, title: "Secretary", description: "Main support for the organization's  infrastructure and both internal/external communication.", date: "March 2021 - March 2022",}  ];

  const projdata = [
    { id: 1, title: "Notion Customizable Bingo Widget", 
    description: "A website that allows users to create a custom Notion Bingo Widget that is embeddable onto their personal Notion workspace. Inspired by the '2024 Bingo Card' trend on TikTok, this widget aims to provide Notion users with an electronic version of the New Years' goals and resolutions checklist format.",
    skills: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Git"]},
    { id: 2, title: "FastFoodDealsNearMe", 
    description: "A website that congregates all fast food deals (advertised or through Rewards membership) within a specified radius from a certain location, providing a one-stop-shop for users looking for the best fast food deals when hunger calls. Inspired by multiple late night fast food trips during college, scouring the Internet and mobile apps to find the best bang for our buck",
    skills: ["HTML", "CSS", "JavaScript"] },
    { id: 3, title: "TicTacToe", 
    description: "Play Tic-Tac-Toe against an AI player!",
    skills: ["Python"]},
  ];

  const [raindrops, setRaindrops] = useState([]);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);


  const handleScrollToPage = (pageId) => {
    const p = document.getElementById(pageId);
    console.log ("beginning scroll");
    if( p ){
      p.scrollIntoView({ behavior: "smooth"});
      console.log ("scrolling to page");
    }
  };

  const startRainfall = () => {
    if (isAnimationRunning) {
      return;
    }

    setIsAnimationRunning(true);

    const newRaindrops = [];

    for (let i = 0; i < 75; i++) {
      const startTime = Math.random() * 2; // Random start times between 0 and 5 seconds
      const speed = Math.random() * 3 + 1;

      newRaindrops.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        startTime: `${startTime}s`,
        speed: `${speed}s`,
      });
    }

    setRaindrops(newRaindrops);
    
    setTimeout(() => {
      setIsAnimationRunning(false);
      setRaindrops([]);
    },5000);
  };

  return (
    <div>
      <div className="raindrops-container">
        {raindrops.length > 0 &&
          raindrops.map((raindrop) => (
            <div
              key={raindrop.id}
              className="raindrop"
              style={{
                left: raindrop.left,
                top: "-30px",
                backgroundImage: `url(${cookie})`,
                animation: `fly ${raindrop.speed} ease-out ${raindrop.startTime}`,
              }}
            />
          ))}
      </div>
      <div className="App">
        <div className =  "content">
          <Navbar handleScrollToPage = {handleScrollToPage} startRainfall={startRainfall} isAnimationRunning={isAnimationRunning}/>
          <Page id = "home" img = {mePic} alt = "" about1 = "true" style={{ backgroundColor: "blue" }}></Page>
          <Page id = "profexp"  img = {banner} alt = "" section = "Industry Experience" info = {profexpdata} logo = {ga} style={{ backgroundColor: "yellow" }}></Page>
          <Page id = "proj"  img = {banner} alt = "" section = "Projects" info = {projdata} style={{ backgroundColor: "pink" }}></Page>
          <Page id = "leadership"  img = {banner} alt = "" section = "Leadership" info = {leadershipexpdata} logo = {winc} style={{ backgroundColor: "orange" }}></Page>
          {/* <Page id = "about"  img = {banner} section = "About Me" info = "Test"> </Page> */}
          {/* <Page id = "contact" img = "Reach out!" info = "Test"> </Page> */}
        </div>
      </div>
    </div>

  );
}

export default App;
