import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Hero,
  About,
  Features,
  Testimonials,
  CtaSection,
  // Footer,
} from "./components/";

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: onabort,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
