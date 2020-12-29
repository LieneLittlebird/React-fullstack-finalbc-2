/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import ImageSlider from "../../Home/Slider/ImageSlider";
import AlbumData from "./AlbumData";
import "./single.css";
import single2 from "./single2.jpg";
import single4 from "./single4.jpg";
import single5 from "./single5.jpg";

const SingleArticle = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryStyle = { display: "none" };

  if (isGalleryVisible) {
    galleryStyle.display = "flex";
  }

  const togglegallery = () => {
    setIsGalleryVisible(!isGalleryVisible);
  };

  return (
    <div>
      <div className="single-row">
        <div id="img-much" onClick={togglegallery}>
          <img src={single2} alt="" id="single-img" />
          <div id="img-lots">
            <img src={single5} alt="" />
            <img src={single2} alt="" />
            <img src={single4} alt="" />
          </div>
        </div>
        <div id="all-p">
          <h2 id="single-article-h2">Article1</h2>
          <p className="single-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
            repellendus aliquam, voluptatibus eos modi necessitatibus animi
            recusandae eligendi molestias voluptate!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
            ut? Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!
          </p>
          <p className="single-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
            repellendus aliquam, voluptatibus eos modi necessitatibus animi
            recusandae eligendi molestias voluptate!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
            ut? Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!
          </p>
          <p className="single-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            molestias nihil quae enim ut? Corrupti suscipit, vero atque illum
            repellendus aliquam, voluptatibus eos modi necessitatibus animi
            recusandae eligendi molestias voluptate!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus molestias nihil quae enim
            ut? Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus molestias nihil quae enim ut?
            Corrupti suscipit, vero atque illum repellendus aliquam,
            voluptatibus eos modi necessitatibus animi recusandae eligendi
            molestias voluptate!
          </p>
        </div>
        <div id="gallery" style={galleryStyle}>
          <button type="button" id="album-button-x" onClick={togglegallery}>
            X
          </button>
          <ImageSlider
            slides={AlbumData}
            arrowStyle={{ color: "white", offset: -100 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
