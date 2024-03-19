import React from "react";
import ControlCenter from "./ControlCenter";
import FrameComponent5 from "./FrameComponent5";
import ErrorHandler from "./ErrorHandler";
import FrameComponent4 from "./FrameComponent4";
import PerfumeContainer from "./PerfumeContainer";
import FrameComponent3 from "./FrameComponent3";
import LoginRegisterCartWishlist from "./LoginRegisterCartWishlist";
import InfoMerger from "./InfoMerger";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import Footer from "./Footer";
// import "./E-Commerce-home-page.css";

const ECommerceHomePage = () => {
  return (
    <div className="e-commerce-homepage">
      <ControlCenter />
      <FrameComponent5 />
      <section className="output-display">
        <ErrorHandler />
        <div className="frame-parent">
          <div className="instance-wrapper">
            <div className="view-all-products-wrapper">
              <div className="view-all-products">View All Products</div>
            </div>
          </div>
          <div className="form-with-subscription-input" />
        </div>
        <FrameComponent4 />
        <div className="friendly-customer-support-wrapper">
          <div className="friendly-customer-support" />
        </div>
        <div className="perfume-container-parent">
          <PerfumeContainer />
          <FrameComponent3 />
        </div>
      </section>
      <section className="e-commerce-homepage-inner">
        <div className="login-register-cart-wishlist-parent">
          <LoginRegisterCartWishlist />
          <InfoMerger />
          <div className="instance-container">
            <div className="view-all-products-container">
              <div className="view-all-products1">View All Products</div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default ECommerceHomePage;
