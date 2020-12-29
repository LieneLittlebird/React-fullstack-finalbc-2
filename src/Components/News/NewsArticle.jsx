import React from "react";
import { Link } from "react-router-dom";
import "./newsArticle.css";

const NewsArticle = ({ title }) => (
  <div id="article-card-news">
    <Link to="/single-article" className="article-link">
      <h3>{title}</h3>
    </Link>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
      repellendus aliquam, voluptatibus eos modi necessitatibus animi recusandae
      eligendi molestias voluptate! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Voluptatibus molestias nihil quae enim ut? Corrupti
      suscipit, vero atque illum repellendus aliquam, voluptatibus eos modi
      necessitatibus animi recusandae eligendi molestias voluptate! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Voluptatibus molestias nihil
      quae enim ut? Corrupti suscipit, vero atque illum repellendus aliquam,
      voluptatibus eos modi necessitatibus animi recusandae eligendi molestias
      voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero atque
      illum repellendus aliquam, voluptatibus eos modi necessitatibus animi
      recusandae eligendi molestias voluptate! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Voluptatibus molestias nihil quae enim ut?
      Corrupti suscipit, vero atque illum repellendus aliquam, voluptatibus eos
      modi necessitatibus animi recusandae eligendi molestias voluptate! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias
      nihil quae enim ut? Corrupti suscipit, vero atque illum repellendus
      aliquam, voluptatibus eos modi necessitatibus animi recusandae eligendi
      molestias voluptate!
    </p>
  </div>
);

export default NewsArticle;
