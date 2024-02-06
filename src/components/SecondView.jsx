import React from "react";
import "../App.css";
import Footer from "./Footer";
import shelf_double from "../assets/shelf_double.png";
import shelf_logo from "../assets/shelf_logo.png";

function FirstView() {
  return (
    <div
      className="second-view"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        className="content-container"
        style={{ width: "80%", display: "flex", marginTop: "5vh"}}
      >
        <div className="shelf_double" style={{ flex: 1 }}>
          <img
            src={shelf_double}
            alt="Yurik Garcia"
            style={{
              width: "100%",
              maxWidth: "250vh",
            }}
          />
        </div>
        <div style={{ flex: 1, color: "black" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4.5vh",
            }}
          >
            <img
              src={shelf_logo}
              alt="Shelf Logo"
              style={{
                maxWidth: "50px",
              }}
            />
            <h1 className="caprasimo">Shelf</h1>
          </div>
          <p className="app-description">
            An inventory management application that effortlessly manages your
            assets digitally, whether you’re in the warehouse or on the go!
          </p>
          <p className="app-roles">  FULL-STACK SOFTWARE DEVELOPER // UX & UI DESIGN // PRODUCT MANAGER </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FirstView;
