import { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import StoryBackgroundImg1 from "../../../assets/images/stories/Rectangle9222.PNG";
import StoryBackgroundImg2 from "../../../assets/images/stories/Rectangle9223.png";
import StoryBackgroundImg3 from "../../../assets/images/stories/Rectangle9220.png";
import StoryBackgroundImg4 from "../../../assets/images/stories/Rectangle9221.png";
import ShowStoryBackgroundImg from "../../../assets/images/stories/Rectangle9219.png";
import StoryAvatar1 from "../../../assets/images/stories/Ellipse1520.png";
import Stories from 'react-insta-stories';
 import "./StoriesModal.css";



 const stories = [
    {
      url: StoryBackgroundImg1,
      header: {
        heading: "Jane Doe",
        subheading: "Posted 5h ago",
        profileImage: StoryAvatar1,
      },
    },
    {
      url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
      header: {
        heading: "Jane Doe",
        subheading: "Posted 32m ago",
        profileImage: StoryAvatar1,      
    },
    },
    {
      url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
      header: {
        heading: "Jane Doe",
        subheading: "Posted 32m ago",
        profileImage: StoryAvatar1,
      },
    },
    {
      url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
      type: "video",
      duration: 1000,
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      type: "video",
    },
    {
        url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        header: {
          heading: "Jane Doe",
          subheading: "Posted 32m ago",
          profileImage: StoryAvatar1,      
      },
      },
      {
        url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        header: {
          heading: "Jane Doe",
          subheading: "Posted 32m ago",
          profileImage: StoryAvatar1,
        },
      },
  ];
 
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