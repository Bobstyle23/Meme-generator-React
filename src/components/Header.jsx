import React from "react";
import troll from "../assets/Troll Face.svg";
const Header = () => {
  return (
    <div className="header-container">
      <img src={troll} alt="troll-face" />
      <h1 className="header-title">Meme Generator</h1>
      <p className="header-text">React Course - Project 3</p>
    </div>
  );
};

export default Header;
