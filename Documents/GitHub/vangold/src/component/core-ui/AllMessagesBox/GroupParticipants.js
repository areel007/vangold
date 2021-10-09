import React from 'react'
import { Container } from "react-bootstrap";
import participantsAvatar1 from "../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../assets/images/avatar/Ellipse-7-3.png";

import "./AllMessagesBox.css";

const userMembersAdmin = [
    {
        usersAvatar: participantsAvatar1,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
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
]

const userMembers = [
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]
 

const GroupParticipants = (props) => {
    return (
        <>
            <div className="ChatBoxMembers GroupParticipants">
                <div className="top__inn__ChatBoxMembers__header">

                    <svg className="arrow__left" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span>Group Participants</span>
                    <svg onClick={props.closeMemberShow}width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                    </svg>
                </div>
                <div className="inn__ChatBoxMembers__header">
                    <input type="text" placeholder="70  Participants" />
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33238 14.0013C8.81152 14.001 10.248 13.5058 11.4132 12.5946L15.0765 16.258L16.2549 15.0796L12.5915 11.4163C13.5032 10.251 13.9987 8.81417 13.999 7.33463C13.999 3.6588 11.0082 0.667969 7.33238 0.667969C3.65654 0.667969 0.66571 3.6588 0.66571 7.33463C0.66571 11.0105 3.65654 14.0013 7.33238 14.0013ZM7.33238 2.33464C10.0899 2.33464 12.3324 4.57714 12.3324 7.33463C12.3324 10.0921 10.0899 12.3346 7.33238 12.3346C4.57488 12.3346 2.33238 10.0921 2.33238 7.33463C2.33238 4.57714 4.57488 2.33464 7.33238 2.33464Z" fill="#333333"/>
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
        </>
    )
}

export default GroupParticipants;