import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
 import "./PresentScreenModal.css";

const PresentScreenModal = (props) => {

    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-style"
        >
            <Modal.Body className='p-5'>
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="modal_-_channelHead mt-5">{props.head}</h1>
                <div className="Present__screen-footer">
                    <span>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0H2C0.89 0 0 0.89 0 2V16C0 17.11 0.89 18 2 18H20C21.11 18 22 17.11 22 16V2C22 0.89 21.11 0 20 0ZM20 16.02H2V1.98H20V16.02ZM9 9H7L11 5L15 9H13V13H9V9Z" fill="#45B618"/>
                        </svg>
                        Your entire screen
                    </span>
                </div>
                <div className='mt-5 Present__screen-footer text-center'>
                    <Button className="modal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default PresentScreenModal;