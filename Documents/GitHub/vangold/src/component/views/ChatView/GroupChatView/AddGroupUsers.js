import React, {useState} from "react";
import { Chip } from "@material-ui/core";
import { Col, Container, Row, Form } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import { makeStyles } from '@material-ui/core/styles';
import messageBoxImg from "../../../../assets/images/group-therapy/rafiki.png";
import participantsAvatar1 from "../../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../../assets/images/avatar/Ellipse-7-3.png";
import useOnclickOutside from "react-cool-onclickoutside";
import GroupParticipants from "../../../core-ui/AllMessagesBox/GroupParticipants";
import '../ChatComponent.css'

const otherUsersData = [
    {
        usersAvatar: participantsAvatar1,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        usersAvatar: participantsAvatar2,
        userName: 'Kali Jay',
        title: 'Frontend Developer',
    },
    {
        usersAvatar: participantsAvatar3,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        title: 'Frontend Developer',
    },
    {
        usersAvatar: participantsAvatar3,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        title: 'Frontend Developer',
    },
]
const useStyles = makeStyles((theme) => ({

    chip: {
        margin: theme.spacing(0.5),
        backgroundColor: '#C4C4C4',
        color: '#333333',
        fontSize: '14px'
    },
}));
const AddGroupUsers = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [memberShow, setMemberShow] = React.useState(false);
    
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [chipData, setChipData] = useState([]);
    var dispSkills = [];
    var dispSkills = chipData.filter(function (elem, pos) {
        return chipData.indexOf(elem) == pos;
    });

    const openPopover = () => {
      setIsShow(!isShow);
    };
    
    const closePopover = () => {
        setIsShow(false);
    };

    const openMemberShow = () => {
        setMemberShow(!memberShow);
    };
    const closeMemberShow = () => {
        setMemberShow(false);
    };

    const ref = useOnclickOutside(() => {
        setIsShow(false);
        setMemberShow(false);
      });

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setChipData(prevCount => [...chipData, { key: prevCount + 200, label: value }])
            setValue('')
        }
    }
  
    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">Inbox</p>
                            <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                        </div>
                        <div className="chat__box__contaniner">
                            <div className="chat__box__contaniner-left">
                                <div className="grp__chat__view-left-top">
                                    <div className="grp__chat__view-left-top-header">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 19L5 12L12 5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <span>Add group participants</span>
                                    </div>
                                    <svg className="grp__chat__view-left-pop_up-icon" onClick={openPopover} style={{cursor: "pointer"}} width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#333333"/>
                                    </svg>
                                    {isShow &&
                                        <div ref={ref} class="popoverBox mobile__popoverBox arrow-top">
                                            <div className="popover__close-btns">
                                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                </svg>
                                            </div>
                                            <div className="popover__links">
                                                <li onClick={() => { closePopover();  openMemberShow()}}>Group Participant</li>
                                                <li onClick={closePopover}>Search</li>
                                                <li onClick={closePopover}>Report Group</li>
                                                <li onClick={closePopover}>Exit Group</li>
                                            </div>                                     
                                        </div>
                                    }
                                    {memberShow &&
                                    <div ref={ref}>
                                        <GroupParticipants closeMemberShow={closeMemberShow}/>
                                    </div>
                                    }
                                </div>
                                
                                <div className="add__participant__data">
                                    <div className="chat__search-box">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165 9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422 2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382 0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582 11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366 13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698 12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374 13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674 13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184 9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112 10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718 1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662 10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"/>
                                        </svg>
                                        <input type="text" value={value} className="form-control" size='lg' onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)} />
                                    </div>
                                    <div className="addParticipants">
                                        <div className="inn-addParticipants">
                                            <div className='d-inline'>
                                                {dispSkills.map((data) => {
                                                    return (
                                                        <Chip
                                                            key={data.key}
                                                            label={data.label}
                                                            onDelete={handleDelete(data)}
                                                            className={classes.chip}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users__chat__avatar">
                                        {
                                            otherUsersData.map((userChatData) => (
                                                <div className="chat__component_users-data">
                                                    <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat avatar" />
                                                    <div className="userChatData">
                                                        <span className="chat__users_name">{userChatData.userName}</span>
                                                        <span className="chat__users_title">{userChatData.title}</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="addparticipant__btn text-center">
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="28" cy="28" r="28" fill="#45B618"/>
                                        <path d="M31 21L29.59 22.41L34.17 27H18V29H34.17L29.58 33.59L31 35L38 28L31 21Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="message__box-container">
                                <h2 className="msg-h2" style={{color: "#000000", fontSize: 31, fontWeight: "bold"}}>Group chats</h2>
                                <p style={{maxWidth: 457}} className="msg-P">Have conversations around your different interest as  a group</p>
                                <img className="msg-photo" style={{width: 500, height: 372.56}} src={messageBoxImg} alt="Message" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddGroupUsers;