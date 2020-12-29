import React from "react";
import "./newsArticle.css";
import NewsArticle from "./NewsArticle";
import "./news.css";

const News = () => (
  <div id="news">
    <NewsArticle title="Article 1" />
    <NewsArticle title="Article 2" />
    <NewsArticle title="Article 3" />
  </div>
);

export default News;
