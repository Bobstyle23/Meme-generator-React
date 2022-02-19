import React from "react";
import memes from "../memes";

const Meme = () => {
  function getMemeImage() {
    const data = memes.data.memes;
    const random = Math.floor(Math.random() * data.length);
    const randomImg = data[random].url;
    console.log(randomImg);
  }

  return (
    <div className="meme-container">
      <form className="inputs">
        <input className="field-1" type="text" />
        <input className="field-2" type="text" />
      </form>
      <button onClick={getMemeImage} className="generate-btn">
        Get a new meme image 🖼
      </button>
    </div>
  );
};

export default Meme;
