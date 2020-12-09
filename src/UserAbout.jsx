import React from "react";
import logo from "../src/User/mainlogo.png";
import Navbar from "./Navbar1";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="abbg1">
      <div className="about_div" style={{paddingTop:"70px"}}>
        <h2>About Us</h2>
        <p className="centeral" style={{color:"#AFAEAE",fontSize:"16px",paddingTop:"10px"}}>Check out who and what are we doing</p>
        <div className="about_center__div container my-5">
          <div className="row mx-auto">
            <div className="col-lg-6 col-10 mx-auto ">
              <img className="img-fluid rounded mb-4" src={logo} alt="" style={{paddingTop:'60px'}}/>
            </div>
            <div className="col-lg-6 col-9 mx-auto abouttxt">
              <p>
              As the name suggest we are an <b>"Asset Tracking and Threat Detection tool"</b>. <br/><br/>
              The tool works on the model of <b>OSINT (i.e. Open-source intelligence)</b>, which actually refers a multi-methods (qualitative, quantitative) methodology for collecting, analyzing and making decision about data accessible in publicly available sources to be used in an intelligence context. <br/><br/>
              The tool mainly focuses on three key fields for threat detection, i.e., <br/>• Email Address<br/> • IP Address<br/> • Phone Number<br/> <br/>
              The tool is a one stop solution which works on multiple resources freely available over the internet in order to detect any spam or threat possessed to a user or organization. <br/><br/>
              The tool is based on <b>“simple to use”</b> concept keeping things as simple as possible for an end user to work with the utmost ease requiring no professional background or help. <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
