import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building React apps and learning cool stuff!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
