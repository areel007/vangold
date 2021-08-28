import { Modal, Button } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './LogoutModal.css'

const LogoutModal = (props) => {
    return (
        <Modal
            {...props}
            centered
            dialogClassName="modal-style"
        >
            <Modal.Body className="text-center">
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="modal-head" style={{ marginTop: "12rem" }}>Log out from  VanGold</h1>
                <p className="modal-para">Are  you sure you want to  log out from your VanGold account?</p>
                <Button className="modal-btn" variant='success' style={{ margin: "10rem 0" }}>Logout</Button>
            </Modal.Body>
        </Modal>
    );
}

export default LogoutModal;