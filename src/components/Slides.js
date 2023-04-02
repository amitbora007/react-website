import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";

const Slides = () => {
  return (
    <div className="slides">
      <div className="slide" id="1">
        <Home />
      </div>
      <div className="slide" id="2">
        <About />
      </div>
      <div className="slide" id="3">
        <Services />
      </div>
      <div className="slide" id="4">
        <Work />
      </div>
      <div className="slide" id="5">
        <Contact />
      </div>
    </div>
  );
};

export default Slides;
