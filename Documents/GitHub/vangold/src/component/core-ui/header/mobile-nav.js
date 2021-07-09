import {Link} from "react-router-dom";
import "./mobile-nav.css"
import { useHistory } from "react-router-dom";

const MobileNav = (props) => {

    const isMobileMenuOut = props.isMobileNavOut
    let className = 'mobile-menu-in'
    if (isMobileMenuOut) {
        className += ' mobile-menu-out'
    }

    return (
        <div className={ className }>
            <header className="mobile-menu-header">
                <svg
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                    className='close'
                    onClick={props.close}
                >
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19
                12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                </svg>
                <div className="logo"></div>
                <Link
                    to="/login"
                    onClick={props.close}
                >Login</Link>
            </header>
            <ul>
                {
                    props.links.map(link => {
                        return (
                            <li
                                key={link.linkName}
                                onClick={props.close}
                            >
                                <Link to={link.to}>{ link.linkName }</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="mobile-menu-sign-up-button">
                <Link
                    to="/sign-up"
                    onClick={props.close}
                >Sign up
                </Link>
            </div>
        </div>
    )

}

export default MobileNav