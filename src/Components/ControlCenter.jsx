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
          <div className="chakra-select__wrapper css-42b2qy" style={{color:'white',background:'black',borderColor:'black'}}>
                            <select className="chakra-select cursor-pointer css-1edexrx" style={{color:'white',background:'black',borderColor:'black'}}>
                                <option value="en" className="bg-color-bg text-color-text-3" selected="">English</option>
                                <option value="ru" className="bg-color-bg text-color-text-3">Russian</option>
                                <option value="tm" className="bg-color-bg text-color-text-3">Urdu</option>
                            </select>
                            <div className="chakra-select__icon-wrapper css-iohxn1"  style={{color:'white',background:'black',borderColor:'black'}}>
                                {/* <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style="width:1em;height:1em;color:currentColor">
                                  <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">

                                  </path>
                                </svg> */}
                            </div>
                        </div>
          {/* <div className="shop-now">
            <div className="english-wrapper">
              <div className="english">English</div>
            </div>
            <img className="dropdown-icon" alt="" src="/dropdown.svg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
