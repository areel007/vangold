import React from "react";
import "./b-steps.css";

const CompanyInfo = () => {

  return (
    <div className="b-step">
      <p className="b-step-title">Company Info</p>
      <form>
        <div className="form-control company-name">
          <label>Company’s Name</label>
          <input type="text" />
        </div>
        <div className="form-control email">
          <label>Company’s Email Address</label>
          <input type="email" />
        </div>
        <div className="form-control phone-number">
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <div className="form-control Website">
          <label>Website</label>
          <input type="text" />
        </div>
        <div className="form-control number-of-employees">
          <label>Number of Employees</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
