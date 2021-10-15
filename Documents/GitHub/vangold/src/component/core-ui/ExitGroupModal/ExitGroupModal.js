import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
 import "./ExitGroupModal.css";

const ExitGroupModal = (props) => {

    return (
        <Modal
            {...props}
            centered
            dialogClassName="exit__group__modal"
        >
            <Modal.Body className='p-5'>
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="exit__group-modal_-header mt-5">{props.head}</h1>
                
                <div className='mt-5 exit-group-modal text-center'>
                <Button className="me-4" variant='success' onClick={props.onHide}>Cancel</Button>
                    <Button variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ExitGroupModal;