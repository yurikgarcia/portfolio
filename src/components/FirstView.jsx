import React from "react";
import "../App.css";
import Burger from "./Burger";
import NavBar from "./NavBar";
import Avatar from "../assets/Avatar.png";
import YURIKGARCIA from "../assets/YURIKGARCIA.png";




function FirstView() {
  return (
    <div className="app-container-tan grid grid-cols-1 md:grid-cols-3 ">
      <div className="col-span-1 md:col-span-1 ">
        <div className="profile-container">
          <div className="profile-info">
            <p
              className="roboto-regular"
              style={{ fontSize: "2vw" }}
            >
              <span className="text-black">HELLO!</span>{" "}
              <span className="primary-color">MY NAME IS</span>
            </p>
            <div className="profile-names">
              <img
                src={YURIKGARCIA}
                alt="Yurik Garcia"
                style={{
                  width: "500%", // Adjust the percentage as needed
                  maxWidth: "500px", // Set a maximum width
                  // marginLeft: "-35px",
                }}
              />
            </div>
            <p style={{  fontSize: "2vw" }}>
              <span className="text-black">I'M A</span>{" "}
              <span className="rock-salt-regular primary-color">
                Software Developer!{" "}
              </span>
            </p>
            <div className="profile-description">
              <p style={{ fontSize: "1.75vw" }}>
                Full Stack Software Engineer blending precision in code with a
                passion for innovation, crafting elegant solutions, and
                fostering a collaborative culture!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1vh",
                }}
              >
                <button className="fade-in-button bg-transparent hover:bg-green-600 text-black font-semibold hover:text-white py-2 px-4 border border-black rounded-full focus:outline-none">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AVATAR COLUMN */}
      </div>
      <div className="col-span-2  ">
        <div className="avatar-container">
          <img
            src={Avatar}
            alt="Avatar"
            style={{
              width: "70%", // Adjust the percentage as needed
            }}
          />
        </div>
      </div>
      <div className="navbar md:col-span-3 ">
        <NavBar />
      </div>
    </div>
  );
}

export default FirstView;
