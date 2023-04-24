
/*
TO-DO 

1. Add box shadow property to the link

*/


import { Link } from "react-router-dom"
import {FaArrowCircleRight} from "react-icons/fa"
import ScrollToTop from "react-scroll-to-top"

function Home() {
  
  return (
      <section className="home_page">
        <video src={require("../assets/website_video.mp4")} autoPlay muted loop></video>
        <div className="home_section">
          <div className="home_content">
            <p className="comp_name">Great Plains Partners</p>
            <h1>Demand-Pull Technology Commercialization</h1>
            <p className="other_description">GPP focuses on impact investing in innovative technologies including nascent technologies stemming from national laboratories and research institutions</p>
            <Link to="/about" className="about_link"><FaArrowCircleRight className="about_icon"/>Read More</Link>
          </div>
        </div>

        <div className="about_summary">
          <h1>How We Operate</h1>
          <div className="about_underline"></div>
          <div className="about_summary_grid">
            <div className="about_summary_content">
              <p>Great Plains Partners' (GPP) strategy is to identify and acquire nascent technologies of commercial promise including those from research universities and national laboratories within the historically limited funding phases of Technology Readiness Level (TRL) 4-6 (dubbed the funding “Valley of Death”) and allocate resources to rapidly mature these technologies for industry adoption.   </p>
            </div>
            <img src={require("../assets/about_summary_img.jpg")} alt="" />
          </div>
        </div>

        <div className="portfolio_summary">
          <h1>Portfolio</h1>
          <div className="portfolio_underline"></div>
          <p className="portfolio_note"><span className="bold_note">Please note</span>: Due to the sensitivity/classified nature of some of our technologies/partners, Great Plains Partners does not disclose all its investments and assets.</p>
          <div className="portfolio_summary_content">
            <img src={require("../assets/portfolio_summary_img.jpg")} alt="" />
            <h4>Critical Materials LLC</h4>
            <p>GPP focuses on providing resources to mature and transition innovations to our clients in innovative technologies, including nascent technologies stemming from national laboratories and research institutions.  </p>
            <div className="portfolio_link_holder">
              <Link to="/portfolio" className="portfolio_link">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="news_summary">
          <div className="news_summary_flex">
            <h1>Latest News Posts</h1>
            <div className="news_underline"></div>
            <div className="news_summary_grid">
              <div className="news_post_flex">
                <div className="news_summary_img">
                  <a href="https://sstp.org/wp-content/uploads/2023/03/SSTP-PARK-POST_MARCH_2023_FINAL.pdf " target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_0_img.jpg")} alt=""/></a>
                  <div className="news_date">
                    <p>March 1, 2023</p>
                  </div>
                </div>
                <div className="news_summary_content">
                  <a href="https://sstp.org/wp-content/uploads/2023/03/SSTP-PARK-POST_MARCH_2023_FINAL.pdf " target="_blank" rel='noopener noreferrer'>Great Plains Partners Opens Office at Sandia Science & Technology Park</a>
                  <p>Sandia Science & Technology Park</p>
                </div>
              </div>

              <div className="news_post_flex">
                <div className="news_summary_img">
                  <a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/" target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_1_img.jpg")} alt=""/></a>
                  <div className="news_date">
                    <p>February 3, 2023</p>
                  </div>
                </div>
                <div className="news_summary_content"> 
                  <a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/" target="_blank" rel='noopener noreferrer'>Highest-grade rare earth deposit to date identified in the US</a>
                  <p>Innovation News Network</p>
                </div>
              </div>

              <div className="news_post_flex">
                <div className="news_summary_img">
                  <a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_2_img.webp")} alt=""/></a>
                  <div className="news_date">
                    <p>January 17, 2023</p>
                  </div>
                </div>
                <div className="news_summary_content">
                  <a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " target="_blank" rel='noopener noreferrer'>How old batteries will help power tomorrow EVs</a>
                  <p>MIT Technology Review</p>
                </div>
              </div>

              <div className="news_post_flex">
                <div className="news_summary_img">
                  <a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " target="_blank" rel='noopener noreferrer'><img src={require("../assets/news_post_3_img.jpg")} alt=""/></a>
                  <div className="news_date">
                    <p>November 1, 2022</p>
                  </div>
                </div>
                <div className="news_summary_content">
                  <a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " target="_blank" rel='noopener noreferrer'>New Mexico is bucking to become a hydrogen power player</a>
                  <p>Autoweek</p>
                </div>
              </div>
            </div>
            <Link to="/news" className="news_link">View All Articles</Link>
            <div className="home_end_line"></div>

          </div>
        </div>

       
        <ScrollToTop smooth top={700} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}} className="scroll_to_top"/>
      </section>  
  )
}
export default Home
