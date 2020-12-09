import React, { Fragment } from "react";
import logo from "../src/User/mainlogo.png";
import { NavLink } from "react-router-dom";
import { Link as Scroll} from 'react-scroll'

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container-fluid">
          <div className="row"> 
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-md navbar-light">
              <Scroll to="homes">
                <div
                  activeClassName="active_page"
                  className="navbar-brand"
                  style={{cursor:'pointer'}}
                >
                  <img src={logo} alt="" />
                </div>
                </Scroll>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"/>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    {/*
                    <Scroll to="homes">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <NavLink
                        exact
                        activeClassName="active_page"
                        className="nav-link"
                        to
                      >
                        Home
                      </NavLink>
                    </li>
                    </Scroll>*/}
                    <Scroll to="services">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                    data-toggle="collapse" data-target=".navbar-collapse.show">
                      <NavLink
                        exact
                        activeClassName="active_page"
                        className="nav-link"
                        to
                      >
                        Use
                      </NavLink>
                    </li>
                    </Scroll>
                    <Scroll to="abouts">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                    data-toggle="collapse" data-target=".navbar-collapse.show">
                      <NavLink
                        exact
                        activeClassName="active_page"
                        className="nav-link"
                        to
                      >
                        About
                      </NavLink>
                    </li>
                    </Scroll>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <NavLink
                        exact
                        activeClassName="active_page"
                        className="nav-link"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <NavLink
                        exact
                        activeClassName="active_page"
                        className="nav-link"
                        to="/Register"
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
