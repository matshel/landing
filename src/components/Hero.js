import React from "react";

// import Hero data
import { heroData } from "../data";

const Hero = () => {
  // destructure Hero data
  const { title, subtitle, btnButton, image } = heroData;

  return (
    <section>
      <div className='container mx-auto'>
        <div>
          {/* { text } */}
          <div>
            <h1> {title} </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
