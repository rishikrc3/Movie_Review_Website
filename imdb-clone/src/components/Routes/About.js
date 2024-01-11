import React from "react";
import User from "./User";

const About = () => {
  return (
    <>
      <div className="about-container bg-gray-100 p-8 ">
        <div className="about-content md:w-1/2 md:pr-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Movie Hub!</h1>
          <p className="text-grey-800">
            I'm Rishik, and I have a deep passion for well-made movies. This
            website is my personal movie hub, where I share information about my
            favorite films, actors, and everything related to the world of
            entertainment.
          </p>
          <p className="text-grey-800 ">
            Explore the latest releases, discover hidden gems, and connect with
            other movie enthusiasts. Let's embark on a cinematic journey
            together!
          </p>
        </div>
        <div className="user-section  ">
          <br />
          <h2 className="text-2xl font-bold mb-4">Meet the Developer</h2>
          <User />
        </div>
      </div>
    </>
  );
};

export default About;
