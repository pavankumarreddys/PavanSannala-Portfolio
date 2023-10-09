
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import { Helmet } from "react-helmet";

import './App.css'
import { useRef, useState } from "react";
import './BallAnimation.scss'; // Import the SCSS file
function App() {
  const [blast,setBlast] = useState(true)
  const videoUrl = 'https://www.youtube.com/embed/XWagK42ObUA?controls=0&showinfo=0';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PavanSannala || Portfolio</title>
        <meta name="description" content="portfolio of Pavan Sannala" />
      </Helmet>
    {blast? <div className="animation-container">
      {/* Four balls with different animation delays */}
      <div className="ball ball1">hii</div>
      <div className="ball ball2"></div>
      <div className="ball ball3"></div>
      <div className="ball ball4"></div>
    </div>
:
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills/>
      <Contact/>
      <SocialLinks/>
      </>
  }
    </div>
  );
}

export default App;
