import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ResetPasswordForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };

  return (
    <form className="auth__form" onSubmit={handleFormSubmit}>
      <div className="form__title">
        <h1>Reset your Password</h1>
        <p className="authResetPassword__P">
          Enter the registered email address to get a password reset link
        </p>
      </div>
      <div className="form__-control">
        <label htmlFor="Email">Email</label>
        <input name="email" type="email" required />
      </div>
      <button className="submit__btn reset-btn">Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
