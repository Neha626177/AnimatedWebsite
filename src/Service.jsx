import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-4">Our services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
             
                  {Sdata.map((val, index) => {
                    return <Card imgsrc={val.imgsrc} tittle={val.tittle} />;
                  })}
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
