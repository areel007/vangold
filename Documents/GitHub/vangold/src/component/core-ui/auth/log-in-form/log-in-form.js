import React, { useState } from "react";
import "../authstyle.css";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
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
    <>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__title">
          <h1 className="desktopAuth_h1">Log in</h1>
          <h1 className="mobileAuth_h1">Sign in to VanGold</h1>
          <p className="authLogin__P">
            Log in with your data that you entered during your registration
          </p>
        </div>
        <div className="form-input__container">
          <div className="form__-control">
            <label htmlFor="Email">Email</label>
            <input name="email" type="email" {...register('email')}
                error={errors.email ? true : false} required />
                <span className="errors">{errors.email?.message}</span>
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
          </div>
        </div>
        <div className="form__-terms">
          <div className="auth-checkbox">
            <input type="checkbox" id="" name="" value="signinterms"></input>
            <label
              htmlFor="auth terms checkbox"
              className="auth-checkbox-label"
            >
              {" "}
              &nbsp;Keep me logged in
            </label>
          </div>
          <div className="forgot-pwrd">
            <p>
              <Link to="/reset-password">Forgot Password</Link>
            </p>
          </div>
        </div>
        <button type="submit" className="submit__btn" onClick={handleSubmit(onSubmit)}>
          Log in
        </button>
        <div className="or">
          <p>or</p>
        </div>
        <div className="auth-icon-btns">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.17204 12C5.17204 11.2206 5.30142 10.4732 5.53261 9.77236L1.48823 6.68405C0.699981 8.28436 0.255981 10.0877 0.255981 12C0.255981 13.9109 0.699606 15.7129 1.48654 17.3123L5.52867 14.218C5.29973 13.5203 5.17204 12.7757 5.17204 12Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2728 4.90912C13.9662 4.90912 15.4956 5.50912 16.6973 6.49088L20.193 3C18.0628 1.14544 15.3317 0 12.2728 0C7.52385 0 3.44235 2.71575 1.48804 6.684L5.53222 9.77231C6.4641 6.94369 9.12041 4.90912 12.2728 4.90912Z"
                  fill="#EA4335"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2729 19.091C9.1206 19.091 6.46429 17.0564 5.53241 14.2278L1.48804 17.3155C3.44235 21.2843 7.52385 24.0001 12.2729 24.0001C15.2039 24.0001 18.0023 22.9593 20.1025 21.0093L16.2636 18.0415C15.1804 18.7238 13.8164 19.091 12.2729 19.091Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.7439 12.0002C23.7439 11.291 23.6346 10.5274 23.4707 9.81842H12.2732V14.4547H18.7187C18.3964 16.0355 17.5193 17.2507 16.2639 18.0416L20.1028 21.0094C22.3089 18.9619 23.7439 15.9116 23.7439 12.0002Z"
                  fill="#4285F4"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44
                    18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45
                    11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                fill="#1939E1"
              />
            </svg>

            <span>Continue with Facebook</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
