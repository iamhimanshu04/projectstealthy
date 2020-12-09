import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      {/* <Navbar /> */} 
      <div className="service_div mt-5 bg-light">
        <h2>How to go ahead?</h2>
        <p className="centeral" style={{color:"#AFAEAE",fontSize:"16px",paddingTop:"10px"}}>Get to know how to move ahead</p>
        <div className="sevice_center__div container">
          <div className="row">
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__1">
              <i class="fas fa-hand-point-up fa-5x"></i>
                
              <p className="servtxt">Register</p>
                
                <br/>
                <p className="servtxt1">
                  Get yourself registered with us by providing some details with us.
                  And dont worry we dont share your details with anyone ;-))
                </p>
              </div>
            </div>
            {/* 2nd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__2">
              <i class="fas fa-search fa-5x"></i>
                
              <p className="servtxt"> Select Category </p>
                
                <br/>
                <p className="servtxt1">
                  <b>Currently we offer:</b>
                  <br/><br/>
                  <i class="fas fa-envelope"></i> Email Address Verification<br/>
                  <i class="fas fa-globe"></i> IP Address Verification<br/>
                  <i class="fas fa-phone-alt"></i> Phone Number Verification
                </p>
              </div>
            </div>
            {/* 3rd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__3">
              <i class="far fa-file-alt fa-5x"></i>
                
                  <p className="servtxt"> Get Results </p>
                
                <br/>
                <p className="servtxt1">
                  After selecting your category and entering the data to be searched.<br/>
                  With an exclusive <b>"Stealthy Score"</b><br/>
                  Easy isn't it ! 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
