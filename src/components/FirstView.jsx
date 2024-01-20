import React from "react";
import "../App.css";
import Burger from "./Burger";
import NavBar from "./NavBar";
import ProfileAvatar from "../assets/ProfileAvatar.gif";

function FirstView() {
  return (
    <div className="app-container center-text">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={ProfileAvatar} alt="Profile Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          </div>
          <div className="profile-name">
            <h1>Yurik Garcia</h1>
          </div>
        </div>
        <div className="profile-description">
          <p>
            Full Stack Software Engineer blending precision in code with a
            passion for innovation, <br /> crafting elegant solutions, and fostering
            a collaborative culture in every project.
          </p>
        </div>
      </div>
      {/* <Burger /> */}
    </div>
  );
}

export default FirstView;
