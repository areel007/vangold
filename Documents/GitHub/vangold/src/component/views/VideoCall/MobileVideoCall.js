import React, { useState } from "react";
import "./MobileVideoCall.css";
import image1 from "../../../assets/images/chat/0_L18jRBr9cd7oRfS8.jpg";

const MobileVideoCall = () => {

  return (
    <div className="container">
      <div className="mobile__video__call">
          <div className="mobile__video__call__top">
            <img src={image1} alt="" />
          </div>
      </div>
    </div>
  );
};

export default MobileVideoCall;