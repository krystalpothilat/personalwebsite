import React from "react";
// import React, { useRef } from 'react';
import "./App.css";
import Page from "./Page";
import Navbar from "./Navbar";

import mePic from "./imgs/me.jpg";
import ga from "./imgs/ga-logo.png";
import winc from "./imgs/winc-logo.png";

function App() {
  const profexpdata = [
    { id: 1, title: "Summer 2024", description: "Expanded payload configurations on the P3E. This includes:", date: "June 2023 - August 2023",
    bulletpoints: ["Implementing 2 new function payloads", "Developing the messaging process to provide functionality for the new payloads", "Updating the user interfae of the AV Config page to properly display all available payload configurations", "Employing TortoiseSVN for effective version control"] },
    { id: 2, title: "Summer 2023", description: "Updated user interface for increased functionality by for CGCS and P3E. This includes:", date: "June 2022 - August 2022",
    bulletpoints: ["Reorganizing and enhancement of 10+ visual components on the Heads-Up Display for the CGCS", "Expanding informational components on the Payloads Page on the P3E to allow ID visibility", "Tested changes to ensure proper enhancement of visuals and overall functionality"]},
  ];

  const leadershipexpdata = [
    { id: 1, title: "President", description: "Led the largest computer science student organization on campus empowering women in tech", date: "March 2022 - March 2023",
    bulletpoints: ["Achieved expansion of member turn-out at in-person events by 150% throguh successful marketing and community cultivation", "Increased organization funds by 50% during the 5th annual BCOE Match Challenge", "Oversaw and supp[orted 6 offers and 10 in-person events per quarter"]},
    { id: 2, title: "Secretary", description: "Main support for the organization's  infrastructure and both internal/external communication", date: "March 2021 - March 2022",
    bulletpoints: ["Facilitated communication and collaboration with various stakeholders: other student organizations, professors, industry professional and faculty members", "Maintained and supported cross-functional relationships with all external connections", "Orchestrated the planning, organization, and hosting of 4 impactful technical worshops and panels with experienced industry professionals"]},
  ];

  const projdata = [
    { id: 1, title: "Notion Customizable Bingo Widget", description: "A website that allows users to create a custom Notion Bingo Widget that is embeddable onto their personal Notion workspace. Inspired by the '2024 Bingo Card' trend on TikTok, this widget aims to provide Notion users with an electronic version of the New Years' goals and resolutions checklist format." },
    { id: 2, title: "FastFoodDealsNearMe", description: "A website that congregates all fast food deals (advertised or through Rewards membership) within a specified radius from a certain location, providing a one-stop-shop for users looking for the best fast food deals when hunger calls. Inspired by multiple late night fast food trips during college, scouring the Internet and mobile apps to find the best bang for our buck" },
    { id: 3, title: "TicTacToe", description: "Play Tic-Tac-Toe against an AI player!" },
  ];

  
  return (
    <div className="App">
      <Navbar/>
      <Page id = "home" mainCookie = {mePic} 
            info = "hello! I'm Krystal Pothilat"> </Page>
      <Page id = "profexp" mainCookie = "Professional Experience" info = {profexpdata} logo = {ga}> </Page>
      <Page id = "proj" mainCookie = "Projects" info = {projdata}> </Page>
      <Page id = "leadership" mainCookie = "Leadership" info = {leadershipexpdata} logo = {winc}> </Page>
      <Page id = "about" mainCookie = "More About Me" info = "Test"> </Page>
      <Page id = "contact" mainCookie = "Reach out!" info = "Test"> </Page>
    </div>
  );
}

export default App;
