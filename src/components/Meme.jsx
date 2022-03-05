import React, { useState } from "react";
import memes from "../memes";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memes);

  function getMemeImage() {
    const data = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * data.length);
    const randomImg = data[random].url;

    setMeme(() => {
      return {
        ...meme,
        randomImage: randomImg,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme-container">
      <form className="inputs">
        <input
          className="field-1"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="field-2"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </form>
      <button onClick={getMemeImage} className="generate-btn">
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="meme images" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
