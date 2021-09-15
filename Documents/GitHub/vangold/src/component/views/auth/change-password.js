import "./change-password.css"
import ChangePasswordForm from "../../core-ui/auth/change-password-form/change-password-form";
import {Link} from "react-router-dom";
import ChangePasswordImage from "../../../assets/images/amico-change-password-form.png"

const ChangePassword = () => {
    return (
        <div className='auth-form'>
            <div className="reset__change__password">
                <div className="container">
                    <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                    <div className="auth-form__inner">
                        <div className="auth-form__image">
                            <img src={ ChangePasswordImage } alt="log in pic"/>
                        </div>
                        <div className="auth-form__form">
                            <ChangePasswordForm />
                        </div>
                    </div>
                </div>
            </div>
            <p className="authBottomLink"><Link to="/login">Back to Login</Link></p>
        </div>
    )
}

export default ChangePassword