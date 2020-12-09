import React, { Fragment, useRef } from 'react';
import logo from '../src/User/mainlogo.png';
import Navbar from './Navbar1';

const Docs =() =>{
	 
	return(
        <>
		<div class="sidenav">
          <a href="#about">About</a>
            <button class="dropdown-btn">Dropdown 
                   <i class="fa fa-caret-down"></i>
           </button>
            <div class="dropdown-container"> 
                 <a href="#">Link 1</a>
            </div>
             <button class="dropdown-btn">Dropdown 
               <i class="fa fa-caret-down"></i>
             </button>
            <div class="dropdown-container">
             <a href="#">Link 1</a>
           </div>
            <button class="dropdown-btn">Dropdown 
             <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
               <a href="#">Link 1</a>
            </div>
           <a href="#contact">Search</a>
   </div>

	)
};

}
export default Docs;



