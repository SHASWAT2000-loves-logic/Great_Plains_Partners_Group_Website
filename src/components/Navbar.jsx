

// This is the navbar component. There are 2 ways it will be displayed depending on the screen width. 
// If the width of the device is less than 500x aka mobile device, then there will be a hamburger menu
// if the width is greater than 500px aka tablets, laptops then the horizontal navbar at the top right is displayed. 
// The navbar is positioned fixed, which means that it is not scrollable and will always appear at the top

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {

  // storing width of the device and checking whether the width is greater or less than 500px

  const [isLaptop, setLaptop] = useState(window.innerWidth > 500);

  // isLaptop variable is updated here depending on the width of the device

  const updateMedia = () => {
    setLaptop(window.innerWidth > 500);
  };

  // checking when the window is resizing aka when the width of the device is decreasing from any device to mobile 

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // for mobile devices - hamburger menu is displayed

  if(!isLaptop){
    return(
      <HamburgerMenu/>
    )
  }

  // for all other devices 

  else{
    return (
      <div className="navbar">
        <Link to="/"><img src={require("../assets/GPP_Logo.jpg")} alt="" className="gpp_logo" /></Link>
  
        <nav>
            <ul>
              <li><NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>Home</NavLink></li>
              <li><NavLink to="/about" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>About</NavLink></li>
              <li><NavLink to="/strategy" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>Strategy</NavLink></li>
              <li><NavLink to="/portfolio" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>Portfolio</NavLink></li>
              <li><NavLink to="/team" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>Team</NavLink></li>
              <li><NavLink to="/partners" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>Partners</NavLink></li>
              <li><NavLink to="/news" className={(navData) => (navData.isActive ? "active-style" : 'menu_item')}>News</NavLink></li>
              <li><NavLink to="/contact" className={(navData) => (navData.isActive ? "active-style" : 'contact_link')}>Contact</NavLink></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
