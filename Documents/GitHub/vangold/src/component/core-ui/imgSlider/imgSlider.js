import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';

import './imgSlider.css';

const ImgSlider = (props) => {
  return (
    <div className="container">
      <SwipeableViews enableMouseEvents className="hxshh">
      <div className="img__slider__box">slide n°1</div>
      <div className="img__slider__box">slide n°2</div>
      <div className="img__slider__box">slide n°3</div>
      <div className="img__slider__box">slide n°4</div>
    </SwipeableViews>
    </div>
  );
};

export default ImgSlider;
