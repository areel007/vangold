import { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import StoryBackgroundImg1 from "../../../assets/images/stories/Rectangle9222.png";
import StoryBackgroundImg2 from "../../../assets/images/stories/Rectangle9223.png";
import StoryBackgroundImg3 from "../../../assets/images/stories/Rectangle9220.png";
import StoryBackgroundImg4 from "../../../assets/images/stories/Rectangle9221.png";
import ShowStoryBackgroundImg from "../../../assets/images/stories/Rectangle9219.png";
import StoryAvatar1 from "../../../assets/images/stories/Ellipse1520.png";
 import "./StoriesModal.css";


const StoriesModal = (props) => {
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
        props.onHide()
    }
    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-fullscreen"
        >
            <Modal.Body className='stories__modal'>
                <div className="storiesModal-header">
                    <h1 className="modal_-_channelHead mt-5">{props.head}</h1>
                    <svg style={{cursor: "pointer"}} onClick={props.onHide} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="white"/>
                    </svg>
                </div>
                <div className="storiesSlider">
                    <div className="storiesSlider-left">
                        <svg style={{cursor: "pointer"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="white" fill-opacity="0.3"/>
                        <path d="M27.4102 28.59L22.8302 24L27.4102 19.41L26.0002 18L20.0002 24L26.0002 30L27.4102 28.59Z" fill="white"/>
                        </svg>

                        <div className="inn-storiesSlider-left">
                            <div className="stories__display">
                                <img className="storyBackground-img" src={StoryBackgroundImg1} alt="StoryBackgroundImg1" />
                                <div className="stories__display-top">
                                    <div className="stories__display-top-name-time">
                                        <span>Kali Jay</span>
                                        <span>3h</span>
                                    </div>
                                </div>
                                <div className="stories__display-bottom">
                                    <div className="storiesAvatar-_-">
                                        <img className="story__avatar-img" src={StoryAvatar1} alt="storiesAvatar" />
                                    </div>
                                </div>
                            </div>
                            <div className="stories__display">
                                <img className="storyBackground-img" src={StoryBackgroundImg2} alt="StoryBackgroundImg" />
                                <div className="stories__display-top">
                                    <div className="stories__display-top-name-time">
                                        <span>Kali Jay</span>
                                        <span>3h</span>
                                    </div>
                                </div>
                                <div className="stories__display-bottom">
                                    <div className="storiesAvatar-_-">
                                        <img className="story__avatar-img" src={StoryAvatar1} alt="storiesAvatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="storiesSlider-show">
                        <img src={ShowStoryBackgroundImg} alt="ShowStoryBackgroundImg" />
                        <div className="inn__storiesSlider-show">
                            <div className="story__progressBar">
                                <ProgressBar className="inn-story__progressbar" now={60} />
                            </div>
                            <div className="story_-_avatar-name">
                                <img src={StoryAvatar1} alt="storiesAvatar" />
                                <span>Kali Jay</span>
                            </div>
                            <div className="storiesSlider-show-_-bottom">

                                <div className="storiesSlider-show-_-input__bottom">
                                    <input type="text" name="" id="" placeholder="Reply Kali" />
                                    <svg style={{cursor: "pointer"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="storiesSlider-right">
                        <svg style={{cursor: "pointer"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="white" fill-opacity="0.3"/>
                        <path d="M20.5898 19.41L25.1698 24L20.5898 28.59L21.9998 30L27.9998 24L21.9998 18L20.5898 19.41Z" fill="white"/>
                        </svg>

                        <div className="inn-storiesSlider-right">
                        <div className="stories__display">
                                <img className="storyBackground-img" src={StoryBackgroundImg3} alt="StoryBackgroundImg3" />
                                <div className="stories__display-top">
                                    <div className="stories__display-top-name-time">
                                        <span>Kali Jay</span>
                                        <span>3h</span>
                                    </div>
                                </div>
                                <div className="stories__display-bottom">
                                    <div className="storiesAvatar-_-">
                                        <img src={StoryAvatar1} alt="storiesAvatar" />
                                    </div>
                                </div>
                            </div>
                            <div className="stories__display">
                                <img className="storyBackground-img" src={StoryBackgroundImg4} alt="StoryBackgroundImg" />
                                <div className="stories__display-top">
                                    <div className="stories__display-top-name-time">
                                        <span>Kali Jay</span>
                                        <span>3h</span>
                                    </div>
                                </div>
                                <div className="stories__display-bottom">
                                    <div className="storiesAvatar-_-">
                                        <img src={StoryAvatar1} alt="storiesAvatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default StoriesModal;