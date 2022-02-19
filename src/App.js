import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Meme />
    </div>
  );
};

export default App;
