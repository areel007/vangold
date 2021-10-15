import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import uploadImg from "../../../../../assets/images/uploadImg.PNG";

const RequestVerfication = () => {
    const [data, setData] = useState({
        username: '',
        fullName: '',
        category: '',
        image: ''
    });
    const [isUploaded, setIsUploaded] = useState(false);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setData({ ...data, image: e.target.result });
                setIsUploaded(true);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <h1>Request for verification</h1>
                    <p className="text-muted" style={{ fontSize: '14px' }}>A verified badge is a check that appears next to a VanGold account’s name and Job Description
                        to indicate that the account is authentic and has been fully vetted by us.</p>
                    <p className="text-muted mb-4" style={{ fontSize: '14px' }}>Submitting a request for verification does not guarantee that your account will be verified.</p>

                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-16px">Username</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, username: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-16px">Full Name</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, fullName: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-16px">Category</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' onChange={(e) => setData({ ...data, category: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="">
                            <Form.Label className="text-16px">Upload your ID</Form.Label>
                        </Form.Group>
                        <div className='box-upload1'>
                            <div className='image-upload1'>
                                {!isUploaded ? (
                                    <>
                                        <label htmlFor="upload-input">
                                            <img
                                                src={uploadImg}
                                                draggable={"false"}
                                                alt="placeholder"
                                            />
                                        </label>

                                        <input
                                            id="upload-input"
                                            type="file"
                                            accept=".jpg,.jpeg,.gif,.png"
                                            onChange={handleImageChange}
                                        />
                                    </>
                                ) : (
                                    <div className="image-preview1">
                                        <img
                                            id="uploaded-image"
                                            src={data.image}
                                            draggable={false}
                                            alt="uploaded-img"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <p style={{ color: "#444" }}>We require a government-issued photo ID e.g Driver’s License, passport or national identification number.</p>
                        <div className="text-end mt-5">
                            <Button type="submit" className="submit-btn">Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RequestVerfication;