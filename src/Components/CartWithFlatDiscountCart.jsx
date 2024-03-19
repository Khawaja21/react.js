// import "./cart-with-flat-discount-cart.css";
import React from "react";

const CartWithFlatDiscountCart = () => {
  return (
    <div className="cart-with-flat-discount-cart">
      <div className="cart8">
        <div className="logo-and-nav-bar">
          <img
            className="curology-j7pkvqrtusm-unsplash-icon"
            loading="lazy"
            alt=""
            src="/curologyj7pkvqrtusmunsplash-1@2x.png"
          />
        </div>
        <div className="cart-child" />
        <div className="product-item-card">
          <img className="fill-heart-icon9" alt="" src="/fill-heart.svg" />
          <img className="fill-eye-icon9" alt="" src="/fill-eye.svg" />
        </div>
      </div>
      <div className="shop-now-button1">
        <div className="curology-product-set">{`Curology Product Set `}</div>
        <div className="product-image">
          <div className="price-and-rating-info-wrapper">
            <div className="price-and-rating">$500</div>
          </div>
          <div className="amazon-star-rating">
            <div className="four-star1">
              <img className="free-delivery-message" alt="" src="/vector.svg" />
              <img
                className="free-delivery-message1"
                alt=""
                src="/vector.svg"
              />
              <img
                className="free-delivery-message2"
                alt=""
                src="/vector.svg"
              />
              <img
                className="free-delivery-message3"
                alt=""
                src="/vector.svg"
              />
              <img
                className="free-delivery-message4"
                alt=""
                src="/vector-9.svg"
              />
            </div>
            <div className="shop-now-link">(145)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscountCart;

