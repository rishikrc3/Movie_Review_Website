import React, { useState } from "react";
import { useEffect } from "react";
import "./Routes.css";
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
  if (userData == null) return <>Loading</>;
  return (
    <>
      <div className="user-card">
        <div className="user-img">
          <img src={userData.avatar_url} alt="" />
        </div>
        <div className="user-info">
          <h1>Hi my name is: {userData.name}</h1>
          <h1>{userData.login}@gmail.com</h1>
          <h2>
            I made this website, absolutely enjoyed it , if you got an
            improvements, drop me a mail{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default User;
