import { Modal } from "react-bootstrap";
import StoryBackgroundImg1 from "../../../assets/images/stories/Rectangle9222.PNG";
import StoryBackgroundImg2 from "../../../assets/images/stories/Rectangle9223.jpg";
import StoryBackgroundImg3 from "../../../assets/images/stories/Rectangle9220.png";
import StoryBackgroundImg4 from "../../../assets/images/stories/Rectangle9221.jpg";
import StoryAvatar1 from "../../../assets/images/stories/Ellipse1520.png";
import Stories from 'react-insta-stories';
 import "./StoriesModal.css";



 const stories = [
    {
		content: () => (
			<div className="stories__data">
                <div className="stories__data__top">
                    <img src={StoryAvatar1} alt="ShowStoryBackgroundImg" />
                    <div className="stories__data__top__name__timep">
                        <span>Jane Doe</span>
                        <span>3h</span>
                    </div>
                </div>
				<img src={StoryBackgroundImg1} alt="ShowStoryBackgroundImg" />
                
			</div>
		),
    },
    {
		content: () => (
			<div className="stories__data">
                <div className="stories__data__top">
                    <img src={StoryAvatar1} alt="ShowStoryBackgroundImg" />
                    <div className="stories__data__top__name__timep">
                        <span>Kane Well</span>
                        <span>2m</span>
                    </div>
                </div>
				<img src={StoryBackgroundImg2} alt="ShowStoryBackgroundImg" />
                
			</div>
		),
    },
    {
		content: () => (
			<div className="stories__data">
                <div className="stories__data__top">
                    <img src={StoryAvatar1} alt="ShowStoryBackgroundImg" />
                    <div className="stories__data__top__name__timep">
                        <span>Femi Jide</span>
                        <span>3h</span>
                    </div>
                </div>
				<img src={StoryBackgroundImg3} alt="ShowStoryBackgroundImg" />
                
			</div>
		),
    },
    {
		content: () => (
			<div className="stories__data">
                <div className="stories__data__top">
                    <img src={StoryAvatar1} alt="ShowStoryBackgroundImg" />
                    <div className="stories__data__top__name__timep">
                        <span>Nneka John</span>
                        <span>1h</span>
                    </div>
                </div>
				<img src={StoryBackgroundImg4} alt="ShowStoryBackgroundImg" />
                
			</div>
		),
    },
    
  ];
 
  
const StoriesModal = (props) => {

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
                <Stories
                    stories={stories}
                    defaultInterval={5000}
                    width={432}
                    height={768}
                />
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default StoriesModal;