import React, { useState } from "react";
import memes from "../memes";

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

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

  return (
    <div className="meme-container">
      <form className="inputs">
        <input className="field-1" type="text" placeholder="Top Text" />
        <input className="field-2" type="text" placeholder="Bottom Text" />
      </form>
      <button onClick={getMemeImage} className="generate-btn">
        Get a new meme image 🖼
      </button>

      <img className="meme-image" src={meme.randomImage} alt="meme images" />
    </div>
  );
};

export default Meme;
