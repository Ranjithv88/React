import Slider from "react-slick";
import "./DivSlider.scss";
import Header from "../header/Header";

const DivSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="logo">
          <h3>1</h3>
          <h2>ansf</h2>
        </div>
        <div className="logo">
          <h3>2</h3>
        </div>
        <div className="logo">
          <h3>3</h3>
        </div>
        <div className="logo">
          <h3>4</h3>
        </div>
        <div className="logo">
          <h3>5</h3>
        </div>
        <div className="logo">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default DivSlider;
