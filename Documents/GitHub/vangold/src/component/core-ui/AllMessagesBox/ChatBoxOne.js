import React from 'react';
import { Link } from "react-router-dom";
import imageOne from "../../../assets/images/chat/Ellipse1476.png";
import useOnclickOutside from "react-cool-onclickoutside";
import ChatBoxMembers from "./ChatBoxMembers";
import "./AllMessagesBox.css";
import "./responsive.css";

const ChatBoxOne = (props) => {
    const [isShow, setIsShow] = React.useState(false);
    const [memberShow, setMemberShow] = React.useState(false);

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
    return (
        <>
            <div className="MessageBox__">
                <div className="MessageBox__header">
                    <div className="MessageBox__profile__data">
                        <img src={imageOne} alt="imageOne" />
                        <span>VanGold Website Design</span>
                    </div>
                    <svg  onClick={openPopover} width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.125 4.5C11.3676 4.5 12.375 3.49264 12.375 2.25C12.375 1.00736 11.3676 0 10.125 0C8.88236 0 7.875 1.00736 7.875 2.25C7.875 3.49264 8.88236 4.5 10.125 4.5Z" fill="black"/>
                        <path d="M18 4.5C19.2426 4.5 20.25 3.49264 20.25 2.25C20.25 1.00736 19.2426 0 18 0C16.7574 0 15.75 1.00736 15.75 2.25C15.75 3.49264 16.7574 4.5 18 4.5Z" fill="black"/>
                        <path d="M2.25 4.5C3.49264 4.5 4.5 3.49264 4.5 2.25C4.5 1.00736 3.49264 0 2.25 0C1.00736 0 0 1.00736 0 2.25C0 3.49264 1.00736 4.5 2.25 4.5Z" fill="black"/>
                    </svg>
                    {isShow &&
                        <div ref={ref} class="ChatBox__popoverBox ChatBox__arrow-top">
                            <div className="ChatBox__popover__close-btns">
                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="ChatBox__popover__links">
                                <Link onClick={closePopover} to="/profile/group-chat">Create Group</Link>
                                <li onClick={() => { closePopover(); openMemberShow()}}>View Team Members</li>
                                <li onClick={closePopover} to="#">Search</li>
                                <li onClick={closePopover} to="#">Report Contact</li>
                            </div>                                     
                        </div>
                    }
                    
                </div>
                {memberShow &&
                <div ref={ref}>
                    <ChatBoxMembers closeMemberShow={closeMemberShow}/>
                </div>
                }
                <div className="ChatBox__">
                    <div className="ChatBox__sendMsg">
                        <div className="Inn__ChatBox__sendMsg">
                            Okay, some other time, I guess. Lorem Ipsum jji jksn jikkkms jkola kopol; kppp
                        </div>
                        <div className="ChatBox__sendMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="center__time">
                        June 20, 10:46 pm
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="Top__ChatBox__replyMsg">
                            <span>Replied to Damola</span>
                            <div className="Inn__Top__ChatBox__replyMsg">
                                Hey, Devon. Can we get on a quick call?
                            </div>
                        </div>
                        <div className="Inn__ChatBox__replyMsg">
                            <span className="Inn__ChatBox__replyMsg__name">Koyote Stark</span>
                            Hi, Damola. Sure, but now I’m busy rn.
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="Inn__ChatBox__replyMsg">
                            <span className="Inn__ChatBox__replyMsg__name">Femi</span>
                            Hi, Emmie. Sure, but now I’m busy rn.
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__sendMsg">
                        <div className="Inn__ChatBox__sendMsg">
                            Okay, some other time, I guess.
                        </div>
                        <div className="ChatBox__sendMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="Inn__ChatBox__replyMsg">
                            <span className="Inn__ChatBox__replyMsg__name">Tola</span>
                            Hey y’all, Burna new event is coming up. Check out this nehhh jjjnnnd nnjjjnnnjn
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__Footer">
                        <div className="Inn__ChatBox__Footer-input">
                            <div className="ChatBox__Footer-input">
                                <input type="text" placeholder="Message..." />
                            </div>
                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM5.8 2.9C5.8 2.24 6.34 1.7 7 1.7C7.66 1.7 8.2 2.24 8.2 2.9L8.19 9.1C8.19 9.76 7.66 10.3 7 10.3C6.34 10.3 5.8 9.76 5.8 9.1V2.9ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.41 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z" fill="#333333"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#333333"/>
                            <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#333333"/>
                            <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#333333"/>
                            <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#333333"/>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#333333"/>
                            </svg>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.2824 18.4242C2.13279 16.2746 2.13279 12.7957 4.2824 10.6461L11.707 3.22145C13.2697 1.65874 15.8012 1.65874 17.3639 3.22145C18.9266 4.78415 18.9266 7.3156 17.3639 8.8783L11.3535 14.8887C10.3777 15.8645 8.79374 15.8645 7.81793 14.8887C6.84212 13.9129 6.84212 12.329 7.81793 11.3532L13.1212 6.04988L14.5354 7.46409L9.16851 12.831C8.7796 13.2199 9.4867 13.927 9.87561 13.5381L15.9497 7.46409C16.7275 6.68627 16.7275 5.41348 15.9497 4.63566C15.1718 3.85784 13.8991 3.85784 13.1212 4.63566L5.69661 12.0603C4.3319 13.425 4.3319 15.6453 5.69661 17.01C7.06133 18.3747 9.28164 18.3747 10.6464 17.01L17.3639 10.2925L18.7781 11.7067L12.0606 18.4242C9.91097 20.5738 6.432 20.5738 4.2824 18.4242Z" fill="#333333"/>
                            </svg>
                        </div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#45B618"/>
                        <path d="M34 14L23 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34 14L27 34L23 25L14 21L34 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBoxOne;