import React from "react";
import Common from "./Common";
import home from "../src/Images/home.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={home}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
