import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import './ProfileEdit.css'

const ProfileEdit = ({ showSideMenu, setShowSideMenu }) => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <section id="profile-edit" className="mb-5 my-lg-3 py-3">

            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mt-lg-5 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={10} className="p-5 bg-colorr-w">
                        <h1>Edit Profile</h1>
                        <Row>
                            <Col xs={12} lg={9}>
                                <Form onSubmit={submitHandler}>
                                    <Row className="mb-4">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">First Name</Form.Label>
                                            <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Last Name</Form.Label>
                                            <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-16px">Email Address</Form.Label>
                                        <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, emailAddress: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-16px">Phone Number</Form.Label>
                                        <Form.Control required size='lg' type='number' className='form-control-edit' onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-16px">Address</Form.Label>
                                        <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, address: e.target.value })} />
                                    </Form.Group>
                                    <Row className="mb-4">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">City</Form.Label>
                                            <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, city: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">State</Form.Label>
                                            <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, state: e.target.value })} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-4">
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Zip/Postal Code</Form.Label>
                                            <Form.Control required size='lg' type='number' className='form-control-edit' onChange={(e) => setData({ ...data, postalCode: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-16px">Country</Form.Label>
                                            <Form.Control required size='lg' className='form-control-edit' onChange={(e) => setData({ ...data, country: e.target.value })} />
                                        </Form.Group>
                                    </Row>
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
}

export default ProfileEdit;