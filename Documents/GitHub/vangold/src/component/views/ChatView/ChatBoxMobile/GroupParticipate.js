import React from "react";
import { Container } from "react-bootstrap";
import participantsAvatar1 from "../../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../../assets/images/avatar/Ellipse-7-3.png";

const GroupParticipate = () => {

    const groupChatParticipantsUsersData = [
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
        {
            usersAvatar: participantsAvatar4,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
    ]

  return (
    <div id="chat-mobile-box">
      <Container fluid>
        <div className="chat__box__contaniner-left">
            <div className="arrow-top-G-Chat mobile-arrow-top-G-Chat">
                <svg width="16" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L1 8L8 1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Group Participants</span>
            </div>
        <div className="group-participants">
            <div className="popover__partcipants_link__header mobile-popover__partcipants_link__header">
                <span>70  Participants</span>
                <svg style={{cursor: "pointer"}} width="15.59" height="15.59" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33268 13.9993C8.81183 13.999 10.2484 13.5039 11.4135 12.5927L15.0768 16.256L16.2552 15.0777L12.5919 11.4143C13.5035 10.2491 13.999 8.81221 13.9993 7.33268C13.9993 3.65685 11.0085 0.666016 7.33268 0.666016C3.65685 0.666016 0.666016 3.65685 0.666016 7.33268C0.666016 11.0085 3.65685 13.9993 7.33268 13.9993ZM7.33268 2.33268C10.0902 2.33268 12.3327 4.57518 12.3327 7.33268C12.3327 10.0902 10.0902 12.3327 7.33268 12.3327C4.57518 12.3327 2.33268 10.0902 2.33268 7.33268C2.33268 4.57518 4.57518 2.33268 7.33268 2.33268Z" fill="#333333"/>
                </svg>
            </div>
            {
                groupChatParticipantsUsersData.map((groupParticipantsUsersData) => (
                    <div className="chat__group__component_participants-data mobile-chat__group__component_participants-data">
                        <div className="userMobileChatData">
                            <img className="chat__avatar" src={groupParticipantsUsersData.usersAvatar} alt="chat Avatar" />
                            <div className="userChatDataDetails">
                                <p className="chat__users_name">{groupParticipantsUsersData.userName}</p>
                                <p className="chat__users_title">{groupParticipantsUsersData.messages}</p>
                            </div>
                        </div>
                        <button className="choose-group-admin-button">Group Admin</button>
                    </div>
                ))
            }
        </div>
       </div>
      </Container>
    </div>
  );
};

export default GroupParticipate;
