import { useMemo } from "react";
// import "./queue-manager.css";
import React from "react";

const QueueManager = ({
  todays,
  flashSales,
  propGap,
  propMinWidth,
  propPadding,
  propMinWidth1,
}) => {
  const queueManagerStyle = useMemo(() => {
    return {
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propGap, propMinWidth]);

  const stackManagerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const todaysStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="queue-manager" style={queueManagerStyle}>
      <div className="stack-manager" style={stackManagerStyle}>
        <div className="quick-links-wrapper">
          <div className="quick-links" />
        </div>
        <div className="todays-wrapper">
          <div className="todays" style={todaysStyle}>
            {todays}
          </div>
        </div>
      </div>
      <h1 className="flash-sales">{flashSales}</h1>
    </div>
  );
};

export default QueueManager;