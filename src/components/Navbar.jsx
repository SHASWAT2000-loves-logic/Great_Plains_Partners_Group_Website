

/*
TO-DO 

1. Comments
2. Transition effect upon hovering

*/
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {

  const [isLaptop, setLaptop] = useState(window.innerWidth > 500);

  const updateMedia = () => {
    setLaptop(window.innerWidth > 500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  if(!isLaptop){
    return(
      <HamburgerMenu/>
    )
  }
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
