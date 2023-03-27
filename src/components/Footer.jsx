import { Link } from "react-router-dom"
import {FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

// bizdev@greatplainsventures.com

function Footer() {
  const handleClick = () =>{
    const cont = document.getElementById("privacy_notice");
    cont.style.display="none";
  }
  return (
    <section className="footer_section">
      <div className="footer_flex">
        <div className="gpp_logo_img">
          <img src={require("../assets/GPP_Logo.jpg")} alt="" className="gpp_logo_footer" />
        </div>
        <div className="explore_links">
          <h1>Explore</h1>
          <div className="footer_short_underline"></div>
          <a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/"  target="_blank" rel='noopener noreferrer'>Highest-grade rare earth deposit to date identified in the US</a>
          <a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " target="_blank" rel='noopener noreferrer'>How old batteries will help power tomorrow EVs</a>
          <a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " target="_blank" rel='noopener noreferrer'>New Mexico is bucking to become a hydrogen power player</a>
          <a href="https://hydrogen-central.com/the-most-abundant-chemical-universe-could-become-hot-commodity-hydrogen-fuel-cells-have-some-cost-barriers-upside-transportation-powering-homes-huge/ " target="_blank" rel='noopener noreferrer'>The most abundant chemical in the universe could become a hot commodity</a>
          <a href="https://www.scmp.com/comment/opinion/world/article/3191039/how-clean-energy-transition-exposes-world-new-vulnerabilities " target="_blank" rel='noopener noreferrer'>How the clean energy transition exposes the world to new vulnerabilities</a>
        </div>
        <div className="gpp_contact">
          <h1>Quick Links</h1>
          <div className="footer_short_underline"></div>
          <Link to="/contact" className="footer_links">Contact</Link>
          <Link to="/about" className="footer_links">About</Link>
          <Link to="/strategy" className="footer_links">Strategy</Link>
          <Link to="/portfolio" className="footer_links">Portfolio</Link>
          <Link to="/team" className="footer_links">Team</Link>
          <Link to="/partners" className="footer_links">Partners</Link>
        </div>
      </div>

      <div className="footer_footer">
        <div className="footer_separator"></div>
        <div className="footer_flex_2">
         <div className="footer_follow_us">
          <h1>Follow Us</h1>
          <div className="footer_short_underline"></div>
          <a href="https://linkedin.com" target="_blank" rel='noopener noreferrer'><FaLinkedin className="linkedIn_icon" /></a>
          <a href="https://twitter.com" target="_blank" rel='noopener noreferrer'><FaTwitter className="twitter_icon" /></a>
          <a href="https://youtube.com" target="_blank" rel='noopener noreferrer'><FaYoutube className="youtube_icon"/></a>
         </div>
         <div className="footer_contact">
          <h1>Great Plains Partners</h1>
          <div className="footer_short_underline"></div>
          <p>Great Plains Partners LLC</p> 
          <p>1800 Kimball Ave-Suite 150</p>
          <p className="address">Manhattan, KS 66502-3373</p>
          <Link to="/contact" className="footer_contact_link">Contact Us</Link>
         </div>
         <div className="footer_pitch">
          <h1>Send us your pitch deck</h1>
          <div className="footer_short_underline"></div>
          <p>We invite patent-based technology/startups in the (pre-)seed stage to send us their pitch deck.</p>
          <Link to="/pitch-deck" className="footer_contact_link">Send Us Your Pitch Deck</Link>
         </div>
        </div>
      </div>

      <div className="privacy_policy_notice" id="privacy_notice">
        <p>By visiting our website, you agree to our <Link to="/privacy-policy" className="privacy_policy_link">Privacy Policy</Link><button className="privacy_policy_button" onClick={handleClick} >Ok</button></p>
      </div>
    </section>
  )
}

export default Footer
