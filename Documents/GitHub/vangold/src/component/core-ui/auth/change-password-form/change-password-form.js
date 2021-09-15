import React from "react";

const ChangePasswordForm = () => {
  

  return (
    <form className="auth__form">
      <div className="form__title">
        <h1>Reset your Password</h1> 
        <p className="authResetPassword__P">Create a new password for your account. It must be at least 8 characters long.</p>
      </div>
      <div className="form-input__container">
        <div className="form__-control">
          <label htmlFor="New Password">New Password</label>
          <input type="password" />
        </div>
        <div className="form__-control">
          <label htmlFor="Verify New Password">Verify New Password</label>
          <input type="password" />
        </div>
      </div>
      <button className="submit__btn reset-btn">Reset Password</button>
    </form>

  );
};

export default ChangePasswordForm;
