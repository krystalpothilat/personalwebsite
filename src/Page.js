import React from "react";
import "./Page.css";
import externtab from "./imgs/externtab.png";

function Page({ id, img, about1, section, info, logo }) {

  return (
    <div>

        {about1 ? (
        <div className = "mainpage" id = {id}>
            <div className = "img-container">
                <div>
                <img src = {img} alt ="" className = "pic"/>
                </div>
            </div>
            <div id = "mainintro">
                <h2 id = "main"> hello! I'm Krystal Pothilat</h2>
                <ul className = "text" id = "cookiepoints">
                    <li> San Diego, CA</li>
                    <li> B.S. in Computer Science at UC Riverside</li>
                </ul>
            </div>
        </div> 
         
        ) : (
            <div className = "infopage" id = {id}>
                <div className = "header-container">
                    <img src = {img} alt = "" className = "header-banner"/>
                    <p className = "header"> {section} </p>
                </div>
        
                {logo && <img src={logo} alt="Logo" className="logo" />}
                <div className = "info">
                    {Array.isArray(info) && info.map((item) => (
                        <div className = "info-container">
                            <div className = "sec-header">
                                <h2 className = "title"> {item.title}</h2>
                                {!(item.id=="leader1" || item.id=="leader2") && (
                                    <img src ={externtab} alt = "" className="link"/>
                                )}
                            </div>
                            <h3 className = "date">{item.date}</h3>
                            <p className = "text"> {item.description} </p>
                            {item.bulletpoints && (
                            <ul className = "text" id = "info-bulletpoints">
                                {item.bulletpoints.map((bulletpoints, index) => (
                                    <li key={index}>{bulletpoints}</li>
                                ))}
                            </ul>
                            )}
                            {Array.isArray(item.skills) && (
                                <div className="skills-container">
                                {item.skills.map((skill) => (
                                    <p className="text" id = "skill">{skill}</p>
                                ))}
                                </div>
                                                       
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )}
        
        
    </div>
  );
}

export default Page;
