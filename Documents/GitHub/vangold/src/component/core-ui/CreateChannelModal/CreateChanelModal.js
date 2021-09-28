import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
 import "./CreateChanelModal.css";

const CreateChannelModal = (props) => {
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
                <h1 className="modal_-_channelHead mt-5">{props.head}</h1>
                <form id="myform" onSubmit={submitHandler}>
                    <div className="form-input">
                        <label className="modal_-_channel-_-label" htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label className="modal_-_channel-_-label" htmlFor="description">Description</label>
                        <input type="text" />
                    </div>
                </form>
                <div className="modal_-_channel-_-bottom">
                    <span>Make Private</span>
                    <div className="modal_-_channel-_private">
                        <span>When a channel is private, it can only be viewed or joined by invitation</span>
                        <div className="switchssh">
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-end'>
                    <Button className="modal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CreateChannelModal;