import "./about.scss";
import React, { useState, useEffect } from 'react';

const About = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    function checkScroll() {
      const element = document.querySelector('.animate');
      if (isElementVisible(element)) {
        setIsAnimated(true);
      }
    }

    function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);


  return (
    <div className="about">
      {/* <h1 className="fade-in">Hello, World!</h1>
       <h1 className='slide-in'>Hello World</h1>
       <h1 class="move">Hello, World!</h1> */}
      <h1 className={`animate ${isAnimated ? "active" : ""}`}>Hello, World!</h1>
    </div>
  );
};

export default About;
