import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AlertSound from "../../components/alert/AlertSound";
import Sign from "../auth/Sign";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="main-container">
      {/* <header className="header-container">{<Header />}</header> */}
      <div className="body-container">
        <AlertSound />
      </div>
      {/* <footer className="footer-container">{<Footer />}</footer> */}
    </div>
  );
};

export default Homepage;
