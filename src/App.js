
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import { Helmet } from "react-helmet";

import './App.css'

function App() {
  return (
    <div >

      <Helmet>
        <meta charSet="utf-8" />
        <title>PavanSannala || Portfolio</title>
        <meta name="description" content="portfolio of Pavan Sannala" />
      </Helmet>

      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills/>
      <Contact/>


      <SocialLinks/>

      
    </div>
  );
}

export default App;
