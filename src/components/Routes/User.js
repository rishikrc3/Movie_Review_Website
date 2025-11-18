import React, { useState } from "react";
import { useEffect } from "react";

import img from "../logo/Pic.jpg";

const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    console.log("Hi");
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("Fetch Data called");
    const data = await fetch("https://api.github.com/users/rishikrc3");
    const json = await data.json();
    setUserData(json);
    console.log(json.name);
  };

  /**
   * The API call was made just to practice, github api does not have unlimited api calls, so I am removing them and using hardcoded values
   */
  if (userData == null) return <>Loading</>;
  return (
    <>
      <div className="user-card bg-white p-8 rounded-lg shadow-md md:flex items-center transform transition-transform hover:scale-105">
        <div className="user-img md:mr-8">
          <img
            src={img}
            alt=""
            className="rounded-full h-24 w-24 md:h-32 md:w-32 object-cover"
          />
        </div>
        <div className="user-info">
          <h1 className="text-2xl font-bold mb-2">Hi my name is, Rishik</h1>
          <h1 className="text-lg text-gray-600 mb-2">rishik@gmail.com</h1>
          <h2 className="text-gray-700">
            I made this website, absolutely enjoyed it , if you got an
            improvements, drop me a mail{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default User;
