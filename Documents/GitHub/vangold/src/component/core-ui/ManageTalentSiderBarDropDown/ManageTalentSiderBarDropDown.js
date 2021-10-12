import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    FormControl,
    FormGroup,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import participantsAvatar1 from "../../../assets/images/manage-talents/Rectangle9192.png";
import participantsAvatar2 from "../../../assets/images/manage-talents/Rectangle9190.png";
import participantsAvatar3 from "../../../assets/images/manage-talents/Rectangle9191.png";
import ManageTalentChat from "../AllMessagesBox/ManageTalentChat";

import "./ManageTalentSiderBarDropDown.css";

const ManageTalentUsesStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    BusinessListItemText: {
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "20px",
        color: "#333333"
    },
    label: {
        fontSize: "14px",
    },

}));


const ManageTalentDropDown = () => {
    const classes = ManageTalentUsesStyles();
    const [skills, setParticipants] = useState(true);
    const [chats, setChats] = useState(true);
    return (
        <>

            {/* ----------------------------------CHECK BOXES STARTS FROM HERE------------------------------ */}
            <div className={classes.root}>
                <List component="nav">

                    {/* ---------------------------Skills check boxes---------------------- */}
                    <ListItem className="ManageTalent__sideBar__chat-listItem_header"
                        button
                        onClick={() => {
                            setParticipants(!skills);
                        }}
                    >
                        <svg className="ManageTalent__sideBar__chat-view__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#45B618"/>
                        </svg>
                        <ListItemText
                            classes={{ primary: classes.BusinessListItemText }}
                            primary="Participants"
                        />
                        {skills ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse style={{marginBottom: "24px"}} in={skills} timeout="auto" unmountOnExit>
                        <div className="ManageTalentSide-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex ManageTalentSide-bar-content justify-content-between'>
                                                <div className="userChat__manageTalent__Box">
                                                    <div className="userChat__manageTalent__Box__left">
                                                        <img src={participantsAvatar1} alt="talentusersAvatar" />
                                                        <span>Brian Lukas</span>
                                                    </div>
                                                    <div className="userChat__manageTalent__Box__right">
                                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.41 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z" fill="#45B618"/>
                                                        </svg>
                                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 2V10H2V2H12ZM13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.45 13.55 0 13 0Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="ManageTalentSide-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                        <div className='d-flex ManageTalentSide-bar-content justify-content-between'>
                                                <div className="userChat__manageTalent__Box">
                                                    <div className="userChat__manageTalent__Box__left">
                                                        <img src={participantsAvatar2} alt="talentusersAvatar" />
                                                        <span>Brian Lukas</span>
                                                    </div>
                                                    <div className="userChat__manageTalent__Box__right">
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 9H14.3C14.3 9.74 14.14 10.43 13.87 11.05L15.1 12.28C15.66 11.3 16 10.19 16 9ZM11.98 9.17C11.98 9.11 12 9.06 12 9V3C12 1.34 10.66 0 9 0C7.34 0 6 1.34 6 3V3.18L11.98 9.17ZM1.27 1L0 2.27L6.01 8.28V9C6.01 10.66 7.34 12 9 12C9.22 12 9.44 11.97 9.65 11.92L11.31 13.58C10.6 13.91 9.81 14.1 9 14.1C6.24 14.1 3.7 12 3.7 9H2C2 12.41 4.72 15.23 8 15.72V19H10V15.72C10.91 15.59 11.77 15.27 12.54 14.82L16.73 19L18 17.73L1.27 1Z" fill="#333333"/>
                                                        </svg>

                                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M14 4.5V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5Z" fill="black"/>
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="ManageTalentSide-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                        <div className='d-flex ManageTalentSide-bar-content justify-content-between'>
                                                <div className="userChat__manageTalent__Box">
                                                    <div className="userChat__manageTalent__Box__left">
                                                        <img src={participantsAvatar3} alt="talentusersAvatar" />
                                                        <span>Brian Lukas</span>
                                                    </div>
                                                    <div className="userChat__manageTalent__Box__right">
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 9H14.3C14.3 9.74 14.14 10.43 13.87 11.05L15.1 12.28C15.66 11.3 16 10.19 16 9ZM11.98 9.17C11.98 9.11 12 9.06 12 9V3C12 1.34 10.66 0 9 0C7.34 0 6 1.34 6 3V3.18L11.98 9.17ZM1.27 1L0 2.27L6.01 8.28V9C6.01 10.66 7.34 12 9 12C9.22 12 9.44 11.97 9.65 11.92L11.31 13.58C10.6 13.91 9.81 14.1 9 14.1C6.24 14.1 3.7 12 3.7 9H2C2 12.41 4.72 15.23 8 15.72V19H10V15.72C10.91 15.59 11.77 15.27 12.54 14.82L16.73 19L18 17.73L1.27 1Z" fill="#333333"/>
                                                        </svg>
                                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 2V10H2V2H12ZM13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.45 13.55 0 13 0Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="ManageTalentSide-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                        <div className='d-flex ManageTalentSide-bar-content justify-content-between'>
                                                <div className="userChat__manageTalent__Box">
                                                    <div className="userChat__manageTalent__Box__left">
                                                        <img src={participantsAvatar2} alt="talentusersAvatar" />
                                                        <span>Brian Lukas</span>
                                                    </div>
                                                    <div className="userChat__manageTalent__Box__right">
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 9H14.3C14.3 9.74 14.14 10.43 13.87 11.05L15.1 12.28C15.66 11.3 16 10.19 16 9ZM11.98 9.17C11.98 9.11 12 9.06 12 9V3C12 1.34 10.66 0 9 0C7.34 0 6 1.34 6 3V3.18L11.98 9.17ZM1.27 1L0 2.27L6.01 8.28V9C6.01 10.66 7.34 12 9 12C9.22 12 9.44 11.97 9.65 11.92L11.31 13.58C10.6 13.91 9.81 14.1 9 14.1C6.24 14.1 3.7 12 3.7 9H2C2 12.41 4.72 15.23 8 15.72V19H10V15.72C10.91 15.59 11.77 15.27 12.54 14.82L16.73 19L18 17.73L1.27 1Z" fill="#333333"/>
                                                        </svg>
                                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 2V10H2V2H12ZM13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.45 13.55 0 13 0Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                    </Collapse>

                    {/* ---------------------------Tools check boxes---------------------- */}
                    <ListItem className="ManageTalent__sideBar__chat-listItem_header"
                        button
                        onClick={() => {
                            setChats(!chats);
                        }}
                    >
                        <svg className="ManageTalent__sideBar__chat-view__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 7H16V9H4V7ZM12 12H4V10H12V12ZM16 6H4V4H16V6Z" fill="#45B618"/>
                        </svg>

                        <ListItemText
                            classes={{ primary: classes.BusinessListItemText }}
                            primary="Chat"
                        />
                        {chats ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={chats} timeout="auto" unmountOnExit>
                    <div className="ManageTalentSide-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='ManageTalentSide-bar-chat-container'>
                                                <ManageTalentChat />
                                            </div>
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                    </Collapse>
                    
                </List>
            </div>
        </>
    );
};

export default ManageTalentDropDown;
