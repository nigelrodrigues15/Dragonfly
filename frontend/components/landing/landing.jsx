import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div className="landing">
      <div className="landing-navbar">
        <div className="landing-navbar-left">
          <h1>Dragonfly</h1>
        </div>
        <div className="landing-navbar-right">
          <h3 className="home">
            <Link className="Link" to="/home">
              Home
            </Link>
          </h3>
          <h3 className="nav-about">About</h3>
        </div>
      </div>
      <div className="intro">
        <h1>Learn how to invest like a professional.</h1>
      </div>
      <div className="about">
        <h1>What is Dragonfly?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          voluptates quae quo sequi voluptatem quasi adipisci ut ullam iste
          neque autem voluptatibus corporis cum illum nam maiores sunt, magni
          quia!
        </p>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div>
          <div className="education-info">Mutual Funds</div>
        </div>
        <div>
          <div className="education-info">Macroeconomics</div>
        </div>
        <div>
          <div className="education-info">ETF's</div>
        </div>
        <div>
          <div className="education-info">Crypto</div>
        </div>
      </div>
    </div>
  );
};

export default landing;
