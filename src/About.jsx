import React from "react";
import Common from "./Common";
import about from "../src/Images/about.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={about}
        visit="/services"
        btnname="Checkout our services"
      />
    </>
  );
};

export default About;
