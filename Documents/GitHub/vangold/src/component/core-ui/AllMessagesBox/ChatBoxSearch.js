import React from 'react'
import participantsAvatar1 from "../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../assets/images/avatar/Ellipse-7-3.png";

import "./AllMessagesBox.css";

const ChatBoxSearch = (props) => {
    
    return (
        <div className="ChatBoxMembers__container">
            <div className="ChatBox__Search">
                <div className="chat__search__header">
                    <svg onClick={props.closeChatSearch} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                    </svg>
                    <span>Search Messages</span>
                </div>
                <div className="inn__chatBox__search">
                    <div className="chat__search_-_box">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0207 10.0767L13.876 12.9314L12.9327 13.8747L10.078 11.0194C9.01587 11.8708 7.69471 12.334 6.33337 12.332C3.02137 12.332 0.333374 9.64403 0.333374 6.33203C0.333374 3.02003 3.02137 0.332031 6.33337 0.332031C9.64537 0.332031 12.3334 3.02003 12.3334 6.33203C12.3353 7.69337 11.8722 9.01452 11.0207 10.0767ZM9.68337 9.58203C10.5294 8.71196 11.002 7.54565 11 6.33203C11 3.75336 8.91137 1.66536 6.33337 1.66536C3.75471 1.66536 1.66671 3.75336 1.66671 6.33203C1.66671 8.91003 3.75471 10.9987 6.33337 10.9987C7.54699 11.0006 8.7133 10.5281 9.58337 9.68203L9.68337 9.58203Z" fill="#505050"/>
                        </svg>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="ChatBoxMembers__display_container">
                        <div className="chatBox__search__text">
                            <p>Search for messages within VanGold Website Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBoxSearch;