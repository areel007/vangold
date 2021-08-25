import React from "react";
import "./b-steps.css";

const CompanyInfo = () => {

  return (
    <div className="b-step">
      <p className="b-step-title">Company Info</p>
      <form>
        <div className="vangold-input company-name">
          <label>Company’s Name</label>
          <input type="text" />
        </div>
        <div className="vangold-input email">
          <label>Company’s Email Address</label>
          <input type="email" />
        </div>
        <div className="vangold-input phone-number">
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <div className="vangold-input Website">
          <label>Website</label>
          <input type="text" />
        </div>
        <div className="vangold-input number-of-employees">
          <label>Number of Employees</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
