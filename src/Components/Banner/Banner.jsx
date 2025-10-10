import React from "react";
import "./Banner.scss";

const Banner = ({ title, subtitle, className = "banner" }) => {
  return (
    <div className={`banner ${className}`}>
      <div className="banner__content">
        <h1 className="banner__title">{title}</h1>
        <h4 className="banner__subtitle">{subtitle}</h4>
      </div>
    </div>
  );
};

export default Banner;
