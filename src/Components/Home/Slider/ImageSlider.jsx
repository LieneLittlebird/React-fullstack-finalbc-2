import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import SliderData from "./SliderData";
import "./slider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => (
        <div
          key={slide.image}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <img src={slide.image} alt="dune" className="slider-image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
