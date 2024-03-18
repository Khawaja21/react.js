// import "./control-center.css";
import React from "react";


const ControlCenter = () => {
  return (
    <div className="control-center">
      <div className="top-header">
        <div className="frame-group">
          <div className="frame-container">
            <div className="summer-sale-for-all-swim-suits-wrapper">
              <div className="summer-sale-for">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
            </div>
            <div className="shopnow">ShopNow</div>
          </div>
          <div className="shop-now">
            <div className="english-wrapper">
              <div className="english">English</div>
            </div>
            <img className="dropdown-icon" alt="" src="/dropdown.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
