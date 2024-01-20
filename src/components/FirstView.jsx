import React from "react";
import "../App.css";
import Burger from "./Burger";
import NavBar from "./NavBar";

function FirstView() {
  return (
    <div className="app-container ">
      <div className="navbar">
        <NavBar />
      </div>
      <h1>Yurik Garcia</h1>
      {/* <Burger /> */}
    </div>
  );
}

export default FirstView;
