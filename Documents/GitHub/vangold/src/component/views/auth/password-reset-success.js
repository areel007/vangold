import "./password-reset-success.css"
import {Link} from "react-router-dom";
import SucessIcon from '../../../assets/images/svgicons/success.svg'

const PasswordResetSuccess = () => {
    return (
        <div className='password-reset-success'>
            <div className="container">
                <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                <div className="password-reset-success__inner">
                    <div className="password-reset-success-box">
                    <img src={SucessIcon} alt="sucess icon"></img>
                    <h1 className="success__title">Success</h1>
                    <p>Your new password has been successfully changed</p>
                    <Link to="/login" className="change__account__pswrd__success__btn">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordResetSuccess