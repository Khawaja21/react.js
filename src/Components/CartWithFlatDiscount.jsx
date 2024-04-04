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
          {/* <img className="fill-heart-icon" alt="" src="/fill-heart.svg" /> */}
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="text-color-bg-1 w-5 h-5" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg>
          {/* <img className="fill-eye-icon" alt="" src="/fill-eye.svg" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="EYE"><path d="M288 144a110.9 110.9 0 0 0 -31.2 5 55.4 55.4 0 0 1 7.2 27 56 56 0 0 1 -56 56 55.4 55.4 0 0 1 -27-7.2A111.7 111.7 0 1 0 288 144zm284.5 97.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4a32.4 32.4 0 0 0 0 29.2C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4a32.4 32.4 0 0 0 0-29.2zM288 400c-98.7 0-189.1-55-237.9-144C98.9 167 189.3 112 288 112s189.1 55 237.9 144C477.1 345 386.7 400 288 400z"></path></svg>
        </div>
        <div className="sam-moghadam-khamseh-kvmdstrgo-wrapper">
          <img
            className="sam-moghadam-khamseh-kvmdstrgo-icon"
            alt=""
            src="/chair.png"
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
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 max-2xl:w-4 max-2xl:h-4">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"></path>
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 max-2xl:w-4 max-2xl:h-4">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"></path>
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 max-2xl:w-4 max-2xl:h-4">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"></path>
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 max-2xl:w-4 max-2xl:h-4">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"></path>
                </svg>
                <svg width="22" height="15" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 max-2xl:w-5 max-2xl:h-5">
                <path d="M9.99987 1.83329C9.75076 1.83145 9.50625 1.90032 9.29472 2.0319C9.08319 2.16348 8.91333 2.35236 8.80487 2.57662L6.9532 6.32995L2.80987 6.93162C2.56342 6.96713 2.33184 7.07094 2.14136 7.23129C1.95088 7.39163 1.8091 7.60212 1.73208 7.83889C1.65506 8.07567 1.64588 8.32929 1.70558 8.57101C1.76528 8.81274 1.89147 9.03292 2.06987 9.20662L5.06987 12.1283L4.36153 16.255C4.3194 16.5001 4.34667 16.7521 4.44026 16.9825C4.53385 17.213 4.69003 17.4126 4.89115 17.559C5.09226 17.7053 5.3303 17.7925 5.57836 17.8106C5.82642 17.8287 6.0746 17.7771 6.29487 17.6616L9.99987 15.7133V1.83329Z" fill="#FFAD33"></path>
                <path opacity="0.25" d="M9.99998 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0865 2.20807 11.195 2.44195L13.0467 6.35634L17.1901 6.98383C17.4366 7.02086 17.6681 7.12912 17.8586 7.29635C18.0491 7.46358 18.1909 7.68309 18.2679 7.93003C18.3449 8.17697 18.3541 8.44147 18.2944 8.69357C18.2347 8.94567 18.1085 9.1753 17.9301 9.35645L14.9301 12.4035L15.6384 16.7072C15.6806 16.9629 15.6533 17.2257 15.5597 17.466C15.4661 17.7064 15.3099 17.9146 15.1088 18.0672C14.9077 18.2198 14.6696 18.3107 14.4216 18.3296C14.1735 18.3486 13.9253 18.2947 13.705 18.1743L9.99998 16.1423V1.83595Z" fill="black"></path>
                </svg>
          </div>
          <div className="div3">(99)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount;