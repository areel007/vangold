import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
 
const SendBidModal = (props) => {
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
            dialogClassName="modal-style"
        >
            <Modal.Body className='p-5'>
                <AiOutlineCloseCircle className="modal-close" onClick={props.onHide} />
                <h1 className="modal-head mt-5">{props.head}</h1>
                <p className="modal-para-1">{props.para}</p>
                <Form id="myform" onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Control className='text-box' required size='lg' as="textarea" rows={12} onChange={(e) => setValue(e.target.value)} />
                    </Form.Group>
                </Form>
                <div className='mt-5 text-end'>
                    <Button className="modal-btn-cancel me-4" variant='success' onClick={props.onHide}>Cancel</Button>
                    <Button className="modal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default SendBidModal;