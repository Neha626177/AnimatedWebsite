import React from "react";
import computer from "./assets/computer.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
   <Common 
    Name="Grow your business with "
        bname="Get started"
        visit="/service"
        imgsrc={computer}
   />
    </>
  );
};

export default Home;
