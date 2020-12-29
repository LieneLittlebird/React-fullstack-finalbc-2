import React from "react";
import ArticleCards from "./ArticleCards/ArticleCards";
import "./home.css";
import ImageSlider from "./Slider/ImageSlider";
import SliderData from "./Slider/SliderData";

const Home = () => (
  <div>
    <ImageSlider
      slides={SliderData}
      arrowStyle={{ color: "black", offset: 200 }}
    />
    <h3 id="home-h3">3 most recent news articles</h3>
    <ArticleCards />
  </div>
);

export default Home;
