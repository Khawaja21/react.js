import { useMemo } from "react";
// import "./frame-component2.css";
import React from "react";

const FrameComponent2 = ({
  jrZoomSoccerCleats,
  prop,
  vector4,
  prop1,
  group1000005935,
  propBorderRadius,
  propOverflow,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      overflow: propOverflow,
    };
  }, [propBorderRadius, propOverflow]);

  return (
    <div className="jr-zoom-soccer-cleats-parent">
      <div className="jr-zoom-soccer">{jrZoomSoccerCleats}</div>
      <div className="frame-parent6">
        <div className="wrapper4">
          <div className="div24">{prop}</div>
        </div>
        <div className="five-star-parent2">
          <div className="five-star4">
            <img className="vector-icon37" alt="" src="/vector.svg" />
            <img className="vector-icon38" alt="" src="/vector.svg" />
            <img className="vector-icon39" alt="" src="/vector.svg" />
            <img className="vector-icon40" alt="" src="/vector.svg" />
            <img
              className="vector-icon41"
              alt=""
              src={vector4}
              style={vectorIconStyle}
            />
          </div>
          <div className="div25">{prop1}</div>
        </div>
      </div>
      <div className="colour-chnage">
        <img className="colour-chnage-child" alt="" src={group1000005935} />
        <div className="colour-chnage-item" />
      </div>
    </div>
  );
};

export default FrameComponent2;

