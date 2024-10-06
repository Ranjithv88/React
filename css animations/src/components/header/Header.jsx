import { useEffect, useState, useRef } from "react";
import "./header.scss";
import DivSlider from "../slider/DivSlider";

const Header = () => {
  const [scroll, SetScroll] = useState(0);
  const [height, setHeight] = useState(100);
  const [jc, setJc] = useState("center");
  const [fd, setFd] = useState("column");
  const [fontSize, setFontSize] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      console.log(position);
      SetScroll(position);
      setHeight(position < 100 ? 100 : 10);
      setJc(position < 100 ? "center" : "space-evenly");
      setFd(position < 100 ? "column" : "row");
      setFontSize(position < 100 ? 6 : 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlecontent = () => {};
  return (
    <div className="header">
      <div
        className="head"
        style={{
          height: `${height}vh`,
          justifyContent: `${jc}`,
          flexDirection: `${fd}`,
        }}
      >
        <div className="logo">
          <h2 style={{ fontSize: `${fontSize}em` }}>Logo</h2>
        </div>
        <div className="list">
          <p>Home</p>
          <p>Accommodations</p>
          <p>Activities</p>
          <p>Dining</p>
          <p>Attractions</p>
          <p>Gallery</p>
          <p>Contact</p>
          <p>Book Now</p>
        </div>
      </div>

      <div className="content">
        <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
