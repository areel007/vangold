import "./header-component.css"
import headerLogo from "../../../assets/images/logo.png"
import React, {useState} from "react";
// import {Link} from "@material-ui/core";
import {Link} from "react-router-dom"

const HeaderComponent = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [languageDropdown, setLanguageDropdown] = useState(false)
    const [languages] = useState([
        'English',
        'Deutsch',
        'Spanish',
        'French',
        'Portuguese',
    ])

    const [languageDropdownHeader, setLanguageDropdownHeader] = useState('English')

    const toggleLanguageSelection = () => {
        setLanguageDropdown(!languageDropdown)
    }

    const updateLanguageDropdownHeader = (event) => {
        setLanguageDropdownHeader(event.target.innerText)
        setLanguageDropdown(false)
    }

    return <header>
        <div className="container">
            <nav className="header__inner">
                <Link to="/" className="logo">
                    <img src={headerLogo} alt="vangold logo"/>
                    <span>Vangold</span>
                </Link>
                {
                    !isLoggedIn ? <ul>
                        {
                            props.links.map(link => {
                                return <li key={link.linkName}>{link.linkName.toLowerCase() === 'english' ?
                                    <div>
                                    <div onClick={toggleLanguageSelection} className="language-selection__language">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20
                                            20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM16.92 6H13.97C13.65
                                            4.75 13.19 3.55 12.59 2.44C14.43 3.07 15.96 4.35 16.92 6ZM10
                                            2.04C10.83 3.24 11.48 4.57 11.91 6H8.09C8.52 4.57 9.17 3.24 10
                                            2.04ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56
                                            8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM3.08 14H6.03C6.35
                                            15.25 6.81 16.45 7.41 17.56C5.57 16.93 4.04 15.66 3.08 14ZM6.03 6H3.08C4.04
                                            4.34 5.57 3.07 7.41 2.44C6.81 3.55 6.35 4.75 6.03 6ZM10 17.96C9.17 16.76
                                            8.52 15.43 8.09 14H11.91C11.48 15.43 10.83 16.76 10 17.96ZM12.34 12H7.66C7.57
                                            11.34 7.5 10.68 7.5 10C7.5 9.32 7.57 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32
                                            12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM12.59 17.56C13.19 16.45 13.65 15.25
                                            13.97 14H16.92C15.96 15.65 14.43 16.93 12.59 17.56ZM14.36 12C14.44 11.34 14.5
                                            10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18
                                            10.69 17.9 11.36 17.74 12H14.36Z" fill="#333333" />
                                        </svg>
                                        {languageDropdownHeader}
                                    </div>
                                        {
                                            languageDropdown ? <ul className="language-selection-dropdown">
                                                { languages.map(language => {
                                                    return <li onClick={updateLanguageDropdownHeader} key={language}>{language}</li>
                                                }) }
                                            </ul> : null
                                        }
                                </div>
                                    : <Link to={link.to}>{link.linkName}</Link> }
                                </li>
                            })
                        }
                    </ul> : null
                }
                {
                    isLoggedIn ? <div className="search-box">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165 9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422 2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382 0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582 11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366 13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698 12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374 13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674 13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184 9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112 10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718 1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662 10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"/>
                        </svg>
                        <input type="text" placeholder="Search" />
                    </div> : null
                }
                {
                    !isLoggedIn ? <div className="auth-buttons">
                        <Link to="/login" className="auth login">Login</Link>
                        <Link to="/sign-up" className="auth sign-up">Sign up</Link>
                    </div> : null
                }
                {
                    isLoggedIn ? <div className="user">
                        <div className="notification">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14H5.00096C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125V1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1V1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216Z" fill="#45B618"/>
                            </svg>
                            <div className="notification-circle">
                                <div className="notification-circle__inner">
                                </div>
                            </div>
                        </div>
                        <div className="user-avatar-and-name">
                            <div className="user-avatar">
                            </div>
                            <div className="user-name">
                                <p className="user-name__name">Jake Collison</p>
                                <p className="user-status">Online</p>
                            </div>
                        </div>
                    </div> : null
                }
                <div className="hamburger-menu">
                    <Link className="mobile-sign-in__headerLink" to="/login">Sign in</Link>
                    <svg
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        onClick={props.toggleMobileNav}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                </div>
            </nav>
        </div>
    </header>
}

export default HeaderComponent