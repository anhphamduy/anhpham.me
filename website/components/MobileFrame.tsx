import React from "react";
import "../styles/devices.less";

const MobileFrame = () => {
  return (
    <div className="marvel-device iphone8 black">
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        <img src="/jojoe-full.png" width="100%" />
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default MobileFrame;
