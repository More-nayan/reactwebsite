import React from "react";
import Common from "./Common";
import presentation from "./Images/undraw_All_the_data_re_hh4w.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgSrc={presentation}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
};

export default About;
