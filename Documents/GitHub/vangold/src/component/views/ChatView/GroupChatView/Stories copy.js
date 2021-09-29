import React, { useState } from "react";
import avatar3 from "../../../../assets/images/stories/Ellipse1520.png";
import '../ChatComponent2.css';

const userStoriesData = [
    {
        avatar: avatar3,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar3,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar3,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar3,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar3,
        userName: "Adam Sandler"
    },

] 

const Stories = () => {

    return (
        <div id="" className="">
            <div className="stories__box__contaniner">
            <div className="addStories">
                <div className="addStories_-img__svg">
                    <img src={avatar3} alt="addStories" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#45B618"/>
                        <path d="M11.5 8.5H8.5V11.5H7.5V8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5Z" fill="white"/>
                    </svg>
                </div>
                <span>Your story</span>
            </div>
                <div className="stories__container">
                    {
                        userStoriesData.map((userData) => (
                                    <div className="stories-show-box">
                                        <div className="stories-profile-details">
                                            <div className="avatar__stories">
                                                <img className="chat__avatar" src={userData.avatar} alt="stories avatar" />
                                            </div>
                                            <p className="chat__users_name">{userData.userName}</p>
                                        </div>
                                    </div>
                                ))
                            }
                </div>
            </div>
        </div>
    );
}

export default Stories;