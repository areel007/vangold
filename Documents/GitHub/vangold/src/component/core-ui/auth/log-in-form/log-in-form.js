import "./log-in-form.css";
import { useState } from "react";

const LogInForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  function togglePasswordVisibility() {
    setPasswordShown(passwordShown ? false : true);
  }

  return (
    <form>
      <div className="form__title">
        <h1>Log in</h1>
        <p>Log in with your data that you entered during your registration</p>
      </div>

      <div className="form__control">
        <label>Email</label>
        <div className="input__box">
          <input type="text" />
        </div>
      </div>

      <div className="form__control">
        <label>Password</label>
        <div className="input__box">
          <input type={passwordShown ? "text" : "password"} />
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            onClick={togglePasswordVisibility}
          >
            <path
              d="M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26
                        15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99
                        9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17
                        4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3
                        0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2
                        15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53
                        6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22
                        12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11
                        14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8ZM10.84 6.02L13.99
                        9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z"
              fill="#767676"
            />
          </svg>
        </div>
      </div>

      <div className="login__terms">
        <input type="checkbox" id="loginterm" name="loginterm" value="Loginterms"></input>
        <label for="loginterm" className="login-label"> &nbsp;Keep me logged in</label>
      </div>

      <button className="login__account__button">Login</button>

      <div className="or">
        <p>or</p>
      </div>

      <div className="icon-btns">
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
  );
};

export default LogInForm;
