import "./home2.css"
import AbBanner from "../../core-ui/banner/banner2";
import MainSectionTwo from "../../core-ui/main-section/main-section2";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const HomeTwo = (props) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    
    function onSubmit(data) {}
    return (
        <div className="home">
            <AbBanner />
            <MainSectionTwo aboutUsCardDetails={props.aboutUsCardDetails} />
            <div className="collaborate collaborate2">
                    <div className="container">
                        <div className="collaborate__inner2">
                            <div className="collaborate-text2">
                                <p className="collaborate-text__title2">
                                    Collaborate better <br /><strong>on projects</strong>
                                </p>
                                <p className="collaborate-text__subtitle collaborate-text__subtitle2">
                                    With our team of disciplined professionals, to collaborate on your project just got easier.
                                    Collaboration brings increased creativity,
                                    perspective and innovation to your product, making your business scale very fast.
                                </p>
                                <button className="collaborate-button2">
                                    Get started
                                </button>
                            </div>
                            <div className="collaborate-image2">
                                <img className="Ellipse1477" src="imagestwo/Ellipse1477.png" alt="collaborate"/>
                                <div className="collaborate-circle">
                                    <div className="pulse">
                                        <span className="one 1"></span>
                                        <span className="two 2"></span>
                                        <span className="three 3"></span>
                                        <span className="four 4"></span>
                                        <span className="five 5"></span>
                                            <div class="glowinglogo">
                                                <img src="imagestwo/glowinglogo.png" alt="glowing" />
                                            </div>
                                    </div>
                                </div>
                                <img className="Ellipse1478" src="imagestwo/Ellipse1478.png" alt="collaborate"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get-notify-banner">
                    <div className="container get-notify-banner">
                        <span className="getNotifyBannerPara1">Get Notified</span>
                        <span className="getNotifyBannerPara2">Your Every New Job</span>
                        <span className="getNotifyBannerPara3">Place your business on the path of success with the help of freelance talents that you can rely on.</span>
                        <div className="getNotifyInput">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="email" placeholder="Email Address" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                            <button type="submit">Join Waitlist</button>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomeTwo