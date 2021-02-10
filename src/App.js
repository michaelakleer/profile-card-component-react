import React from "react";
import "./App.css";
import Victor from "./images/image-victor.jpg";
import Top from "./images/bg-pattern-top.svg";
import Bottom from "./images/bg-pattern-bottom.svg";

export default function App() {
  return (
    <div className="App">
      <div className="circle">
        <img src={Top} alt="Top Circle" className="topCircle" />
        <img src={Bottom} alt="Bottom Circle" className="bottomCircle" />
      </div>
      <div className="container">
        <div className="header">
          <div className="photo">
            <img src={Victor} alt="Portrait of Victor" className="image" />
          </div>
        </div>
        <div className="profile">
          <h1>Victor Crest</h1>
          <span className="age">26</span>
          <h2>London</h2>
        </div>
        <div className="info">
          <ul>
            <li className="number">80K</li>
            <li className="category">Followers</li>
          </ul>
          <ul>
            <li className="number">803K</li>
            <li className="category">Likes</li>
          </ul>
          <ul>
            <li className="number">1.4K</li>
            <li className="category">Photos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
