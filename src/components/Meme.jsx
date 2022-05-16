import React, { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = useState({});

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const jsonData = await response.json();
      setAllMeme(jsonData);
    }

    getMemes();
  }, []);

  //JS Task:

  const userAccount = {
    owner: "Bob Pakhriev",
    transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    duplicateWords: [
      "apple_apple_pie",
      "dish_table_dish",
      "sunny_sunny_weather",
      "pizza_cheese_pizza",
    ],

    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
  };

  //CSS: Build the given layout
  //React: Fetch the data from given API and render random image on every button click
  //JavaScript: remove duplicate values from an array of strings, add balance property by looping over transactions array

  function getMemeImage() {
    const data = allMeme.data.memes;
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
