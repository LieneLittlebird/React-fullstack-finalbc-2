import React from "react";
import { Link } from "react-router-dom";
import "./newsArticle.css";
import Poster from "./Poster.jpg";

const NewsArticle = ({ title }) => (
  <div>
    <div>
      <Link to="/single-article" className="article-link">
        <h3>{title}</h3>
      </Link>
      <div id="article-card-news">
        <img src={Poster} alt="" className="news-img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
          repellendus aliquam, voluptatibus eos modi necessitatibus animi
          recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
          ut? Corrupti suscipit, vero atque illum repellendus aliquam,
          voluptatibus eos modi necessitatibus animi recusandae eligendi
          molestias voluptate! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus molestias nihil quae enim ut? Corrupti
          suscipit, vero atque illum repellendus aliquam, voluptatibus eos modi
          necessitatibus animi recusandae eligendi molestias voluptate! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
          repellendus aliquam, voluptatibus eos modi necessitatibus animi
          recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
          ut? Corrupti suscipit, vero atque illum repellendus aliquam,
          voluptatibus eos modi necessitatibus animi recusandae eligendi
          molestias voluptate! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus molestias nihil quae enim ut? Corrupti
          suscipit, vero atque illum repellendus aliquam, voluptatibus eos modi
          necessitatibus animi recusandae eligendi molestias voluptate!
        </p>
      </div>
    </div>
  </div>
);

export default NewsArticle;
