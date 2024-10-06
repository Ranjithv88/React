import React, { useState, useRef, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleMouseDown = (event) => {
      setDragging(true);
      setDragStartX(event.pageX || event.touches[0].pageX);
    };
    const handleMouseMove = (event) => {
      if (dragging) {
        const dragEndX = event.pageX || event.touches[0].pageX;
        const dragDistance = dragEndX - dragStartX;
        const sliderWidth = slider.offsetWidth;
        const imageCount = images.length;
        const pixelsPerImage = sliderWidth / imageCount;
        const imageOffset = Math.round(dragDistance / pixelsPerImage);
        const newIndex = (currentImageIndex - imageOffset + imageCount) % imageCount;
        setCurrentImageIndex(newIndex);
      }
    };
    const handleMouseUp = () => {
      setDragging(false);
    };
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('touchstart', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('touchmove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('touchend', handleMouseUp);
    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('touchstart', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('touchmove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('touchend', handleMouseUp);
    };
  }, [currentImageIndex, dragging, dragStartX, images]);

  return (
    <div className="slider" ref={sliderRef}>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          className="slider-image"
          src={imageUrl}
          alt={`Slider image ${index}`}
          style={{ transform: `translateX(${-100 * currentImageIndex}%)` }}
        />
      ))}
    </div>
  );
};

export default Slider;
