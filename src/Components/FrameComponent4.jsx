import LinkToAppStores from "./LinkToAppStores";
// import "./frame-component4.css";
import React from "react";


const FrameComponent4 = () => {
  return (
    <div className="link-to-app-stores-parent">
      <LinkToAppStores
        categories="Categories"
        browseByCategory="Browse By Category"
      />
      <div className="category-phone-parent">
        <div className="category-phone">
          <div className="category-cellphone-wrapper">
            <img
              className="category-cellphone-icon"
              loading="lazy"
              alt=""
              src="/categorycellphone.svg"
            />
          </div>
          <div className="phones">Phones</div>
        </div>
        <div className="category-phone1">
          <div className="category-computer-wrapper">
            <img
              className="category-computer-icon"
              loading="lazy"
              alt=""
              src="/categorycomputer.svg"
            />
          </div>
          <div className="computers">Computers</div>
        </div>
        <div className="category-phone2">
          <div className="category-smartwatch-wrapper">
            <div className="category-smartwatch">
              <img className="logo-icon1" alt="" src="/vector-27.svg" />
              <div className="loop-control">
                <img className="subscribe-icon" alt="" src="/vector-28.svg" />
              </div>
              <div className="footer-logo-links-parent">
                <img
                  className="footer-logo-links"
                  alt=""
                  src="/vector-29.svg"
                />
                <div className="header-navigation">
                  <div className="header-navigation-child" />
                  <div className="search-input" />
                  <div className="subscribe-form" />
                </div>
              </div>
              <div className="loop-control1">
                <img
                  className="support-contact-icon"
                  alt=""
                  src="/vector-30.svg"
                />
              </div>
            </div>
          </div>
          <div className="smartwatch">SmartWatch</div>
        </div>
        <div className="category-phone3">
          <div className="category-camera-wrapper">
            <img
              className="category-camera-icon"
              loading="lazy"
              alt=""
              src="/categorycamera.svg"
            />
          </div>
          <div className="camera">Camera</div>
        </div>
        <div className="category-phone4">
          <div className="category-headphone-wrapper">
            <img
              className="category-headphone-icon"
              loading="lazy"
              alt=""
              src="/categoryheadphone.svg"
            />
          </div>
          <div className="headphones">HeadPhones</div>
        </div>
        <div className="category-phone5">
          <div className="category-gamepad-wrapper">
            <img
              className="category-gamepad-icon"
              loading="lazy"
              alt=""
              src="/categorygamepad.svg"
            />
          </div>
          <div className="gaming">Gaming</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;

