import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowPassword2 = () =>
    setShowPassword2((prevShowPassword2) => !prevShowPassword2);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };

  return (
    <form className="auth__form" onSubmit={handleFormSubmit}>
      <div className="form__title">
        <h1>Reset your Password</h1>
        <p className="authResetPassword__P">
          Create a new password for your account. It must be at least 8
          characters long.
        </p>
      </div>
      <div className="form-input__container">
        <div className="form__-control">
          <label htmlFor="Email">Password</label>

          <InputGroup>
            <Form.Control
              size="lg"
              required
              type={showPassword ? "text" : "password"}
              className="form-control-emp"
            />
            <InputGroup.Text className="form-control-eye">
              <div onClick={handleShowPassword}>
                {!showPassword ? (
                  <AiOutlineEye style={{ fontSize: "20px" }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ fontSize: "20px" }} />
                )}
              </div>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="form__-control">
          <label htmlFor="Email">Confirm Password</label>

          <InputGroup>
            <Form.Control
              size="lg"
              required
              type={showPassword2 ? "text" : "password"}
              className="form-control-emp"
            />
            <InputGroup.Text className="form-control-eye">
              <div onClick={handleShowPassword2}>
                {!showPassword2 ? (
                  <AiOutlineEye style={{ fontSize: "20px" }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ fontSize: "20px" }} />
                )}
              </div>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <button className="submit__btn reset-btn">Reset Password</button>
    </form>
  );
};

export default ChangePasswordForm;
