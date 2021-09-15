import "./change-password.css"
import ResetPasswordForm from "../../core-ui/auth/reset-password-form/reset-password-form";
import {Link} from "react-router-dom";
import ResetPasswordImage from "../../../assets/images/bro.png"

const ResetPassword = () => {
    return (
        <>
        <div className='auth-form'>
            <div className="reset__change__password">
                <div className="container">
                    <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                    <div className="auth-form__inner">
                        <div className="auth-form__image">
                            <img src={ ResetPasswordImage } alt="log in pic"/>
                        </div>
                        <div className="auth-form__form">
                            <ResetPasswordForm />
                        </div>
                    </div>
                </div>
            </div>
            <p className="authBottomLink"><Link to="/login">Back to Login</Link></p>
        </div>
        </>
    )
}

export default ResetPassword