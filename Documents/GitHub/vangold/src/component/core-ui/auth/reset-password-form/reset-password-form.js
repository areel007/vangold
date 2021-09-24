const ResetPasswordForm = () => {
  return (
    <form className="auth__form">
      <div className="form__title">
        <h1>Reset your Password</h1>
        <p className="authResetPassword__P">Enter the registered email address to get a password reset link</p>
      </div>
      <div className="form-input__container">
        <div className="form__-control">
          <label htmlFor="Email">Email</label>
          <input type="email" />
        </div>
      </div>
      <button className="submit__btn reset-btn">Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
