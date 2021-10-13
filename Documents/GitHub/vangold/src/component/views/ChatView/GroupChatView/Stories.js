import React from "react";
import avatar3 from "../../../../assets/images/stories/Ellipse1520.png";
import '../ChatComponent2.css';
import "./stories.css"

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
        <div className="stories">
            <div className="stories__inner">
                <div className="add-stories">
                    <div className="add-stories__inner">
                        <div className="avatar">
                            <img src={avatar3} alt=""/>
                            <div className="plus-button">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 6.5H6.5V9.5H5.5V6.5H2.5V5.5H5.5V2.5H6.5V5.5H9.5V6.5Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <span>Your story</span>
                    </div>
                </div>
                <div className="stories-list">
                    {
                        userStoriesData.map((_user, index) => {
                            return <div key={index}  className="story">
                                <div className="story__inner">
                                    <div className="avatar">
                                        <img src={_user.avatar} alt=""/>
                                    </div>
                                    <span>{_user.userName}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Stories;