import React from "react";
import "./home.css";
import ImageSlider from "./Slider/ImageSlider";
import SliderData from "./Slider/SliderData";

const Home = () => (
  <div>
    <ImageSlider slides={SliderData} />
  </div>
);

export default Home;
