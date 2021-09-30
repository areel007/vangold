import cover from "../../../../assets/images/profile/cover1.png";
import avatar from "../../../../assets/images/profile/avatar3.png";
import cam from "../../../../assets/images/profile/cam.png";
import tick from "../../../../assets/images/profile/tick.png";
import FreelancerProfileSideMenu from "../../../core-ui/FreelancerProfileSideMenu/FreelancerProfileSideMenu";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import "./FreelancerProfileEdit.css";

const FreelancerProfileEdit = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        linkedInProfileURL: '',
        category: '',
        subcategory: '',
        description: '',
        rate: '',
        language: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        password: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <section id="freelancer-profile-edit" className="pb-5 my-4">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className="mx-auto mt-4 d-none d-lg-block">
                        <FreelancerProfileSideMenu />
                    </Col>
                    <Col xs={12} lg={10} className="mx-auto bg-color-w">
                        <div>
                            <img src={cover} alt="cover picture" className="img-fluid cover" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="box-upload">
                                <div className="image-upload">
                                    <div className="d-flex">
                                        <img
                                            id="uploaded-image"
                                            src={image ? image : avatar}
                                            draggable={false}
                                            alt="uploaded-img"
                                        />
                                        <div className="align-self-end cam">
                                            <label className="label" htmlFor="upload-input">
                                                <img src={cam} draggable={"false"} alt="placeholder" />
                                            </label>

                                            <input
                                                id="upload-input"
                                                type="file"
                                                accept=".jpg,.jpeg,.gif,.png"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-16px mt-3">Lagos Nigeria</p>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <h1>Daramola O.</h1>
                            <div className="ms-3">
                                <img src={tick} alt="tick" className="img-fluid" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-16px mt-3 fw-bold">Product Designers <span style={{fontSize: 16, fontWeight: 500, color: "#4F4F4F" }}>164 Followers</span></p>
                        </div>
                        <Row className="p-5" style={{ marginTop: "5rem" }}>
                            <Col xs={12} lg={9}>
                                <Form onSubmit={submitHandler}>
                                    <Row className="mb-5">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">First Name</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Last Name</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">Email Address</Form.Label>
                                        <Form.Control required size='lg' type='email' className='form-control-1' onChange={(e) => setData({ ...data, emailAddress: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">LinkedIn Profile URL</Form.Label>
                                        <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, linkedInProfileURL: e.target.value })} />
                                    </Form.Group>
                                    <Row className="mb-5">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Category</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, category: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Subcategory</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, subcategory: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">Description</Form.Label>
                                        <Form.Control required size='lg' className='form-text-box' as="textarea" rows={12} onChange={(e) => setData({ ...data, description: e.target.value })} />
                                    </Form.Group>
                                    <p className="text-16px">Education</p>
                                    <div className="d-flex justify-content-between mb-5 box-edu">
                                        <div>
                                            <p className="text-18px">University of Ibadan</p>
                                            <p className="text-16px text-muted">Bachelor of Science (BS) of Computer Science</p>
                                            <p className="text-16px text-muted">2016 - 2020</p>
                                        </div>
                                        <div><BsThreeDots className="three-dots" /></div>
                                    </div>
                                    <p className="text-16px">Employment</p>
                                    <div className="d-flex justify-content-between mb-5 box-edu">
                                        <div>
                                            <p className="text-18px">Head Researcher | Google</p>
                                            <p className="text-16px text-muted">January 2019 - Present</p>
                                        </div>
                                        <div><BsThreeDots className="three-dots" /></div>
                                    </div>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">Rate/Hour</Form.Label>
                                        <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, rate: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">Language</Form.Label>
                                        <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, language: e.target.value })} />
                                    </Form.Group>
                                    <Row className="mb-5">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">City</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, city: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">State</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, state: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-5">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Zip/Postal Code</Form.Label>
                                            <Form.Control required size='lg' type='number' className='form-control-1' onChange={(e) => setData({ ...data, postalCode: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Country</Form.Label>
                                            <Form.Control required size='lg' className='form-control-1' onChange={(e) => setData({ ...data, country: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-5">
                                        <Form.Label className="text-16px">Password</Form.Label>
                                        <Form.Control required size='lg' type='password' className='form-control-1' onChange={(e) => setData({ ...data, password: e.target.value })} />
                                    </Form.Group>
                                    <div className="text-end mt-5">
                                        <Button type="submit" className="submit-btn">Save</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FreelancerProfileEdit;
