import React from "react";
import Common from "./Common";
import img3 from "./assets/img3.png";

const About = () => {
  return (
    <div>
      <Common
        Name="Welcome to About page "
        bname="Contact us"
        visit="/contact"
        imgsrc={img3}
      />
    </div>
  );
};

export default About;
