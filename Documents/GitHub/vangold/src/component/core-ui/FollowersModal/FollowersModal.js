import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import FollowersAvatar from "../../../assets/images/avatar/Ellipse8.png";

 import "./FollowersModal.css";

 const followersData = [
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
    {
        avatar: FollowersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
    },
]
const FollowersModal = (props) => {

    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-style unfollow__modal__style"
        >
            <Modal.Body className="pb-5 pt-5">
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <div className="followers-unfollow-modalHeader">
                <h1>{props.head}</h1>
                </div>
                <div className="followers_Modal-container">
                {
                    followersData.map((followerData) => (
                   <div className="followers_Modal-box">
                   <img src={followerData.avatar} alt="FollowersAvatar" />
                   <div className="followers-details">
                       <span>{followerData.userName}</span>
                       <span>{followerData.title}</span>
                   </div>
                   </div>
                ))
                }
                
                </div>
                
            </Modal.Body>
        </Modal>
    );
}

export default FollowersModal;