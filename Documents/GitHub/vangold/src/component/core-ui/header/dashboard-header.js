import React, { useRef } from "react";
import "./header.css";
import "./dashboard-header.css";
import {Link, NavLink, useLocation} from "react-router-dom";
import HeaderLogo from "../../../assets/images/logo.png";
import AvatarImg from "../../../assets/images/avatar/photo.png"

const DashboardHeader = (props) => {
    const location = useLocation()
  
    return (
        <header>

            <div className='container'>
                <div className='header__inner dashboard__header'>
                    <div className='logo'>
                        <img src={HeaderLogo} alt="Header Logo" />
                        <h2>Vangold</h2>
                    </div>
                    <div className="search__container">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165 9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422 2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382 0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582 11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366 13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698 12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374 13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674 13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184 9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112 10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718 1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662 10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"/>
                    </svg>
                    <input type="text" placeholder="Search.." />
                    </div>
                    <div className="dashboard-avatar-name-notify">
                        <div className="notification">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14H5.00096C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125V1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1V1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216Z" fill="#45B618"/>
                        </svg>
                        <svg className="circleNotification" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="3.75" fill="#45B618" stroke="#F7F8FC" stroke-width="1.5"/></svg>
                        </div>
                        <div className="avatarImg">
                        <img src={AvatarImg} alt="Dashboard Avatart" />
                        </div>
                        <div className="dashboard__name">
                            <h2>Jake Collison</h2>
                            <p>Freelancer</p>
                        </div>
                    </div>

                    <svg
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        className='hamburger'
                        onClick={props.toggleMobileNav}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader