import "./sign-up.css"
import SignUpForm from "../core-ui/auth/sign-up-form/sign-up-form";
import {Link} from "react-router-dom";
import signUpImage from "../../assets/images/amico.png"

const SignUp = () => {
    return (
        <div className='sign-up'>
            <div className="container">
                <p className="already-have-account">Already have an account? <Link to="/login">Login</Link></p>
                <div className="sign-up__inner">
                    <div className="sign-up__image">
                        <img src={ signUpImage } alt="sign up image"/>
                    </div>
                    <div className="sign-up__form">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp