import React from 'react';
import Avatar1 from "../../../assets/images/chat/Ellipse1476.png";
import "./AllMessagesBox.css";

const ChatBoxNine = (props) => {
 
    return (
        <>
            <div className="MessageBox__">
                <div className="chat__container-header mt-5">
                    <p className="chat__container-title">Inbox</p>
                    <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                </div>
                <div className="MessageBox__header">
                    <div className="MessageBox__profile__data">
                        <img src={Avatar1} alt="Avatar1" />
                        <span>Kali Jay</span>
                    </div>
                    <div className="MessageBox__profile__data__svg">
                        <svg onClick={() => {props.setSeeMessage(false); props.setShowCall(true);}} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 4.5V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5Z" fill="#333333"/>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" fill="#333333"/>
                        </svg>
                    </div> 
                </div>

                <div className="ChatBox__">
                    <div className="ChatBox__sendMsg">
                        <div className="Inn__ChatBox__sendMsg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio feugiat donec imperdiet aliquam vel, penatibus quis pulvinar. Lectus pellentesque magna dapibus fringilla fermentum id urna.
                        </div>
                        <div className="ChatBox__sendMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    
                    <div className="ChatBox__replyMsg">
                        <div className="Inn__ChatBox__replyMsg Biz__Inn__ChatBox__replyMsg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed tempus convallis faucibus. Imperdiet fringilla vitae auctor diam duis.
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="call__chatBox">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="14.7692" rx="4" fill="#C4C4C4" fill-opacity="0.5"/>
                            <g clip-path="url(#clip0)">
                            <path d="M5.74479 4.71802L8.0012 6.97443L10.873 4.10264L10.4627 3.69238L8.0012 6.15392L6.15505 4.30777H7.59095V3.69238H5.12941V6.15392H5.74479V4.71802ZM12.8053 9.30059C11.554 8.11495 9.86377 7.38469 8.0012 7.38469C6.13864 7.38469 4.44838 8.11495 3.1971 9.30059C3.12325 9.37443 3.07812 9.477 3.07812 9.59187C3.07812 9.70674 3.12325 9.80931 3.1971 9.88315L4.21454 10.9006C4.28838 10.9744 4.39095 11.0196 4.50582 11.0196C4.61659 11.0196 4.71915 10.9744 4.793 10.9047C5.1171 10.6011 5.48633 10.3467 5.88428 10.1457C6.01966 10.0801 6.11402 9.94059 6.11402 9.77649V8.50469C6.70889 8.30777 7.34479 8.2052 8.0012 8.2052C8.65761 8.2052 9.29351 8.30777 9.88838 8.50059V9.77238C9.88838 9.93238 9.98274 10.076 10.1181 10.1416C10.5202 10.3426 10.8853 10.6011 11.2135 10.9006C11.2874 10.9744 11.3899 11.0155 11.5007 11.0155C11.6156 11.0155 11.7181 10.9703 11.792 10.8965L12.8094 9.87905C12.8833 9.8052 12.9284 9.70264 12.9284 9.58777C12.9284 9.4729 12.8792 9.37443 12.8053 9.30059Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="9.84615" height="9.84615" fill="white" transform="translate(3.07812 2.46143)"/>
                            </clipPath>
                            </defs>
                            </svg>

                            <span>Missed call fom Jane Doe</span>
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            11:50 AM
                        </div>
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="Inn__ChatBox__replyMsg Biz__Inn__ChatBox__replyMsg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed tempus convallis faucibus. Imperdiet fringilla vitae auctor diam duis.
                        </div>
                        <div className="ChatBox__replyMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="center__time">
                        June 20, 10:46 pm
                    </div>
                    <div className="ChatBox__sendMsg">
                        <div className="Inn__ChatBox__sendMsg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className="ChatBox__sendMsg__time">
                            Saturday 11:50 PM
                        </div>
                    </div>
                    <div className="ChatBox__replyMsg">
                        <div className="Inn__ChatBox__replyMsg Biz__Inn__ChatBox__replyMsg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing fjfjjfjf mjfkfkf elit. Mi sed tempus convallis faucibus. Imperdiet fringilla vitae auctor diam duis.
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

export default ChatBoxNine;