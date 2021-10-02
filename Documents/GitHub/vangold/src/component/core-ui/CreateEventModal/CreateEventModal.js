import React, { useRef, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import { DatePicker, TimePicker, Checkbox } from 'antd';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import GuessAdded from "./GuessAdded";
 import "./CreateEventModal.css";

const CreateEventModal = (props) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Company’s Name is required'),
        DatePicker: Yup.string().required('Field is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    
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
                            <label htmlFor="name">Company’s Name</label>
                            <input name="text" type="name" />
                        </div>
                        <div className="form__-control">
                            <div className="date-time-duration">
                                <div className="__DatePicker">
                                    <label htmlFor="Date">Date</label>
                                    <DatePicker name="DatePicker" className="datePickerEventModal" getPopupContainer={(triggerNode) => {
                                        return triggerNode.parentNode;
                                    }} />
                                </div>
                                <div className="__TimePicker__box">
                                    <div className="timer__picker--left">
                                        <label htmlFor="Time">Time</label>
                                        <TimePicker name="TimePicker" className="datePickerEventModal" use12Hours getPopupContainer={(triggerNode) => {
                                            return triggerNode.parentNode;
                                        }} />
                                    </div>
                                    <div className="time__to">
                                        <span className="time-to">to</span>
                                    </div>
                                    <TimePicker name="TimePicker" className="datePickerEventModal TimePicker2" use12Hours getPopupContainer={(triggerNode) => {
                                        return triggerNode.parentNode;
                                    }} />
                                </div>
                            </div>
                            <Checkbox className="checkBox__eventModal">
                                <span>This event will take place on Sept 15,2021 from 12:00 PM to 02:00 PM</span>
                            </Checkbox>
                        </div>
                        <div className="form__-control meetingId">
                            <label htmlFor="name">Meeting ID</label>
                            <div className="inner__meetingId">
                                <span>969 042 3871</span>
                                <svg style={{cursor: "pointer"}} width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#45B618"/>
                                </svg>

                            </div>
                        </div>
                        <div className="form__-control add__guests__">
                            <label htmlFor="Add guests">Add guests</label>
                            <input name="AddGuestPicker" name="addGuests" type="name"/>
                            <button className="add_guests-btn" disabled={!formState.isValid}>Add</button>

                        </div>
                        <GuessAdded />
                        <div className="guests__can__box">
                            <span className="guests__can__box-title">Guests can</span>
                            <Checkbox className="checkBox__eventModal">
                                <span>Invite others</span>
                            </Checkbox>
                            <Checkbox className="checkBox__eventModal checkBox__eventModal2">
                                <span>See guest list</span>
                            </Checkbox>
                        </div>
                    </div>
                </form>
                <div className='mt-5 text-end'>
                    <Button className="modal-btn create_event_modal-btn" variant='success'
                        type="submit"
                        form="myform">{props.btntext}</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CreateEventModal;