import "./verify-email.css"
import {Link} from "react-router-dom";
import EmailVerificationImg from '../../assets/images/email-confirm.png'

const VerifyEmail = () => {
    return (
        <div className='verify-email'>
            <div className="container">
                <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                <div className="verify-email__inner">
                    <h2 className="verify-email-title">Verify your email</h2>
                    <p className="verify-email-subtitle">You will need to verify your email to complete registration</p>
                    <img src={EmailVerificationImg} alt="email verification img"/>
                    <p className="verify-email-subtitle verify-email-subtitle-bottom">We just sent an email to <b>Janedoe@gmail.com</b>
                    Please check your email and click the link provided to verify your account.</p>
                    <div className="email-verify-btns">
                        <button>Resend Email</button>
                        <button className="contact__suport-btn">Contact Support</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail