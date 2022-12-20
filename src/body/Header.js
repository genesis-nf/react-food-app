import logo from '../images/logo.png';
import home from '../images/home.png';
import Hamburger from "./Hamburger";
import { useState } from 'react';
import Nav from './Hamburger-menu';


function Header() {
   
    return (
        <>
          <section class="top-nav">
            <header>
          <h1>Take Away<img src={logo} alt="logo" /></h1>
          <button className="hbutton"><img src={home} alt="home" id="home"/></button>
            </header>
            
           <Nav/><Hamburger/>
         </section>
        </>
    );
  }

  export default Header;



  //<a href="" class="icon" onclick="myFunction()"/>
  //imglinea 8 logo

  // <label className='menu-button-container' for="menu-toggle">
  //     <div className='menu-button'></div>
  //      </label>
  //          <ul className="menu">
  //            <li> <a href="#account">My Account</a></li>
  //            <li> <a href="#orders">My Orders</a></li>
  //            <li> <a href="#cart">My Cart</a></li>
 //             <li><a href="#settings">Settings</a></li>
  //            <li><a href="#termsandconditions">Terms and Conditions</a></li>
  //          </ul>
  //</>       </section></>