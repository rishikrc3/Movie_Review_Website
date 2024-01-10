import React from "react";
import User from "./User";
import "./Routes.css";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1>Welcome to My Movie Hub!</h1>
          <p>
            I'm Rishik, and I have a deep passion for well-made movies. This
            website is my personal movie hub, where I share information about my
            favorite films, actors, and everything related to the world of
            entertainment.
          </p>
          <p>
            Explore the latest releases, discover hidden gems, and connect with
            other movie enthusiasts. Let's embark on a cinematic journey
            together!
          </p>
        </div>
        <div className="user-section">
          <h2>Meet the Developer</h2>
          <User />
        </div>
      </div>
    </>
  );
};

export default About;
