import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ResetPassword = () => {
    const [value, setValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h1>Reset Password</h1>
                    <p className="text-muted text-16px">Enter the registered email address to get a password reset link</p>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-5">
                            <Form.Label className="text-16px">Email</Form.Label>
                            <Form.Control required size='lg' className='form-control-emp' type="email" onChange={(e) => setValue(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" className="submit-btn">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPassword;