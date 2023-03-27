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
  return (
    <Router>
      <ScrollToTop />
      <Routes>
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

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
