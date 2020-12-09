import React from "react";
import Navbar from "./Navbar1";
import { NavLink } from "react-router-dom";

const UserService = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="contactbg">
      <div className="service_div mt-5 bg-light">
        <h2>How to go ahead?</h2>
        <p className="centeral" style={{color:"#AFAEAE",fontSize:"16px",paddingTop:"10px"}}>Get to know how to move ahead</p>
        <div className="sevice_center__div container">
          <div className="row">
          
            <div className="col-lg-4 col-12 ">
            <NavLink to="/explore">
              <div className="service_title1 mt-5 service_title__1">
              <i class="fas fa-hand-point-up fa-5x"></i>
              <p className="servtxt">Explore Page</p>
                
                <br/>
                <p className="servtxt1">
                  Go to the <b>Explore Page</b>, where you can enter data for unique results. <br/>
                  Keeping everything safe with us !
                </p>
                
								{/*	<button className="explore_btn00">
										Explore Now
          </button>*/}
								
              </div>
              </NavLink>
            </div>
            {/* 2nd service_title */}
            <div className="col-lg-4 col-12 ">
            <NavLink to="/explore">
              <div className="service_title1 mt-5 service_title__2">
              <i class="fas fa-search fa-5x"></i>
                
              <p className="servtxt"> Select Category </p>
                
                <br/>
                <p className="servtxt1">
                  <b>Currently we offer:</b>
                  <br/><br/>
                  <i class="fas fa-envelope"></i> Email Verification<br/>
                  <i class="fas fa-globe"></i> IP Verification<br/>
                  <i class="fas fa-phone-alt"></i> Phone Verification
                </p>
                
									{/*<button className="explore_btn01">
										Explore Now
                </button>*/}
								
              </div>
              </NavLink>
            </div>
            {/* 3rd service_title */}
            <div className="col-lg-4 col-12 ">
              <NavLink to="/explore">
              <div className="service_title1 mt-5 service_title__3">
              <i class="far fa-file-alt fa-5x"></i>
                
                  <p className="servtxt"> Get Results </p>
                
                <br/>
                <p className="servtxt1">
                  After selecting your category and entering the data to be searched.<br/>
                  With an exclusive <b>"Stealthy Score"</b>
                </p>
               {/*
									<button className="explore_btn02">
										Explore Now
               </button>*/}
								
              </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UserService;
