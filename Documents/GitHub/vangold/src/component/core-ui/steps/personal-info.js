import React, { useState } from "react";
import "./steps.css";

const PersonalInfo = () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="step">
      <p className="step-title">Personal Info</p>
      <form>
        <div className="vangold-input first-name">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="vangold-input last-name">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="vangold-input email">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="vangold-input linkedin-profile">
          <label>LinkedIn Profile URL</label>
          <input type="text" />
        </div>
      </form>
      <div className="upload-passport">
        <label>Upload Passport Photograph </label>
        <div className="file">
          <label htmlFor="input-file">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54 48V6C54 2.7 51.3 0 48 0H6C2.7 0 0 2.7 0 6V48C0 51.3 2.7 54 6 54H48C51.3 54 54 51.3 54 48ZM16.5 31.5L24 40.53L34.5 27L48 45H6L16.5 31.5Z"
                fill="black"
                fillOpacity="0.3"
              />
            </svg>
                <img className="PassportPic" src={imgData} />
          </label>
          <input id="input-file" type="file" onChange={onChangePicture} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
