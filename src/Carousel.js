import React from "react";
import { NavLink } from "react-router-dom";
import { Link as Scroll} from 'react-scroll';

const Carousel = () => {
  return (
    <>
      <div className="main_header_div mt-5">
        {/*<video
        autoPlay
        loop
        muted
        style={{
          position:"absolute",
          width:"100%",
          height:"100%",
          left:"50%",
          top:"50%",
          objectFit:"cover",
          transform:"translate(-50%,-50%)",
          zIndex:"-1"
        }}
        >
          <source src={Power} type="video/mp4"/>
      </video>*/}
        <div className="center_div">
            {/* <h2 className="main_header__text">data has the power </h2>*/}
            <div className="header-content mt-5 pt-5">
              <b>
              <h2 className="txt-line1">"DATA"</h2></b>
              <h2 className="txt-line2">has the </h2>
              <b><h2 className="txt-line1">"POWER"</h2></b>
              <br/>
              <br/>
              <br/> 
            </div>
            <NavLink to="/login">
            <button className="main_header__btn"> Explore Now </button> 
          </NavLink>
          
          <div class="arrow d-flex flex-column mt-5">
            <br/>
            <br/>  
            <Scroll to="services">
            <NavLink to>
              {/*<i class="fas fa-chevron-down fa-3x text-danger" ></i>*/}
              <div class="arrow1">
                <span></span>
                <span></span>
            </div>
            </NavLink>
            </Scroll>
            </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
