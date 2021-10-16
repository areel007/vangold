import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowPassword2 = () =>
    setShowPassword2((prevShowPassword2) => !prevShowPassword2);

 
    const validationSchema = Yup.object().shape({
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Password does not match'),
    });

   const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">
          <h1>Reset your Password</h1>
          <p className="authResetPassword__P">
            Create a new password for your account. It must be at least 8
            characters long.
          </p>
        </div>
        <div className="form-input__container">
          <div className="form__-control">
              <label htmlFor="Password">Password</label>

              <InputGroup>
                <Form.Control
                  size="lg"
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control-emp"
                  {...register('password')}
                  error={errors.password ? true : false}
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
              <span className="errors">{errors.password?.message}</span>
            </div>
            <div className="form__-control">
              <label htmlFor="Password">Confirm Password</label>

              <InputGroup>
                <Form.Control
                  size="lg"
                  required
                  name="confirmPassword"
                  type={showPassword2 ? "text" : "password"}
                  className="form-control-emp"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword ? true : false}
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
              <span className="errors">{errors.confirmPassword?.message}</span>
            </div>
        </div>
        <button className="submit__btn reset-btn" onClick={handleSubmit(onSubmit)}>Reset Password</button>
    </form>
  );
};

export default ChangePasswordForm;
