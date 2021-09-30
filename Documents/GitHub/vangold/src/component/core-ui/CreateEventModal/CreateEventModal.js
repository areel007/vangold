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
                                <div className="__Picker">
                                    <DatePicker name="DatePicker" className="datePickerEventModal" getPopupContainer={(triggerNode) => {
                                        return triggerNode.parentNode;
                                    }} />
                                    <div className="invalid-feedback">{errors.DatePicker?.message}</div>
                                </div>
                                <div className="__Picker">
                                    <TimePicker name="TimePicker" className="datePickerEventModal" use12Hours getPopupContainer={(triggerNode) => {
                                        return triggerNode.parentNode;
                                    }} />
                                    <div className="invalid-feedback">{errors.DatePicker?.message}</div>
                                </div>
                                <div className="durationInput-Box">
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 2C22 3.1 21.1 4 20 4C19.82 4 19.65 3.98 19.49 3.93L15.93 7.48C15.98 7.64 16 7.82 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 7.82 12.02 7.64 12.07 7.48L9.52 4.93C9.36 4.98 9.18 5 9 5C8.82 5 8.64 4.98 8.48 4.93L3.93 9.49C3.98 9.65 4 9.82 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8C2.18 8 2.35 8.02 2.51 8.07L7.07 3.52C7.02 3.36 7 3.18 7 3C7 1.9 7.9 1 9 1C10.1 1 11 1.9 11 3C11 3.18 10.98 3.36 10.93 3.52L13.48 6.07C13.64 6.02 13.82 6 14 6C14.18 6 14.36 6.02 14.52 6.07L18.07 2.51C18.02 2.35 18 2.18 18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2Z" fill="#bebdbd"/>
                                    </svg>
                                    <input name="DurationPicker" className="durationInput" type="text" placeholder="Duration" />
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