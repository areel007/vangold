import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
 import "./CreateChanelModal.css";

const CreateChannelModal = (props) => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
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
                <form id="myform" onSubmit={handleSubmit}>
                    <div className="form-input__container">
                        <div className="form__-control">
                            <label htmlFor="name">Name</label>
                            <input name="text" type="name" />
                        </div>
                        <div className="form__-control">
                            <label htmlFor="Username">Description</label>
                            <input name="text" type="description" />
                        </div>
                    </div>
                </form>
                <div style={{marginTop: "20px"}} className="modal_-_channel-_-bottom">
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