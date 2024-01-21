import React from "react";
import "../App.css";
import Burger from "./Burger";
import NavBar from "./NavBar";
import Avatar from "../assets/Avatar.png";
import YURIK from "../assets/YURIK.png";
import GARCIA from "../assets/GARCIA.png";

function FirstView() {
  return (
    <div className="app-container-tan grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-1 bg-blue-500">
        <div className="profile-container">
          <div className="profile-info">
            <p className="roboto-regular" style={{ marginBottom: -40, fontSize: "2.2vw" }}>
              <span className="text-black">HELLO!</span>{" "}
              <span className="primary-color">MY NAME IS</span>
            </p>
            <div className="profile-names">
              <img
                src={YURIK}
                alt="Yurik Garcia"
                style={{
                  width: "100%", // Adjust the percentage as needed
                  maxWidth: "300px", // Set a maximum width
                  marginLeft: "-35px",
                }}
              />
            </div>
            <p style={{ marginTop: -25, fontSize: "2.1vw" }}>
              <span className="text-black">I'M A</span>{" "}
              <span className="rock-salt-regular primary-color">Software Developer! </span>
            </p>
            <div className="profile-description">
          <p style={{ fontSize: "2.5vw" }}>
            Full Stack Software Engineer blending precision in code with a
            passion for innovation, crafting elegant solutions, and fostering a
            collaborative culture in every project.
          </p>
        </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-2 bg-green-500  ">
        <div className="avatar-container">
          <img
            src={Avatar}
            alt="Avatar"
            style={{
              width: "80%", // Adjust the percentage as needed
            }}
          />
        </div>
      </div>
      <div className="navbar md:col-span-3 bg-red-500">
        <NavBar />
      </div>
    </div>
  );
}

export default FirstView;
