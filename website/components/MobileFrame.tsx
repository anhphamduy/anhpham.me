import React from "react";
import "../styles/devices.less";

const MobileFrame = ({ isMobile }) => {
  return (
    <div className="deviceContainer pt-4">
      <div className="iphone black portrait">
        <div className="caseBorder"></div>
        <div className="case"></div>
        <div className="screen"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="homeButtonBorder"></div>
        <div className="homeButton"></div>
        <div className="content">
          {/* <img src="/jojoe-full.png" width="100%" /> */}
          <img src="/lodapp.png" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
