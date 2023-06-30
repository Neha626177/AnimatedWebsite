import React from "react";
import "./common.css";
import computer from './assets/computer.svg'
import {NavLink} from 'react-router-dom'

const Common = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center " >
        <div className="container-fluid nav_bg  " >
          <div className="row" >
            <div className="col-10 mx-auto  ">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-2 d-flex flex-column justify-content-center">
                <h1>{props.Name} <strong className="brand">RootLevel</strong></h1>
                <p className=" text-opacity-25 form-control-lg">
                  We are the team of talented developer making websites
                </p>
                <div className="">
                  <NavLink to = {props.visit} className="btn btn-primary button">{props.bname}</NavLink>
                </div>
              </div>

              <div className="col-md-6 pt-5 pt-lg-2 order-2 order-lg-1 ">
                <img src={props.imgsrc} alt="Computer " className="img-animated-fluid" height={250}/>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
