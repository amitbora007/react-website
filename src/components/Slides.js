import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Work from "../Pages/Work";

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
