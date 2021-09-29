import "./sign-up.css"
import SignUpForm from "../../core-ui/auth/sign-up-form/sign-up-form";
import {Link} from "react-router-dom";
import signUpImage from "../../../assets/images/amico.png"

const SignUp = () => {
    return (
        <div className='auth-form'>
            <div className="container">
                <p className="already-have-account">Already have an account? <Link to="/login">Login</Link></p>
                <div className="auth-form__inner">
                    <div className="auth-form__image">
                        <img src={ signUpImage } alt="sign up pic"/>
                    </div>
                    <div className="auth-form__form">
                        <SignUpForm />
                        <p className="authBottomLink">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp