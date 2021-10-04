import React, { useState, useEffect } from "react";
import "../../core-ui/auth/authstyle.css"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CrossfadeImage from "react-crossfade-image";
import FadeImg1 from "../../../assets/images/Banner_img/Rectangle8892491.png";
import FadeImg2 from "../../../assets/images/Banner_img/Rectangle999249.png";
import FadeImg3 from "../../../assets/images/Banner_img/vangold-homepae-baner-img--.png";

const fadeImages = [
    "https://i.ibb.co/hsGMCHF/Rectangle8892491.png",
    "https://i.ibb.co/ssZ5G3P/Rectangle999249.png",
    "https://i.ibb.co/f4Z2GH2/vangold-homepae-baner-img.png",
  ];


const AbBanner = (props) => {
    const [modal, setModal] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
    const [curImg, setCurImg] = useState(0);

    useEffect(() => {
        let interval = null;
    
        interval = setInterval(() => {
          if (curImg < 2) {
            setCurImg(img => img + 1);
          } else {
            setCurImg(0);
          }
        }, 5000);
    
        return () => clearInterval(interval);
      }, [curImg]);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
        acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    
    function onSubmit(data) {}

    
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner__inner">
                        <div className="bannerTwo__text">
                            <h1 className="banner__text__title banner2__text__title">Find Best Solution for Top  Business</h1>
                            <p className="banner__text__subtitle">Hire top-notch professionals to get your project done. Worry not about their competence, we did our due diligence. 
                            </p>
                            <div className="banner__button">
                                <button className="banner__text__button" onClick={() => setModal(true)}>Hire a Freelancer</button>
                                <button className="banner__text__button findwork__btn" onClick={() => setModalTwo(true)}>Find Work</button>
                            </div> 
                        </div>
                        <div className="bannerTwo__image">
                                <CrossfadeImage
                                        src={fadeImages[curImg]}
                                        duration={1000}
                                        timingFunction={"ease-out"}
                                    />
                            
                        </div>
                    </div>
                    <PureModal className="homepage__modal__body"
                        header={
                            <div className="homepage__modal__body-Header">
                                <h2>Find our top talents</h2>
                            </div>
                        }
                        isOpen={modal}
                        onClose={() => {
                            setModal(false);
                            return true;
                        }}
                        >
                        <div className="homepage-Auth" onSubmit={handleSubmit(onSubmit)}>
                          <form className="auth__form">
                          <div className="form-input__container">
                            <div className="form__-control">
                            <label htmlFor="Username">Username</label>
                            <input name="text" type="username" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Email">Email</label>
                            <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Password">Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Confirm Password">Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword && "Passwords don't match!"}</div>
                            </div>
                        </div>
                            <div className="sign-up-options">
                                <p>I want to:</p>
                                <div className="option-buttons">
                                    <button disabled={!formState.isValid} className="option-btn">Hire for a project</button>
                                    <button disabled={!formState.isValid} className="option-btn">Work as a freelancer</button>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                                <label htmlFor="acceptTerms" className="form-check-label">By creating an account, you agree to the Terms of Service and Conditions and Privacy Policy</label>
                                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                            </div>
                            <button className="submit__btn homeAuth-btn">Create account</button>
                            <div className="or">
                                <p>or</p>
                            </div>
                            <div className="auth-icon-btns">
                                    <button disabled={!formState.isValid}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.17204 12C5.17204 11.2206 5.30142 10.4732 5.53261 9.77236L1.48823 6.68405C0.699981 8.28436 0.255981 10.0877 0.255981 12C0.255981 13.9109 0.699606 15.7129 1.48654 17.3123L5.52867 14.218C5.29973 13.5203 5.17204 12.7757 5.17204 12Z" fill="#FBBC05"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2728 4.90912C13.9662 4.90912 15.4956 5.50912 16.6973 6.49088L20.193 3C18.0628 1.14544 15.3317 0 12.2728 0C7.52385 0 3.44235 2.71575 1.48804 6.684L5.53222 9.77231C6.4641 6.94369 9.12041 4.90912 12.2728 4.90912Z" fill="#EA4335"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2729 19.091C9.1206 19.091 6.46429 17.0564 5.53241 14.2278L1.48804 17.3155C3.44235 21.2843 7.52385 24.0001 12.2729 24.0001C15.2039 24.0001 18.0023 22.9593 20.1025 21.0093L16.2636 18.0415C15.1804 18.7238 13.8164 19.091 12.2729 19.091Z" fill="#34A853"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.7439 12.0002C23.7439 11.291 23.6346 10.5274 23.4707 9.81842H12.2732V14.4547H18.7187C18.3964 16.0355 17.5193 17.2507 16.2639 18.0416L20.1028 21.0094C22.3089 18.9619 23.7439 15.9116 23.7439 12.0002Z" fill="#4285F4"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>Continue with Google</span>

                                    </button>
                                    <button disabled={!formState.isValid}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44
                                            18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45
                                            11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#1939E1"/>
                                        </svg>

                                        <span>Continue with Facebook</span>
                                    </button>
                                    <p className="form-link-P">Already have an account? <a className="form-link" href="./login">Sign in</a></p>
                                </div>
                            </form>
                          </div>
                    </PureModal>
                    <PureModal className="homepage__modal__body"
                        header={
                            <div className="homepage__modal__body-Header">
                                <h2>Build a successful career with us</h2>
                            </div>
                        }
                        isOpen={modalTwo}
                        onClose={() => {
                            setModalTwo(false);
                            return true;
                        }}
                        >
                        <div className="homepage-Auth" onSubmit={handleSubmit(onSubmit)}>
                          <form className="auth__form">
                          <div className="form-input__container">
                            <div className="form__-control">
                            <label htmlFor="Username">Username</label>
                            <input name="text" type="username" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Email">Email</label>
                            <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Password">Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form__-control">
                            <label htmlFor="Confirm Password">Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword && "Passwords don't match!"}</div>
                            </div>
                        </div>
                            <div className="sign-up-options">
                                <p>I want to:</p>
                                <div className="option-buttons">
                                    <button disabled={!formState.isValid} className="option-btn">Hire for a project</button>
                                    <button disabled={!formState.isValid} className="option-btn">Work as a freelancer</button>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                                <label htmlFor="acceptTerms" className="form-check-label">By creating an account, you agree to the Terms of Service and Conditions and Privacy Policy</label>
                                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                            </div>
                            <button className="submit__btn homeAuth-btn">Create account</button>
                            <div className="or">
                                <p>or</p>
                            </div>
                            <div className="auth-icon-btns">
                                    <button disabled={!formState.isValid}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.17204 12C5.17204 11.2206 5.30142 10.4732 5.53261 9.77236L1.48823 6.68405C0.699981 8.28436 0.255981 10.0877 0.255981 12C0.255981 13.9109 0.699606 15.7129 1.48654 17.3123L5.52867 14.218C5.29973 13.5203 5.17204 12.7757 5.17204 12Z" fill="#FBBC05"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2728 4.90912C13.9662 4.90912 15.4956 5.50912 16.6973 6.49088L20.193 3C18.0628 1.14544 15.3317 0 12.2728 0C7.52385 0 3.44235 2.71575 1.48804 6.684L5.53222 9.77231C6.4641 6.94369 9.12041 4.90912 12.2728 4.90912Z" fill="#EA4335"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2729 19.091C9.1206 19.091 6.46429 17.0564 5.53241 14.2278L1.48804 17.3155C3.44235 21.2843 7.52385 24.0001 12.2729 24.0001C15.2039 24.0001 18.0023 22.9593 20.1025 21.0093L16.2636 18.0415C15.1804 18.7238 13.8164 19.091 12.2729 19.091Z" fill="#34A853"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.7439 12.0002C23.7439 11.291 23.6346 10.5274 23.4707 9.81842H12.2732V14.4547H18.7187C18.3964 16.0355 17.5193 17.2507 16.2639 18.0416L20.1028 21.0094C22.3089 18.9619 23.7439 15.9116 23.7439 12.0002Z" fill="#4285F4"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>Continue with Google</span>

                                    </button>
                                    <button disabled={!formState.isValid}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44
                                            18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45
                                            11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#1939E1"/>
                                        </svg>

                                        <span>Continue with Facebook</span>
                                    </button>
                                    <p className="form-link-P">Already have an account? <a className="form-link" href="./login">Sign in</a></p>
                                </div>
                            </form>
                          </div>
                    </PureModal>
                    
                </div>
            </div>
        </div>
    )
}

export default AbBanner;