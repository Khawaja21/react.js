import { useMemo } from "react";
// import "./LinkToAppStores.css";
import React from "react";

const LinkToAppStores = ({ categories, browseByCategory, propMinWidth }) => {
  const categoriesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="link-to-app-stores">
      <div className="shop-now-button">
        <div className="privacy-information-block">
          <div className="search-component-wrapper">
            <div className="search-component" />
          </div>
          <div className="categories" style={categoriesStyle}>
            {categories}
          </div>
        </div>
        <h1 className="browse-by-category">{browseByCategory}</h1>
      </div>
      <div className="fill-with-left-arrow-group">
        {/* <img
          className="fill-with-left-arrow1"
          alt=""
          src="/fill-with-left-arrow.svg"
        /> */}
        <i class='bx bx-left-arrow-alt' style={{color:'black',fontSize:'3rem'}}  ></i>
        {/* <img
          className="fill-with-right-arrow1"
          alt=""
          src="/fill-with-right-arrow.svg"
        /> */}
        <i class='bx bx-right-arrow-alt' style={{color:'black',fontSize:'3rem'}} ></i>
      </div>
    </div>
  );
};

export default LinkToAppStores;