// The App component is the parent component and contains all the other components aka pages.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Contact from "./components/Contact";
import Strategy from "./components/Strategy";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import ScrollToTop from "./components/ScrollToTop";
import PitchDeck from "./components/PitchDeck";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  /*
  1. This is the structure of the website
  2. Router is used for navigation links 
  3. ScrollToTop is the button that is clicked to reach the top of the page
  4. Route tags are the individual pages of the website. 
  5. path is the link assigned to each individual page in the website
  */

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        {/* about page  */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* strategy page */}

        <Route
          path="/strategy"
          element={
            <>
              <Navbar />
              <Strategy />
              <Footer />
            </>
          }
        />

        {/* portfolio page */}

        <Route
          path="/portfolio"
          element={
            <>
              <Navbar />
              <Portfolio />
              <Footer />
            </>
          }
        />

        {/* team page */}

        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <Team />
              <Footer />
            </>
          }
        />

        {/* partners page */}

        <Route
          path="/partners"
          element={
            <>
              <Navbar />
              <Partners />
              <Footer />
            </>
          }
        />

        {/* news page */}

        <Route
          path="/news"
          element={
            <>
              <Navbar />
              <News />
              <Footer />
            </>
          }
        />

        {/* contact page */}

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* pitch deck page */}

        <Route
          path="/pitch-deck"
          element={
            <>
              <Navbar />
              <PitchDeck />
              <Footer />
            </>
          }
        />

        {/* privacy policy page */}

        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* for any other subpage of the website apart from the above, the page not found error is shown */}

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
