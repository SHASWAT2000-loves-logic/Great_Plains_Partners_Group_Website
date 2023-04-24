import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function HamburgerMenu() {
  let location = useLocation();
  // console.log(location);
  const [isOpen, setOpen] = useState(false);
  
  const handleToggle = () =>{
    if(location.pathname==="/" && !isOpen){
      document.querySelector(".home_page").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/" && isOpen){
      document.querySelector(".home_page").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }

    if(location.pathname==="/about" && !isOpen){
      document.querySelector(".about_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/about" && isOpen){
      document.querySelector(".about_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }



    if(location.pathname==="/strategy" && !isOpen){
      document.querySelector(".strategy_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/strategy" && isOpen){
      document.querySelector(".strategy_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }



    if(location.pathname==="/portfolio" && !isOpen){
      document.querySelector(".portfolio_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/portfolio" && isOpen){
      document.querySelector(".portfolio_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }
    


    if(location.pathname==="/team" && !isOpen){
      document.querySelector(".team_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/team" && isOpen){
      document.querySelector(".team_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }


    if(location.pathname==="/partners" && !isOpen){
      document.querySelector(".partners_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/partners" && isOpen){
      document.querySelector(".partners_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }

    if(location.pathname==="/news" && !isOpen){
      document.querySelector(".news_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/news" && isOpen){
      document.querySelector(".news_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }


    if(location.pathname==="/contact" && !isOpen){
      document.querySelector(".contact_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/contact" && isOpen){
      document.querySelector(".contact_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }


    if(location.pathname==="/pitch-deck" && !isOpen){
      document.querySelector(".pitch_deck_section").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/pitch-deck" && isOpen){
      document.querySelector(".pitch_deck_section").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }

    if(location.pathname==="/privacy-policy" && !isOpen){
      document.querySelector(".privacy_policy").style.display="none";
      document.querySelector(".footer_section").style.display="none";
    }
    else if(location.pathname==="/privacy-policy" && isOpen){
      document.querySelector(".privacy_policy").style.display="block";
      document.querySelector(".footer_section").style.display="block";
    }
    
   
  }
  const handleClick = () =>{
    setOpen((open) => !open);
    handleToggle();
  }


  if(!isOpen){
    return (
      <div className="navbar">
        <Link to="/"><img src={require("../assets/GPP_Logo.jpg")} alt="" className="gpp_logo" /></Link>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} direction="right" color="#fff" size={25} duration={1} onToggle={handleToggle} className="hamburger_icon"/>
        </div>
      </div>
    );
  }
  else{

    return (
      
        <>
          <div className="navbar">
            <Link to="/"><img src={require("../assets/GPP_Logo.jpg")} alt="" className="gpp_logo" /></Link>
            <div className="hamburger">
              <Hamburger toggled={isOpen} toggle={setOpen} direction="right" color="#fff" size={25} duration={1} onToggle={handleToggle} className="hamburger_icon"/>
            </div>
          </div>
          <nav className="mobile_navbar">
            <ul>
              <li><NavLink to="/" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Home</NavLink></li>
              <li><NavLink to="/about" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>About</NavLink></li>
              <li><NavLink to="/strategy" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Strategy</NavLink></li>
              <li><NavLink to="/portfolio" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Portfolio</NavLink></li>
              <li><NavLink to="/team" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Team</NavLink></li>
              <li><NavLink to="/partners" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Partners</NavLink></li>
              <li><NavLink to="/news" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>News</NavLink></li>
              <li><NavLink to="/contact" className={(navData) => (navData.isActive ? "active-link" : 'mobile_menu_item')} onClick={handleClick}>Contact</NavLink></li>
            </ul>
          </nav>
        </>
        
    )
  }
}

export default HamburgerMenu;