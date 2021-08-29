import React from "react";
import web from "../src/Images/undraw_maker_launch_crhe.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
      name="Grow your business with"
      imgSrc={web}
      visit = "/service"
      btName = 'Get Started'
      />
    </>
  );
};

export default Home;
