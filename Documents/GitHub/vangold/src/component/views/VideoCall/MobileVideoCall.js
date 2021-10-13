import React from "react";
import "./MobileVideoCall.css";
import image1 from "../../../assets/images/chat/0_L18jRBr9cd7oRfS8.jpg";
import image2 from "../../../assets/images/chat/mobile_call.png";
import { Container } from "react-bootstrap";


const MobileVideoCall = () => {

  return (
    <Container fluid>
      <div className="mobile__video__call">
          <img src={image1} alt="" />
          <div className="mobile__video__call__top">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="white"/>
              <path d="M21.41 13.41L20 12L14 18L20 24L21.41 22.59L16.83 18L21.41 13.41Z" fill="#E22020"/>
            </svg>
            <img src={image2} alt="mobile_call" />
          </div>
          <div className="mobile__video__call__bottom">
            <div className="mobile__video__call__bottom_text-call_time">
              <span>Kyrie Foster</span>
              <span>12:05</span>
            </div>
            <div className="mobile__video__call__bottom__svg">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.3"/>
                <path d="M24 26C25.66 26 26.99 24.66 26.99 23L27 17C27 15.34 25.66 14 24 14C22.34 14 21 15.34 21 17V23C21 24.66 22.34 26 24 26ZM29.3 23C29.3 26 26.76 28.1 24 28.1C21.24 28.1 18.7 26 18.7 23H17C17 26.41 19.72 29.23 23 29.72V33H25V29.72C28.28 29.24 31 26.42 31 23H29.3Z" fill="white"/>
              </svg>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#E22020"/>
                <path d="M32 29C30.4 29 28.85 29.25 27.4 29.72V32.82C27.4 33.21 27.17 33.56 26.84 33.72C25.86 34.21 24.97 34.84 24.18 35.57C24 35.75 23.75 35.85 23.48 35.85C23.2 35.85 22.95 35.74 22.77 35.56L20.29 33.08C20.11 32.91 20 32.66 20 32.38C20 32.1 20.11 31.85 20.29 31.67C23.34 28.78 27.46 27 32 27C36.54 27 40.66 28.78 43.71 31.67C43.89 31.85 44 32.1 44 32.38C44 32.66 43.89 32.91 43.71 33.09L41.23 35.57C41.05 35.75 40.8 35.86 40.52 35.86C40.25 35.86 40 35.75 39.82 35.58C39.03 34.84 38.13 34.22 37.15 33.73C36.82 33.57 36.59 33.23 36.59 32.83V29.73C35.15 29.25 33.6 29 32 29Z" fill="white"/>
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.3"/>
                <path d="M29 22.5V19C29 18.45 28.55 18 28 18H16C15.45 18 15 18.45 15 19V29C15 29.55 15.45 30 16 30H28C28.55 30 29 29.55 29 29V25.5L33 29.5V18.5L29 22.5Z" fill="white"/>
              </svg>
            </div>
          </div>
      </div>
    </Container>
  );
};

export default MobileVideoCall;