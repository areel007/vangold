import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    FormControl,
    FormGroup,
    Checkbox,
    withStyles,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Avatar1 from "../../../assets/images/business-chat-content/Ellipse1531.png";
import Avatar2 from "../../../assets/images/business-chat-content/Group43951.png";
import Avatar3 from "../../../assets/images/business-chat-content/Ellipse1533.png";
import Avatar4 from "../../../assets/images/business-chat-content/Group43952.png";
import CreateChannelModal from "../../core-ui/CreateChannelModal/CreateChanelModal";
import InvitePeopleModal from "../../core-ui/InvitePeopleModal/InvitePeopleModal";

const BusinessUseStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize: "16px",
        backgroundColor: "#45B618",
        marginTop: "2rem",
        [theme.breakpoints.down("769")]: {
            backgroundColor: "white",
          }
    },
    BusinessListItemText: {
        fontSize: "12px",
        fontWeight: "700",
        lineHeight: "15px",
        color: "white",
        [theme.breakpoints.down("769")]: {
            color: "#333333",
            fontWeight: "normal"
          }
    },
    label: {
        fontSize: "14px",
    },

}));

const GreenCheckbox = withStyles({
    root: {
        '&$checked': {
            color: "#45B618",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const BusinessSideBarDropDown1 = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const classes = BusinessUseStyles();
    const [checkValue, setCheckValue] = useState('')
    const [skills, setSkills] = useState(true);
    const [tools, setTools] = useState(true);
    const [experience, setExperience] = useState(true);
    const [teamTypes, setTeamTypes] = useState(true);
    const [salaryRange, setSalaryRange] = useState(true);

    const handleChange = (e) => {
        setCheckValue(e.target.value)
        console.log(checkValue);
    };

    return (
        <>

            {/* ----------------------------------CHECK BOXES STARTS FROM HERE------------------------------ */}
            <div className={classes.root}>
                <List component="nav">

                    {/* ---------------------------Skills check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setSkills(!skills);
                        }}
                    >
                        <svg className="business__chat-view__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V18H6V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" fill="white"/>
                        </svg>
                        <ListItemText
                            classes={{ primary: classes.BusinessListItemText }}
                            primary="All Teams"
                        />
                        <button className="business__chat-view__counters" disabled>2</button>
                        {skills ? <MdExpandLess className="dropDownIcon" /> : <MdExpandMore className="dropDownIcon" />}
                    </ListItem>

                    <Collapse style={{marginBottom: "24px"}} in={skills} timeout="auto" unmountOnExit>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 11V13H22V11H18ZM16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61ZM20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6ZM4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM15.5 12C15.5 10.67 14.92 9.47 14 8.65V15.34C14.92 14.53 15.5 13.33 15.5 12Z" fill="white"/>
                                                </svg>
                                                <span>General Announcements</span>
                                                
                                                <button className="business__chat-view__counters" disabled>2</button>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C6.62 17.5 5.5 16.38 5.5 15C5.5 13.62 6.62 12.5 8 12.5C9.38 12.5 10.5 13.62 10.5 15C10.5 16.38 9.38 17.5 8 17.5ZM9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5C10.62 10.5 9.5 9.38 9.5 8ZM16 17.5C14.62 17.5 13.5 16.38 13.5 15C13.5 13.62 14.62 12.5 16 12.5C17.38 12.5 18.5 13.62 18.5 15C18.5 16.38 17.38 17.5 16 17.5Z" fill="white"/>
                                                </svg>
                                                <span>Vangold Product Team</span>
                                                <button className="business__chat-view__counters" disabled>2</button>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C6.62 17.5 5.5 16.38 5.5 15C5.5 13.62 6.62 12.5 8 12.5C9.38 12.5 10.5 13.62 10.5 15C10.5 16.38 9.38 17.5 8 17.5ZM9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5C10.62 10.5 9.5 9.38 9.5 8ZM16 17.5C14.62 17.5 13.5 16.38 13.5 15C13.5 13.62 14.62 12.5 16 12.5C17.38 12.5 18.5 13.62 18.5 15C18.5 16.38 17.38 17.5 16 17.5Z" fill="white"/>
                                                </svg>

                                                <span>Vangold Marketing Team</span>
                                                <button className="business__chat-view__counters" disabled>2</button>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C6.62 17.5 5.5 16.38 5.5 15C5.5 13.62 6.62 12.5 8 12.5C9.38 12.5 10.5 13.62 10.5 15C10.5 16.38 9.38 17.5 8 17.5ZM9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5C10.62 10.5 9.5 9.38 9.5 8ZM16 17.5C14.62 17.5 13.5 16.38 13.5 15C13.5 13.62 14.62 12.5 16 12.5C17.38 12.5 18.5 13.62 18.5 15C18.5 16.38 17.38 17.5 16 17.5Z" fill="white"/>
                                                </svg>

                                                <span>Vangold Marketing Team</span>
                                                <button className="business__chat-view__counters" disabled>2</button>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div onClick={() => setModalShow(true)} className="business-chat__side-bar-list mobile__business-chat__side-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="white"/>
                                                </svg>
                                                <span>Add Channels</span>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                    </Collapse>

                    {/* ---------------------------Tools check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setTools(!tools);
                        }}
                    >
                        <svg className="business__chat-view__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="white"/>
                        </svg>
                        <ListItemText
                            classes={{ primary: classes.BusinessListItemText }}
                            primary="Direct Messages"
                        />
                        {tools ? <MdExpandLess className="dropDownIcon" /> : <MdExpandMore className="dropDownIcon" />}
                    </ListItem>

                    <Collapse in={tools} timeout="auto" unmountOnExit>
                    <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <img className="business-chat__avatar_img" src={Avatar1} alt="business-chat-msg-avatar" />
                                                <span>Carlos Pena</span>
                                            </div>
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <img className="business-chat__avatar_img" src={Avatar2} alt="business-chat-msg-avatar" />
                                                <span>Damilare Olulana</span>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <img className="business-chat__avatar_img" src={Avatar3} alt="business-chat-msg-avatar" />
                                                <span>Dare Bello</span>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div className="business-chat__side-bar-list mobile__business-chat__side-bar-list mobile__business-chat__side-bar-list-header">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <img className="business-chat__avatar_img" src={Avatar4} alt="business-chat-msg-avatar" />
                                                <span>Vivian Ufot</span>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                        <div onClick={() => setModalShow2(true)} className="business-chat__side-bar-list mobile__business-chat__side-bar-list">
                            <List component="div" disablePadding>
                                <ListItem>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <div className='d-flex business-chat__side-bar-content justify-content-between'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="white"/>
                                                </svg>
                                                <span>Add Teammates</span>
                                            </div>
                                        
                                        </FormGroup>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </div>
                    </Collapse>
                    <CreateChannelModal 
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        head="Create new channel"
                        btntext='Create' />
                    <InvitePeopleModal 
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                        head="Invite people  to Vangold"
                        btntext='Send' />
                    
                </List>
            </div>
        </>
    );
};

export default BusinessSideBarDropDown1;
