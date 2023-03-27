
import { useState } from "react";
import CriticalMaterials from "./CriticalMaterials";
import ScrollToTop from "react-scroll-to-top"

function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const orgText = "Critical Materials was established to provide a new domestic source of rare earth elements through the extraction from coal waste and other metal hosting materials in an environmentally “green” manner.";
  
  return (
    <section className="portfolio_section">
      <div className="portfolio_overlay">
        <img className="portfolio_overlay_image" src={require("../assets/portfolio_summary_img.jpg")} alt="" />
        <h1>Portfolio Companies</h1>
      </div>
      
      <div className="portfolio_heading">
        <p>Great Plain Partners focuses on providing resources to mature and transition innovations to our clients in innovative technologies, including nascent technologies stemming from national laboratories and research institutions.</p>
      </div>
      <div className="portfolio_comp">
        <div className="comp_image">
          <img src={require("../assets/Critical_Materials.png")} alt="house" />
        </div>
        <div className="comp_content">
          <p>
            {showMore ? <CriticalMaterials/>: orgText}
            <button 
              className="read_more"
              onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Read more..."}
            </button>
        </p>
        </div>
      </div>

      <div className="about_end_line"></div>

      <ScrollToTop smooth top={400} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}}/>
      
    </section>
  )
}

export default Portfolio
