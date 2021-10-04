import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
 import "./UnfollowModal.css";

const UnfollowModal = (props) => {

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
                <div className="Present__screen-footer mt-5">
                    <span>
                        You are about to unfollow Vangold
                    </span>
                </div>
                <div className='mt-5 unfollow_modal-footer'>
                <Button className="modal-btn cancel__unfollow__btn" variant='success'
                        type="submit"
                        form="myform" onClick={props.onHide}>Cancel</Button>
                    <Button className="modal-btn unfollow__btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                    
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default UnfollowModal;