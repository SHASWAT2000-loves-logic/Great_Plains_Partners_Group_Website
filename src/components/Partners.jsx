
import ScrollToTop from "react-scroll-to-top"


function Partners() {
  return (
    <section className="partners_section">
      <div className="partners_overlay">
        <img className="partners_overlay_image" src={require("../assets/partners_overlay_img.jpg")} alt="" />
        <h1>Our Partners/Affiliations</h1>
      </div>

      <div className="partners_content">
        <p>Great Plains Partners is a proud affiliate of the Critical Materials Institute, which is a consortium of 15 research universities, 4 national labs, and 27 industry partners, and the Association of the United States Army. We leverage our affiliations to intricately evaluate innovative technologies and their dynamic industries.</p>
      </div>
      <div className="partners_image">
        <div className="partners_flex">
          <img src={require("../assets/Partners_1_img.png")} alt="" />
          <img src={require("../assets/Partners_2_img.jpg")} alt="" className="partners_img_2" />
        </div>
        <div className="partners_img_3">
          <img src={require("../assets/Partners_3_img.png")} alt="" />
        </div>
      </div>
      
      <div className="about_end_line"></div>

      <ScrollToTop smooth top={500} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}}/>
      
    </section>
  )
}

export default Partners
