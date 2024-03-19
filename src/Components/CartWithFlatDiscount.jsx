import { useMemo } from "react";
// import "./cart-with-flat-discount.css";
import React from "react";

const CartWithFlatDiscount = ({
  propHeight,
  propWidth,
  propMinWidth,
  propAlignSelf,
  propFlex,
  propHeight1,
  propWidth1,
  propFlex1,
  propMinWidth1,
  propAlignSelf1,
  propFlex2,
  propMinWidth2,
  propAlignSelf2,
  propFlex3,
}) => {
  const discountPercentStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propMinWidth, propAlignSelf, propFlex]);

  const sSeriesComfortChairStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex1,
    };
  }, [propWidth1, propFlex1]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf1,
      flex: propFlex2,
    };
  }, [propMinWidth1, propAlignSelf1, propFlex2]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      alignSelf: propAlignSelf2,
      flex: propFlex3,
    };
  }, [propMinWidth2, propAlignSelf2, propFlex3]);

  return (
    <div className="cart-with-flat-discount">
      <div className="discount-percent-parent">
        <div className="discount-percent" style={discountPercentStyle}>
          <div className="div" style={divStyle}>
            -25%
          </div>
        </div>
        <div className="fill-heart-parent">
          <img className="fill-heart-icon" alt="" src="/fill-heart.svg" />
          <img className="fill-eye-icon" alt="" src="/fill-eye.svg" />
        </div>
        <div className="sam-moghadam-khamseh-kvmdstrgo-wrapper">
          <img
            className="sam-moghadam-khamseh-kvmdstrgo-icon"
            alt=""
            src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
          />
        </div>
      </div>
      <div className="s-series-comfort-chair-parent">
        <div
          className="s-series-comfort-chair"
          style={sSeriesComfortChairStyle}
        >{`S-Series Comfort Chair `}</div>
        <div className="parent" style={frameDivStyle}>
          <div className="div1" style={div1Style}>
            $375
          </div>
          <div className="div2" style={div2Style}>
            $400
          </div>
        </div>
        <div className="four-half-star-parent">
          <div className="four-half-star">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector.svg" />
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <img
              className="star-half-filled-icon"
              alt=""
              src="/starhalffilled.svg"
            />
          </div>
          <div className="div3">(99)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount;