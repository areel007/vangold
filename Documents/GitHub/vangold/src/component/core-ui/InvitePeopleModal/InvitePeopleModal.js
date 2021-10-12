import React from "react";
import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
 import "./InvitePeopleModal.css";

const InvitePeopleModal = (props) => {
    
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
                <form id="myform" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-input__container">
                        <div className="form__-control">
                            <label htmlFor="Email">Email</label>
                            <input name="email" type="email" required />
                        </div>
                    </div>
                </form>
                <div className='mt-5 invite__people_modal-footer'>
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.2721 14.7272C2.06295 13.518 2.06295 11.5523 3.2721 10.3431L6.10053 7.5147L4.75703 6.1712L1.9286 8.99962C-0.0230144 10.9512 -0.0230144 14.1191 1.9286 16.0707C3.88022 18.0223 7.04805 18.0223 8.99967 16.0707L11.8281 13.2423L10.4846 11.8988L7.65617 14.7272C6.44701 15.9363 4.48126 15.9363 3.2721 14.7272ZM6.87835 12.5352L12.5352 6.8783L11.121 5.46409L5.46413 11.1209L6.87835 12.5352ZM8.99967 1.92855L6.17124 4.75698L7.51474 6.10048L10.3432 3.27206C11.5523 2.06291 13.5181 2.0629 14.7272 3.27206C15.9364 4.48121 15.9364 6.44697 14.7272 7.65612L11.8988 10.4845L13.2423 11.828L16.0707 8.99962C18.0224 7.04801 18.0224 3.88017 16.0707 1.92855C14.1191 -0.02306 10.9513 -0.0230601 8.99967 1.92855Z" fill="#45B618"/>
                        </svg>

                        Copy invite link
                    </span>
                    <Button className="modal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default InvitePeopleModal;