import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
 import "./JoinMeetingModal.css";

const JoinMeetingModal = (props) => {
    const { handleSubmit } = useForm();
    
    function onSubmit(data) {}
    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-style"
        >
            <Modal.Body className='p-5'>
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="modal_-_channelHead mt-5">{props.head}</h1>
                <form id="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-input__container">
                        <div className="form__-control">
                            <label htmlFor="name">Meeting ID</label>
                            <input name="text" type="name" />
                        </div>
                    </div>
                </form>
                <div className='mt-5 text-center'>
                    <Button className="modal-btn JoinMeetingModal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default JoinMeetingModal;