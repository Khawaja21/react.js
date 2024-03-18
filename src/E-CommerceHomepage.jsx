import React from "react";
// import ControlCenter from "./Control-center";
// import FrameComponent5 from "./Frame-component5";
// import ErrorHandler from "./Error-handler";
// import FrameComponent4 from "./Frame-component4";
// import PerfumeContainer from "./Perfume-container";
// import FrameComponent3 from "./Frame-component3";
// import LoginRegisterCartWishlist from "./Login-register-cart-wishlist";
// import InfoMerger from "./Info-merger";
// import FrameComponent1 from "./Frame-component1";
// import FrameComponent from "./Frame-component";
// import Footer from "./Footer";
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
