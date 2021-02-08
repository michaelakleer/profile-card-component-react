import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile">
          <h1>Victor Crest</h1>
          <span>26</span>
          <h2>London</h2>
        </div>
        <hr />
        <div className="info">
          <ul>
            <li>80K</li>
            <li>Followers</li>
          </ul>
          <ul>
            <li>803K</li>
            <li>Likes</li>
          </ul>
          <ul>
            <li>1.4K</li>
            <li>Photos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
