
// This is the strategy page

import ScrollToTop from "react-scroll-to-top"

function Strategy() {
  return (
    <section className="strategy_section">
      <div className="strategy_overlay">
        <img className="strategy_overlay_image" src={require("../assets/strategy_overlay_img.jpg")} alt="" />
        <h1>Our Strategy</h1>
      </div>

      <div className="strategy_heading">
        <p>Great Plains Partners' strategy is to identify and acquire nascent technologies of commercial promise including those from research universities and national laboratories within the historically limited funding phases of Technology Readiness Level (TRL) 4-6 (dubbed the funding “Valley of Death”) and allocate resources to rapidly mature these technologies for industry adoption.</p>
      </div>
      <div className="strategy_main_img">
        <img src={require("../assets/strategy_1_image.png")} alt="" />
      </div>

      <div className="strategy_sec_heading">
        <h1>Standard Operating Procedure</h1>
        <div className="strategy_underline"></div>
        <p>Our standard operating procedure focuses on a 48-month investment window.</p>
      </div>
      <div className="strategy_sec_img">
        <img src={require("../assets/strategy_2_image.jpg")} alt="" />
      </div>
      
      <div className="about_end_line"></div>

      <ScrollToTop smooth top={500} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}} className="scroll_to_top"/>
     
    </section>
  )
}

export default Strategy
