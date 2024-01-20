import React from "react";
import "../App.css";
import Burger from "./Burger";
import NavBar from "./NavBar";
import ProfileAvatar from "../assets/ProfileAvatar.gif";
import YURIK from "../assets/YURIK.png";
import GARCIA from "../assets/GARCIA.png";

function FirstView() {
  return (
    <div className="app-container-tan center-text">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-avatar">
            <img
              src={ProfileAvatar}
              alt="Profile Avatar"
              style={{
                width: "100%",
                maxWidth: "100px",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          </div>
          {/* <div className="profile-name">
            <h1 style={{ fontSize: "6vw", margin: "0" }}>Yurik Garcia</h1>
          </div> */}
          <img
            src={YURIK}
            alt="Yurik Garcia"
            style={{
              width: "80%",
              maxWidth: "200px",
              height: "auto",
              marginLeft: "-20px",
            }}
          />
          <img
            src={GARCIA}
            alt="Yurik Garcia"
            style={{
              width: "80%",
              maxWidth: "200px",
              height: "auto",
              marginLeft: "-10px",
            }}
          />
        </div>
        <div className="profile-description">
          <p style={{ fontSize: "2.5vw", margin: "0" }}>
            Full Stack Software Engineer blending precision in code with a
            passion for innovation, crafting elegant solutions, and fostering a
            collaborative culture in every project.
          </p>
        </div>
      </div>
      {/* <Burger /> */}
    </div>
  );
}

export default FirstView;
