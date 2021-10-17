import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, InputGroup } from "react-bootstrap";
import "antd/dist/antd.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import "./FormsModal.css";

const HomeFormModalOne = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowPassword2 = () =>
    setShowPassword2((prevShowPassword2) => !prevShowPassword2);

    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
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
    <Modal {...props} centered dialogClassName="home-form-modal-style">
      <Modal.Body className="p-5">
        <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
        <h1 className="modalFormHome_-_channelHead mt-5 mb-5">{props.head}</h1>
        <div className="home-form__modals">
          <form className="auth__form" onSubmit={onSubmit}>
            <div className="form-input__container">
              <div className="form__-control">
                <label htmlFor="Username">Username</label>
                <input name="username" id="username" type="text" {...register('username')}
                    error={errors.username ? true : false} required/>
                    <span className="errors">{errors.username?.message}</span>
              </div>
              <div className="form__-control">
                <label htmlFor="Email">Email</label>
                <input name="email" type="email" {...register('email')}
                    error={errors.email ? true : false} required />
                    <span className="errors">{errors.email?.message}</span>
              </div>
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
          <div className="sign-up-options">
            <p>I want to:</p>
            <div className="select_buttons">
              <input type="radio" name="select" id="option-1" />
              <input type="radio" name="select" id="option-2" />
              <input type="radio" name="select" id="option-3" />
                <label for="option-1" className="option option-1">
                    <span>Hire for a project</span>
                    </label>
                <label for="option-2" className="option option-2">
                    <span>Work as a freelancer</span>
                </label>
                <label for="option-3" className="option option-3">
                    <span>Create a team</span>
                </label>
            </div>
          </div>
          <div className="acceptTerms__">
            <div className="form-group form-check">
              <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
              <label htmlFor="acceptTerms" className="form-check-label">By creating an account, you agree to the Terms of Service and
                  Conditions and Privacy Policy</label>
            </div>
            <span className="errors acceptTerms">{errors.acceptTerms?.message}</span>
          </div>
          

          <button type="submit" className="submit__btn"  onClick={handleSubmit(onSubmit)}>
            Create account
          </button>
            <div class="social-divider">
              <span>or</span>
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
        <p className="form-link-P">
                Already have an account?{" "}
                <Link className="form-link" to="/login">
                  Sign in
                </Link>
              </p>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HomeFormModalOne;
