
// This is the team page

import ScrollToTop from "react-scroll-to-top"

function Team() {
  return (
    <section className="team_section">
      <div className="team_overlay">
        <img className="team_overlay_image" src={require("../assets/team_overlay_img.jpg")} alt="" />
        <h1>Meet Our Team</h1>
      </div>
      <div className="team_heading">
        <p>Our team encapsulates substantial experience within the fields of finance, entrepreneurship, and technology commercialization within a broad set of industries.</p>
      </div>

      <div className="team_flex">

        {/* Robert */}

        <div className="robert">
          <div className="team_member_content">
            <img src={require('../assets/Robert Happeny.jpg')} alt="" />
            <h2 className="name">Robert Happeny</h2>
            <p className="position">Co-Founder & Managing Partner</p>
            <details>
              <summary className="about_people">About Robert</summary>
                <p className="bio">Mr. Happeny was Vice President and head of the worldwide automotive sector for Lehman Brothers. He has extensive experience in cross-border merger and acquisitions, and in-depth knowledge of worldwide capital markets. He provided strategic advice relating to the automotive markets throughout the former Soviet Union, Eastern and Western Europe. Bob negotiated four joint ventures between U.S. Automotive manufacturers and the Soviet Automaker Avtovaz.</p>
                <br />
                <p className="bio">In addition, he was the lead manager for several mergers and acquisitions in Hungary and Poland and established the Technology Development Fund for the State Universities of New York. Many university innovations were commercialized. He created the Science and Technology Development (STDP) program in cooperation with former Soviet Union research institutes, and has worked closely with the World Bank, EBRD and International Banks.</p>
            </details>
          </div>
        </div>

        {/* Art */}

        <div className="art">
          <div className="team_member_content">
            <img src={require('../assets/Art DeGroat.jpg')} alt="" />
            <h2 className="name">Dr. Art DeGroat</h2>
            <p className="position">Co-Founder & Managing Partner</p>
            <details>
              <summary className="about_people">About Art</summary>
                <p className="bio">Dr. Art DeGroat is a nationally recognized leader in military related economic development and innovation, a scholar of adult development and human performance and a senior administrator at a major public research university. This combat-decorated military officer directs the Office of Military Affairs and Innovation Center at Kansas State University. He is recognized by three U.S. Secretaries of Defense for his achievements in the defense sector.</p>
                <br />
                <p className="bio">As founder and principle of Invictus Consulting LLC, Art has assisted 13 major companies adapt their talent acquisition and management systems to capitalize on transitioning military human capital. Art holds a Bachelors’ degree in Public Policy from Seton Hall University,  Masters degrees in both  Military Arts & Science and Adult Learning & Leadership as well as a Doctorate degree in Educational Leadership from Kansas State University. He serves on boards of several nationally prominent military and veteran service organizations.</p>
            </details>
          </div>
        </div>

        {/* Dharish */}

        <div className="dharish">
          <div className="team_member_content">
            <img src={require('../assets/Dharish Totiger.jpg')} alt="" />
            <h2 className="name">Dharish Totiger</h2>
            <p className="position">Associate</p>
            <details>
              <summary className="about_people">About Dharish</summary>
                <p className="bio">Mr. Totiger brings nearly 4 years of experience in the tech transfer industry, having performed intensive due diligence, market analysis, and commercialization duties for new technologies from New Mexico's leading research institution, the University of New Mexico. As a graduate student, Mr. Totiger was highly active in business development initiatives and programs that helped him further refine his skillset, including completing the National Science Foundation Innovation Corps Program, as well as the UNM Rainforest Accelerator program.</p> 
                <br />
                <p className="bio">Mr. Totiger holds a Bachelor's Degree in Computer Engineering from Visvesvaraya Technological University (Bangalore, India), as well as a Master's of Science in Information Systems and Assurance and an MBA (Finance and Entrepreneurship) from the University of New Mexico.</p>
            </details>
          </div>
        </div>

        {/* Mark */}

        <div className="mark">
          <div className="team_member_content">
            <img src={require('../assets/Mark Niederhaus.jpg')} alt="" />
            <h2 className="name">Mark Niederhaus</h2>
            <p className="position">Associate</p>
            <details>
              <summary className="about_people">About Mark</summary>
                <p className="bio">Mr. Niederhaus is a highly accomplished military veteran that brings valuable operational management and entrepreneurship experience. As Director of Operations for Villa Myriam Coffee company, he overhauled all operating procedures and sales efforts, leading a team of 12 to an annual revenue increase of 30%. As co-founder of Upwell Beverages, he spearheaded all product development and marketing efforts to create a five-state sales footprint in a regulatory dynamic environment.</p>
                <br />
                <p className="bio">As a graduate student, Mr. Niederhaus actively participated in entrepreneurship activities, including the UNM Rainforest Accelerator program. Mr. Niederhaus holds a Bachelor's Degree in Political Science (summa cum laude), and an MBA (Finance) from the University of New Mexico.</p>
            </details>
          </div>
        </div>
      </div>

      <div className="team_end_line"></div>

      <ScrollToTop smooth top={500} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}} className="scroll_to_top"/>
      
    </section>
  )
}

export default Team
