import React from "react";
import Service from "./UserService";
import Social from "./Social";
import Carousel from "./Carousel1";
import Navbar from "./Navbar1";
import About from "./UserAbout";
import Contact from "./Contact1";
import Scroll from "./scroll";
import FAQ from "./FAQ/App"
const UserHome = () => {
  return (
    <>
      <Navbar />
      <div id="homess">
          <Carousel />
      </div>
      <div id="usess">
          <Service />
      </div>
      
      <div id="aboutss">
        <About />
      </div>
      <div id="faqs">
        <FAQ />
      </div>
      <div id="contactss">
        <Contact />
      </div>
      <Scroll />
    </>
  );
};

export default UserHome;
