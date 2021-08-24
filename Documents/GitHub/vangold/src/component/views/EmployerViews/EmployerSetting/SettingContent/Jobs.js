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
                <Col xs={8} >
                    <h1>Job Settings</h1>
                    <p className="text-muted text-16px mb-5">Choose the number of jobs you can create and assign per time</p>
                    <Form onSubmit={submitHandler}>
                        <Form.Label className="text-16px">Number of Jobs</Form.Label>
                        <Form.Select className='form-control' size='lg' onChange={(e) => setValue(e.target.value)}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                        <div className="text-end mt-5">
                            <Button type="submit" className="submit-btn">Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPassword;