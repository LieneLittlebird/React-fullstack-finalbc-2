import React from "react";
import AboutTabs from "./AboutTabs/AboutTabs";
import AboutMaps from "./AboutMaps/AboutMaps";
import "./about.css";

const About = () => (
  <div>
    <AboutTabs />
    <div id="contacts-all">
      <div id="contacts-left">
        <div className="contacts-el-left">
          <h3 className="contacts-h3">Contacts:</h3>
          <AboutMaps />
        </div>
      </div>
      <div id="contacts-right">
        <div className="contacts-el-right">
          <h3 className="contacts-h3">Address:</h3>
          <p className="contacts-right-p">Desert Lane 412</p>
          <h3 className="contacts-h3">E-mail:</h3>
          <p className="contacts-right-p">info@dune2021.com</p>
          <h3 className="contacts-h3"> Phone:</h3>
          <p className="contacts-right-p">+371 24183954</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
