import { Modal } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import iconOne from "../../../assets/images/icons/twitter.png";
import iconTwo from "../../../assets/images/icons/facebook.png";
import iconThree from "../../../assets/images/icons/whatsapp.png";
import iconFour from "../../../assets/images/icons/linkedin-icon.png";
import iconFive from "../../../assets/images/icons/atta.png";
 import "./ShareModal.css";

const ShareModal = (props) => {
    
    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-style"
        >
            <Modal.Body className='p-5'>
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="modal_-_channelHead share__job__title text-center mt-5">{props.head}</h1>
                <p className="text-center share_-_job_-_title_-_Parag">Spread the word about this Job on Vangold</p>
                <div className="shareIcons_-_img mb-5">
                    <img src={iconOne} alt="iconOne" />
                    <img src={iconTwo} alt="iconOne" />
                    <img src={iconThree} alt="iconOne" />
                    <img src={iconFour} alt="iconOne" />
                    <img src={iconFive} alt="iconOne" />
                </div>
                
            </Modal.Body>
        </Modal>
    );
}

export default ShareModal;