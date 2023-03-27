


import ScrollToTop from "react-scroll-to-top"

function About() {
  return (
    <section className="about_section">
      <div className="about_overlay">
        <img className="about_overlay_image" src={require("../assets/about_overlay_img.jpg")} alt="" />
        <h1>About Us</h1>
      </div>

      <div className="about_page_content">
        <div className="about_page_flex">
          <div className="flip-card card_1" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={require("../assets/what_we_do_icon.png")} alt="" />
                <h2>What We Do</h2>
              </div>
              <div className="flip-card-back">
                <p>Great Plains Partners is a venture capital firm deploying resources to mature and transition innovations to our clients in innovative technologies, including nascent technologies stemming from national laboratories and research institutions.</p>
              </div>
            </div>
          </div>


          <div className="flip-card card_2" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={require("../assets/mission_icon.png")} alt="" />
                <h2>Mission</h2>
              </div>
              <div className="flip-card-back">
                <p>Our mission is to create long-term value for our investors through the careful stewardship of their capital. In partnership with our industrial clients, we form and finance technology development companies that perform applied research that delivers prototype systems and mature technologies for adoption within their industry.</p>
              </div>
            </div>
          </div>



          <div className="flip-card card_2" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={require("../assets/strategy_icon.png")} alt="" />
                <h2>Strategy</h2>
              </div>
              <div className="flip-card-back">
                <p>GPP’s strategy is to identify and acquire nascent technologies of commercial promise including those from research universities and national laboratories within the historically limited funding phases of TRL 4-6 (dubbed the funding “Valley of Death”) and allocate resources to rapidly mature these technologies for industry adoption.   </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_end_line"></div>

      
     
      <ScrollToTop smooth top={550} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}}/>
      

    </section>
  )
}

export default About
