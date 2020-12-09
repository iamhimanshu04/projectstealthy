import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
 

const UserUse = () => {
  return (
    <>
      <Navbar />
      <div className="service_div mt-5 bg-light">
        <h2>How to go ahead?</h2>
        <div className="sevice_center__div container">
          <div className="row">
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__1">
              <i class="fas fa-hand-point-up fa-5x"></i>
                
                  <h2>Register</h2>
                
                <br/>
                <p>
                  Get yourself registered with us by providing some details with us.
                  And dont worry we dont share your details with anyone ;-))
                </p>
              </div>
            </div>
            {/* 2nd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__2">
              <i class="fas fa-search fa-5x"></i>
                
                  <h2> Select Category </h2>
                
                <br/>
                <p>
                  Select the Category you want to get results for.
                  Currently we serve:
                  <br/>
                  • Email Address<br/>
                  • IP Address (Upcoming)<br/>
                  • Phone Number (Upcoming) 
                </p>
              </div>
            </div>
            {/* 3rd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__3">
              <i class="far fa-file-alt fa-5x"></i>
                
                  <h2> Get Results </h2>
                
                <br/>
                <p>
                  After selecting your category and entering the data to be searched.<br/>
                  You get your result (in JSON Format)<br/>
                  With an exclusive "Stealthy Score"<br/>
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

export default UserUse;
