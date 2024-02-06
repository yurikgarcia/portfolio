import React from "react";
import "../App.css";
import Footer from "./Footer";
import beneDouble from "../assets/beneDouble.png";
import ezDouble from "../assets/ezDouble.png";
import ezLogo from "../assets/ezLogo.png";
import shelf_double from "../assets/shelf_double.png";
import shelf_logo from "../assets/shelf_logo.png";

function SecondView() {
  return (
    <div
      className="second-view"
      style={{
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="content-container"
          style={{ width: "95%", display: "flex", flexDirection: "row", marginTop: "10vh"}}
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
            <div style={{width:'75%'}}>
            <p className="app-description">
              An inventory management application that effortlessly manages your
              assets digitally, whether you’re in the warehouse or on the go!
            </p>
            <p className="app-roles">
              {" "}
              FULL-STACK SOFTWARE DEVELOPER // UX & UI DESIGN // PRODUCT MANAGER{" "}
            </p>
            </div>
          </div>
        </div>
        <div
          className="content-container"
          style={{ width: "95%", display: "flex", flexDirection: "row",marginTop: "5vh"}}
        >
          <div style={{ flex: 1, color: "black", marginLeft: "5vw" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "4.5vh",
              }}
            >
              <img
                src={ezLogo}
                alt="ez pass logo"
                style={{
                  maxWidth: "50px",
                }}
              />
              <h1 className="caprasimo">EzPass</h1>
            </div>
            <div style={{width:'75%'}}>
            <p className="app-description">
              An inventory management application that effortlessly manages your
              assets digitally, whether you’re in the warehouse or on the go!
            </p>
            <p className="app-roles">
              {" "}
              FULL-STACK SOFTWARE DEVELOPER // UX & UI DESIGN // PRODUCT MANAGER{" "}
            </p>
            </div>
          </div>
          <div className="ez_double" style={{ flex: 1 }}>
            <img
              src={ezDouble}
              alt="ez pass logo"
              style={{
                width: "100%",
                maxWidth: "250vh",
              }}
            />
          </div>
        </div>
        <div
          className="content-container"
          style={{ width: "95%", display: "flex", flexDirection: "row",marginTop: "5vh"}}
        >
          <div className="bene_double" style={{ flex: 1 }}>
            <img
              src={beneDouble}
              alt="bene double"
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
              <h1 className="companyName1">bene</h1>
              <h1 className="companyName2">Nav</h1>
            </div>
            <div style={{width:'75%'}}>
            <p className="app-description">
              A mobile application designed to be a cradle to grave app that
              allows end users the ability to shop, merge and track health
              benefits!
            </p>
            <p className="app-roles"> FRONT-END SOFTWARE DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SecondView;
