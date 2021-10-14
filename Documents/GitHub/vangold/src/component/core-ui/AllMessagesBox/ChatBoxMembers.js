import React from 'react'
import participantsAvatar1 from "../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../assets/images/avatar/Ellipse-7-3.png";

import "./AllMessagesBox.css";

const userMembers = [
    {
        usersAvatar: participantsAvatar2,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar3,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]

const userMembersAdmin = [
    {
        usersAvatar: participantsAvatar1,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]

const ChatBoxMembers = (props) => {
    
    return (
        <div className="llflfkdk">
            <div className="ChatBoxMembers">
                <div className="inn__ChatBoxMembers__header">
                    <input type="text" placeholder="Members" />
                    <svg onClick={props.closeMemberShow} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#4F4F4F"/>
                    </svg>
                </div>
                <div className="ChatBoxMembers__display_container">
                    {userMembersAdmin.map((userMemberAdmin, index) => (
                        <div key={index} className="ChatBoxMembers__display_box">
                            <div className="ChatBoxMembers__display_l">
                                <img src={userMemberAdmin.usersAvatar} alt="participantsAvatar1" />
                                <div className="ChatBoxMembers__display_l_name_msg">
                                    <span>Kali Jay</span>
                                    <span>Hi our deadlines are...</span>
                                </div>
                            </div>
                            <div className="ChatBoxMembers__display_r">
                                <button>Group Admin</button>
                            </div>
                        </div>
                        ))
                    }
                    {userMembers.map((userMember, index) => (
                        <div key={index} className="ChatBoxMembers__display_box">
                            <div className="ChatBoxMembers__display_l">
                                <img src={userMember.usersAvatar} alt="participantsAvatar1" />
                                <div className="ChatBoxMembers__display_l_name_msg">
                                    <span>Kali Jay</span>
                                    <span>Hi our deadlines are...</span>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatBoxMembers;