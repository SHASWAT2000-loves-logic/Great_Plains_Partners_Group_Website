
import ScrollToTop from "react-scroll-to-top"

function News() {
  return (
    <section className="news_section">
      <div className="news_overlay">
        <img className="news_overlay_image" src={require("../assets/news_overlay_img.jpg")} alt="" />
        <h1>Recent News and Developments</h1>
      </div>
      <div className="news_wrapper">
        <div className="news_content">
          <div className="news_posts">
            <a href="https://sstp.org/wp-content/uploads/2023/03/SSTP-PARK-POST_MARCH_2023_FINAL.pdf " target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_0_img.jpg")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://sstp.org/wp-content/uploads/2023/03/SSTP-PARK-POST_MARCH_2023_FINAL.pdf " className="post_head" target="_blank" rel='noopener noreferrer'>Great Plains Partners Opens Office at Sandia Science & Technology Park</a>
              <p className="post_date">MAR 1, 2023 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - Sandia Science & Technology Park</p>
              <p className="post_intro">Great Plains Partners Venture Group, a private equity firm investing capital to mature and transition innovations to clients in the manufacturing, aerospace, and defense industries, opened a local... </p>
              <div className="main_post_link"><a href="https://sstp.org/wp-content/uploads/2023/03/SSTP-PARK-POST_MARCH_2023_FINAL.pdf " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>
          </div>
          <div className="news_posts">
            <a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/" target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_1_img.jpg")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/" className="post_head" target="_blank" rel='noopener noreferrer'>Highest-grade rare earth deposit to date identified in the US</a>
              <p className="post_date">FEB 3, 2023 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - Innovation News Network</p>
              <p className="post_intro">Results from analyses performed by Activation Labs – a highly-respected independent analytical laboratory in Ancaster, Canada –  have confirmed that the rare earth deposit has the highest reported total rare earth oxide (TREO) in the US. The discovery could be essential... </p>
              <div className="main_post_link"><a href="https://www.innovationnewsnetwork.com/highest-grade-rare-earth-deposit-to-date-identified-in-the-us/29539/ " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>
          </div>
          <div className="news_posts">
            <a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " target="_blank" rel='noopener noreferrer'><img src = {require("../assets/news_post_2_img.webp")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " className="post_head" target="_blank" rel='noopener noreferrer'>How old batteries will help power tomorrow EVs</a>
              <p className="post_date">JAN 17, 2023 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - MIT Technology Review</p>
              <p className="post_intro">To Redwood Materials, the rows of cardboard boxes in its gravel parking lot represent both the past and the future of electric vehicles. The makeshift storage space stretches for over 10 acres at Redwood’s new battery recycling site just outside Reno, Nevada. Most of the boxes are about the size of...</p>
              <div className="main_post_link"><a href="https://www.technologyreview.com/2023/01/17/1065026/evs-recycling-batteries-10-breakthrough-technologies-2023/ " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>
          </div>
          <div className="news_posts">
            <a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " target="_blank" rel='noopener noreferrer'><img src={require("../assets/news_post_3_img.jpg")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " className="post_head" target="_blank" rel='noopener noreferrer'>New Mexico is bucking to become a hydrogen power player</a>
              <p className="post_date">NOV 1, 2022 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - Autoweek</p>
              <p className="post_intro">Hydrogen fuel-cell advocates are working on developing solutions for transportation that doesn’t play well with batteries—long-distance trucking, container shipping, and even aircraft. New Mexico has applied to become one of four hydrogen hubs in the United States and share in $8 billion in federal funding through the Investment and Jobs Act...</p>
              <div className="main_post_link"><a href="https://www.autoweek.com/news/a41822090/states-shooting-for-hydrogen-fuel-cell-hub/ " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>
          </div>
          <div className="news_posts">
          <a href="https://hydrogen-central.com/the-most-abundant-chemical-universe-could-become-hot-commodity-hydrogen-fuel-cells-have-some-cost-barriers-upside-transportation-powering-homes-huge/ " target="_blank" rel='noopener noreferrer'><img src={require("../assets/news_post_4.png")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://hydrogen-central.com/the-most-abundant-chemical-universe-could-become-hot-commodity-hydrogen-fuel-cells-have-some-cost-barriers-upside-transportation-powering-homes-huge/ " className="post_head" target="_blank" rel='noopener noreferrer'>The most abundant chemical in the universe could become a hot commodity</a>
              <p className="post_date">OCT 19, 2022 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - Hydrogen Central</p>
              <p className="post_intro">The Most Abundant Chemical in the Universe Could Become a Hot Commodity, Hydrogen and fuel cells have some cost barriers, but the upside for transportation and powering homes is huge. Hydrogen and the fuel cells that use it have some cost barriers, but the upside for transportation and powering our homes is huge...</p>
              <div className="main_post_link"><a href="https://hydrogen-central.com/the-most-abundant-chemical-universe-could-become-hot-commodity-hydrogen-fuel-cells-have-some-cost-barriers-upside-transportation-powering-homes-huge/ " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>
          </div>
          <div className="news_posts">
          <a href="https://www.scmp.com/comment/opinion/world/article/3191039/how-clean-energy-transition-exposes-world-new-vulnerabilities " target="_blank" rel='noopener noreferrer'><img src={require("../assets/news_post_5.png")} alt="" className="post_image"/></a>
            <div className="news_post_content">
              <a href="https://www.scmp.com/comment/opinion/world/article/3191039/how-clean-energy-transition-exposes-world-new-vulnerabilities " className="post_head" target="_blank" rel='noopener noreferrer'>How the clean energy transition exposes the world to new vulnerabilities</a>
              <p className="post_date">SEP 3, 2022 | NEWS ARTICLE</p>
              <p className="post_courtesy"><span className="courtesy_bold">Courtesy</span> - South China Morning Post</p>
              <p className="post_intro">As we begin the transition from fossil fuels towards clean energy, we are in danger of replacing the existential threat of global warming with a new and pernicious vulnerability. A cluster of minerals, such as copper, cobalt, lithium, nickel and rare earths, at the heart of clean technologies is poised to create pressure points – and a suite of... </p> 
              <div className="main_post_link"><a href="https://www.scmp.com/comment/opinion/world/article/3191039/how-clean-energy-transition-exposes-world-new-vulnerabilities " target="_blank" rel='noopener noreferrer'>View Full Article</a></div>
            </div>

          </div>

        </div>


      </div>

      <ScrollToTop smooth top={500} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}}/>


    </section>
  )
}

export default News
