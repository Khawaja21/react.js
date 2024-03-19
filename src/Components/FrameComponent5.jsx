import { useCallback } from "react";
// import "./frame-component5.css";
import React from "react";

const FrameComponent5 = () => {
  const onHeaderContainer3Click = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  const onCart1WithBuyClick = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  return (
    <section className="frame-section">
      <div className="header-parent">
        <div className="header">
          <div className="header-inner">
            <div className="logo-parent">
              <div className="logo">
                <h3 className="exclusive">Exclusive</h3>
              </div>
              <div className="logo1">
                <div className="header1">
                  <div className="home">Home</div>
                  <img className="underline-icon" alt="" src="/underline.svg" />
                </div>
                <div className="header2">
                  <div className="contact">Contact</div>
                </div>
                <div className="header3">
                  <div className="about">About</div>
                </div>
                <div className="header4" onClick={onHeaderContainer3Click}>
                  <div className="sign-up">Sign Up</div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-component-set-parent">
            <div className="search-component-set">
              <div className="header5">
                <div className="what-are-you">What are you looking for?</div>
                <img
                  className="component-2-icon"
                  alt=""
                  src="/component-2.svg"
                />
              </div>
            </div>
            <div className="wishlist-parent">
              <img className="wishlist-icon" alt="" src="/wishlist.svg" />
              <img
                className="cart1-with-buy"
                alt=""
                src="/cart1-with-buy.svg"
                onClick={onCart1WithBuyClick}
              />
              <img className="user-icon" alt="" src="/user.svg" />
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="dropdown-menu-parent">
            <div className="dropdown-menu">
              <div className="womans-fashion-parent">
                <div className="womans-fashion">Woman’s Fashion</div>
                <div className="mens-fashion">Men’s Fashion</div>
                <div className="electronics">Electronics</div>
              </div>
              <div className="dropdown-parent">
                <img
                  className="dropdown-icon1"
                  alt=""
                  src="/dropdown-1@2x.png"
                />
                <img
                  className="dropdown-icon2"
                  alt=""
                  src="/dropdown-1@2x.png"
                />
              </div>
            </div>
            <div className="home-lifestyle">{`Home & Lifestyle`}</div>
            <div className="medicine">Medicine</div>
            <div className="sports-outdoor">{`Sports & Outdoor`}</div>
            <div className="babys-toys">{`Baby’s & Toys`}</div>
            <div className="groceries-pets">{`Groceries & Pets`}</div>
            <div className="health-beauty">{`Health & Beauty`}</div>
          </div>
          <div className="footer-services">
            <div className="f-a-q-link" />
          </div>
          <div className="header-logo-container">
            <div className="frame-parent1">
              <div className="px-apple-gray-logo-1-parent">
                <img
                  className="px-apple-gray-logo-1-icon"
                  loading="lazy"
                  alt=""
                  src="/1200pxapple-gray-logo-1@2x.png"
                />
                <div className="iphone-14-series-wrapper">
                  <div className="iphone-14-series">iPhone 14 Series</div>
                </div>
              </div>
              <h1 className="up-to-10">Up to 10% off Voucher</h1>
              <div className="shape-properties">
                <div className="shape-transform-properties">
                  <div className="parent-properties">
                    <div className="shop-now1">Shop Now</div>
                    <div className="parent-properties-child" />
                  </div>
                  <div className="input-processor">
                    <img
                      className="icons-arrow-right"
                      alt=""
                      src="/icons-arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-wrapper">
                <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d">
                  <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-child" />
                  <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-item" />
                </div>
              </div>
            </div>
            <div className="connection-point">
              <img
                className="hero-endframe-cvklg0xk3w6e-la-icon"
                alt=""
                src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
              />
              <img
                className="connection-point-child"
                alt=""
                src="/group-1000005940.svg"
              />
              <div className="connection-point-inner">
                <div className="frame-child" />
              </div>
              <div className="connection-point-inner1">
                <div className="frame-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="frame-inner" alt="" src="/line-3.svg" />
    </section>
  );
};

export default FrameComponent5;

